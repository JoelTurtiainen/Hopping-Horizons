let debug = true;

const gameName = 'Tähän pelin nimi';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let msPrev = window.performance.now();
const fps = 60;
const msPerFrame = 1000 / fps;
let frames = 0;

canvas.width = 1024;
canvas.height = 576;

let parsedCollisions;
let parsedTraps;
let collisionBlocks;
let background;
let doors;
let entities;
let collectables;
let resetEntities = true;

const fullHealth = 5;

const uiImgSrcs = {
	coin: './img/ui/hud_coins.png',
	numbers: './img/ui/numbers.png',
	hearts: './img/ui/hearts.png',
};

const ui = new Ui({
	position: { x: 10, y: 10 },
	imgSrcs: uiImgSrcs,
});

const player = new Player({
	imageSrc: './img/bunny/idle.png',
	frameRate: 9,
	animations: {
		idleRight: {
			frameRate: 9,
			frameBuffer: 10,
			loop: true,
			imageSrc: './img/bunny/idle.png',
		},
		idleLeft: {
			frameRate: 9,
			frameBuffer: 10,
			loop: true,
			imageSrc: './img/bunny/idleLeft.png',
		},
		runRight: {
			frameRate: 8,
			frameBuffer: 5,
			loop: true,
			imageSrc: './img/bunny/runRight.png',
		},
		runLeft: {
			frameRate: 8,
			frameBuffer: 5,
			loop: true,
			imageSrc: './img/bunny/runLeft.png',
		},
		enterDoor: {
			frameRate: 8,
			frameBuffer: 5,
			loop: false,
			imageSrc: './img/bunny/enterDoor.png',
			onComplete: () => {
				gsap.to(overlay, {
					opacity: 1,
					onComplete: () => {
						level++;
						if (level === 10) level = 0;
						if (level === 0) {
							player.clearInventory();
							player.health = fullHealth;
						}
						levels[level].init();
						player.switchSprite('idleRight');
						player.preventInput = false;
						gsap.to(overlay, {
							opacity: 0,
						});
					},
				});
			},
		},
		hurt: {
			frameRate: 7,
			frameBuffer: 5,
			loop: false,
			imageSrc: './img/bunny/hurt.png',
			onComplete: () => {
				gsap.to(overlay, {
					opacity: 1,
					onComplete: () => {
						if (player.health > 0) {
							resetEntities = false;
							player.health -= 1;
							levels[level].init();
							resetEntities = true;
						} else if (player.health === 0) {
							player.health = fullHealth;
							player.clearInventory();
							levels[0].init();
						}
						player.switchSprite('hurt');
						player.preventInput = false;
						gsap.to(overlay, {
							opacity: 0,
						});
					},
				});
			},
		},
	},
});

let levels = parseMapData();

let level = 8;

const keys = {
	w: {
		pressed: false,
	},
	a: {
		pressed: false,
	},
	d: {
		pressed: false,
	},
};

const overlay = {
	opacity: 0,
};

function animate() {
	window.requestAnimationFrame(animate);

	const msNow = window.performance.now();
	const msPassed = msNow - msPrev;
	if (msPassed < msPerFrame) return;
	const excessTime = msPassed % msPerFrame;
	msPrev = msNow - excessTime;

	background.draw();

	if (debug) {
		collisionBlocks.forEach((collisionBlock) => {
			collisionBlock.draw();
		});
	}

	doors.forEach((door) => {
		door.draw();
	});

	player.handleInput(keys);
	player.draw();
	player.update();

	if (entities.collectable) {
		const collidedEntity = player.checkForEntityCollision(entities.collectable);
		if (collidedEntity) {
			//console.log(collidedEntity);
			entities.collectable = entities.collectable.filter((i) => i !== collidedEntity);
			if (player.inventory[collidedEntity.name]) player.inventory[collidedEntity.name]++;
			else player.inventory[collidedEntity.name] = 1;
		}

		Object.entries(entities).forEach(([key, value]) => {
			value.forEach((entity) => {
				entity.draw();
			});
		});
	}

	//let invCoins = player.inventory.coin_small_gold
	let invCoins = player.inventory.undefined;

	if (level === 0) {
		c.font = '64px serif';
		c.fillStyle = 'rgb(255,255,255)';
		c.textAlign = 'center';
		c.fillText(`${gameName}`, canvas.width / 2, 300);
		c.textAlign = 'left';
	} else if (level === 9) {
		c.font = '64px serif';
		c.fillStyle = 'rgb(255,255,255)';
		c.textAlign = 'center';
		c.fillText('Thank You for playing!', canvas.width / 2, 300);
		c.font = '32px serif';

		c.fillText(`You collected ${invCoins} coins`, canvas.width / 2, 350);
		c.textAlign = 'left';
	} else {
		ui.draw({ coins: invCoins, health: player.health, level });
	}

	c.save();
	c.globalAlpha = overlay.opacity;
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
	c.restore();
}
levels[level].init();

// Calling the Animate() function after the entire page has loaded reduces the "clipping", especially in Firefox when user refresh page.
window.addEventListener("load", () => {
	animate();
});
