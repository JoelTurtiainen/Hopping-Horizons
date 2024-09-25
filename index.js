const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

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

const gravity = 0.1;

const player = new Player({
	position: {
		x: 100,
		y: 300,
	},
	collisionBlocks,
	platformCollisionBlocks,
	pickupCollisionBlocks,
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
			player.velocity.y = -3.25;
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
