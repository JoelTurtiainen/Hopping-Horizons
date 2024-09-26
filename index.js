const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let msPrev = window.performance.now();
const fps = 60;
const msPerFrame = 1000 / fps;
let frames = 0;

canvas.width = 1024;
canvas.height = 576;
c.imageSmoothingEnabled = false;
c.fillStyle = 'white';
c.font = '20px Arial';

const scaledCanvas = {
	width: canvas.width / 4,
	height: canvas.height / 4,
};

// Floor Collision

const floorCollisions2D = [];
for (let i = 0; i < floorCollisions.length; i += 36) {
	floorCollisions2D.push(floorCollisions.slice(i, i + 36));
}

const collisionBlocks = [];
floorCollisions2D.forEach((row, y) => {
	row.forEach((symbol, x) => {
		if (symbol === 1) {
			collisionBlocks.push(new CollisionBlock({ position: { x: x * 16, y: y * 16 } }));
		}
	});
});

// Platform Collisions

const platformCollisions2D = [];
for (let i = 0; i < platformCollisions.length; i += 36) {
	platformCollisions2D.push(platformCollisions.slice(i, i + 36));
}

const platformCollisionBlocks = [];
platformCollisions2D.forEach((row, y) => {
	row.forEach((symbol, x) => {
		if (symbol === 1) {
			platformCollisionBlocks.push(new CollisionBlock({ position: { x: x * 16, y: y * 16 }, height: 4 }));
		}
	});
});

// Pickups
const pickupCollisions2D = [];
for (let i = 0; i < pickupCollisions.length; i += 36) {
	pickupCollisions2D.push(pickupCollisions.slice(i, i + 36));
}

const pickupCollisionBlocks = [];
pickupCollisions2D.forEach((row, y) => {
	row.forEach((symbol, x) => {
		if (symbol !== 0) {
			pickupCollisionBlocks.push(new PickableItem({ symbol, imageSrc: './img/items.png', position: { x: x * 16, y: y * 16 } }));
		}
	});
});

// Traps
const trapBlocks = [];
// Check if trapTiles array is defined
if (typeof trapTiles != 'undefined') {
	const trapTiles2D = [];
	for (let i = 0; i < trapTiles.length; i += 36) {
		trapTiles2D.push(trapTiles.slice(i, i + 36));
	}

	trapTiles2D.forEach((row, y) => {
		row.forEach((symbol, x) => {
			//The trap image corresponds to the "symbol" of the trapTiles array
			if (symbol != 0) {
				trapBlocks.push(
					new Trap({
						position: {
							x: x * 16,
							y: y * 16,
						},
						imageSrc: `./img/traps/trap${symbol}.png`,
						scale: 1,
						symbol,
					})
				);
			};
		});
	});
};

const startEndCollisions2D = []
for (let i = 0; i < startEndCollisions.length; i += 50) {
    startEndCollisions2D.push(startEndCollisions.slice(i, i + 50))
}

const startEndCollisionBlocks = []
startEndCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 999) {
            startEndCollisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                }
            }))
        }
    })
})

const gravity = 0.1;

const player = new Player({
	position: {
		x: 100,
		y: 300,
	},
	collisionBlocks,
	platformCollisionBlocks,
	pickupCollisionBlocks,
	startEndCollisionBlocks,
	character: characterTwo,
});

const keys = {
	d: {
		pressed: false,
	},
	a: {
		pressed: false,
	},
};

const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: './img/background.png',
});

const backgroundImageHeight = 432; // == -background.image.height

const camera = {
	position: {
		x: 0,
		y: -backgroundImageHeight + scaledCanvas.height,
	},
};

let queueCharacterChange = false;

function animate() {
	window.requestAnimationFrame(animate);

	const msNow = window.performance.now();
	const msPassed = msNow - msPrev;

	if (msPassed < msPerFrame) return;

	const excessTime = msPassed % msPerFrame;
	msPrev = msNow - excessTime;

	c.save();
	c.scale(4, 4);
	c.translate(camera.position.x, camera.position.y);
	background.update();

	// collisionBlocks.forEach((block) => {
	// 	block.update();
	// });

	// platformCollisionBlocks.forEach((block) => {
	// 	block.update();
	// });

	pickupCollisionBlocks.forEach((block) => {
		if (!block.collected) {
			block.update();
		}
	});

	player.checkForHorizontalCanvasCollision();
	player.update();

	if (trapBlocks.length > 0) {
		for (const trap of trapBlocks) {
			trap.update();
			if (collision({ object1: player.hitbox, object2: trap })) {
				// Teleport  a player to spwnPoint and reset camera, if player hit the trap.
				player.teleport({ position: player.spawnPoint });

				camera.position.x = 0;
				camera.position.y = -backgroundImageHeight + scaledCanvas.height;
				break;
			}
		}
	}
	  

	// TODO: change to switch statement
	player.velocity.x = 0;
	if (keys.d.pressed) {
		player.switchSprite('Run');
		player.velocity.x = 2;
		player.lastDirection = 'right';
		player.shouldPanCameraToTheLeft({ canvas, camera });
	} else if (keys.a.pressed) {
		player.switchSprite('RunLeft');
		player.velocity.x = -2;
		player.lastDirection = 'left';
		player.shouldPanCameraToTheRight({ canvas, camera });
	} else if (player.velocity.y === 0) {
		if (player.lastDirection === 'right') player.switchSprite('Idle');
		else player.switchSprite('IdleLeft');
	}

	if (player.velocity.y < 0) {
		player.shouldPanCameraDown({ camera, canvas });
		if (player.lastDirection === 'right') player.switchSprite('Jump');
		else player.switchSprite('JumpLeft');
	} else if (player.velocity.y > 0) {
		player.shouldPanCameraUp({ camera, canvas });
		if (player.lastDirection === 'right') player.switchSprite('Fall');
		else player.switchSprite('FallLeft');
	}

	if (queueCharacterChange) {
		player.switchCharacter(queueCharacterChange);
		queueCharacterChange = false;
	}
	player.checkForStartEndCollisions();

	c.restore();

	// Temporary inventory UI
	let invTextOffset = 20;
	for (const [key, value] of Object.entries(player.stats.inventory)) {
		c.fillText(`${value}x ${key}`, canvas.width - 100, invTextOffset);
		invTextOffset += 20;
	}

	// Bottom-middle position of player
	const playerX = (player.hitbox.position.x + player.hitbox.width / 2).toFixed(2);
	const playerY = (player.hitbox.position.y + player.hitbox.height).toFixed(2);

	c.fillText(`X:${playerX}`, 0, 20);
	c.fillText(`Y:${playerY}`, 0, 40);

	frames++;
}

animate();

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = true;
			break;
		case 'a':
			keys.a.pressed = true;
			break;
		case 'w':
			if (!event.repeat && player.velocity.y === 0) {
				player.velocity.y = -3.25;
			}
			break;
		case 'q':
			queueCharacterChange = characterOne;
			break;
		case 'e':
			queueCharacterChange = characterTwo;
			break;
	}
});

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = false;
			break;
		case 'a':
			keys.a.pressed = false;
			break;
	}
});
