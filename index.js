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
let inventory = {};

const fullHealth = 5;

const uiImgSrcs = {
	coin: './img/ui/hud_coins.png',
	numbers: './img/ui/numbers.png',
	hearts: './img/ui/hearts.png'
};

const ui = new Ui({
	position:{x:10,y:10},
	imgSrcs:uiImgSrcs,
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
							player.health -= 1;
							levels[level].init();
						}
						else if (player.health === 0) {
							player.health = fullHealth;
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

let level = 4;
/*
let levels = {
	0: {
		init: function () {
			level = 0;
			parsedCollisions = collisionLevel0.parse2D();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			entities = [];
			player.collisionBlocks = collisionBlocks;
			player.position.x = 100;
			player.position.y = 320;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel0.png',
			});

			doors = [
				new Sprite({
					position: {
						x: canvas.width/2,
						y: 336,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	1: {
		init: function () {
			parsedCollisions = collisionLevel1.parse2D();
			entities = entitiesLevel1.createEntityArrayFromObject();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 300;
			player.position.y = 100;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel1.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 850,
						y: 336,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	2: {
		init: function () {
			parsedCollisions = collisionLevel2.parse2D();
			entities = [];
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 50;
			player.position.y = 100;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel2.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 855,
						y: 336,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	3: {
		init: function () {
			parsedCollisions = collisionLevel3.parse2D();
			entities = entitiesLevel3.createEntityArrayFromObject();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 100;
			player.position.y = 350;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel3.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 670,
						y: 80,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	4: {
		init: function () {
			parsedCollisions = collisionLevel4.parse2D();
			entities = entitiesLevel4.createEntityArrayFromObject();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 350;
			player.position.y = 64;
		},
	},
	4: {
		init: function () {
			parsedCollsions = collisionLevel4.parse2D();
			collisionBlocks = parsedCollsions.createObjectsFrom2D();
			entities = entitiesLevel4.createEntityArrayFromObject();
			player.collisionBlocks = collisionBlocks;
			player.position.x = 350;
			player.position.y = 64;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel4.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 32,
						y: 400,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	5: {
		init: function () {
			parsedCollisions = collisionLevel5.parse2D();
			entities = entitiesLevel5.createEntityArrayFromObject();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 100;
			player.position.y = 500;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel5.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 860,
						y: 400,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	6: {
		init: function () {
			parsedCollisions = collisionLevel6.parse2D();
			entities = [];
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 87;
			player.position.y = 481;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel6.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 817,
						y: 399,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	7: {
		init: function () {
			parsedCollisions = collisionLevel7.parse2D();
			entities = [];
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 148;
			player.position.y = 165;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel7.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 614,
						y: 144,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	8: {
		init: function () {
			parsedCollisions = collisionLevel8.parse2D();
			entities = [];
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			if (entities.solid) collisionBlocks.push(...entities.solid);
			player.collisionBlocks = collisionBlocks;
			player.position.x = 850;
			player.position.y = 336;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel8.png',
			});

			doors = [
				new Sprite({
					position: {
						x: 859,
						y: 144,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
	9: {
		init: function () {
			parsedCollisions = collisionLevel9.parse2D();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			entities = [];
			player.collisionBlocks = collisionBlocks;
			player.position.x = 100;
			player.position.y = 380;

			if (player.currentAnimation) player.currentAnimation.isActive = false;

			background = new Sprite({
				position: {
					x: 0,
					y: 0,
				},
				imageSrc: './img/backgroundLevel9.png',
			});

			doors = [
				new Sprite({
					position: {
						x: canvas.width/2,
						y: 400,
					},
					imageSrc: './img/doorOpen.png',
					frameRate: 5,
					frameBuffer: 7,
					loop: false,
					autoplay: false,
				}),
			];
		},
	},
};
*/

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
			console.log(collidedEntity);
			entities.collectable = entities.collectable.filter((i) => i !== collidedEntity);
			if (inventory[collidedEntity.name]) inventory[collidedEntity.name]++;
			else inventory[collidedEntity.name] = 1;
		}

		Object.entries(entities).forEach(([key, value]) => {
			value.forEach((entity) => {
				entity.draw();
			});
		});
	}
	let invCoins = inventory.undefined;

	if (level === 0) {
		c.font = '64px serif';
        c.fillStyle = 'rgb(255,255,255)'
		c.textAlign = 'center';
        c.fillText(`${gameName}`,canvas.width/2 ,300);
		c.textAlign = 'left';
	}
	else if (level === 9) {
		c.font = '64px serif';
        c.fillStyle = 'rgb(255,255,255)'
		c.textAlign = 'center';
        c.fillText('Thank You for playing!',canvas.width/2 ,300);
		c.font = '32px serif';

		
		if (invCoins != undefined) {
			//invCoins = inventory.coin_small_gold;
			invCoins = inventory.undefined;
		}
		else {
			invCoins = 0;
		}
		c.fillText(`You collected ${invCoins} coins`,canvas.width/2 ,350);
		c.textAlign = 'left';
	}
	else {
		ui.draw({coins:invCoins, health: player.health, level});
	}

	c.save();
	c.globalAlpha = overlay.opacity;
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
	c.restore();
}
levels[level].init();
animate();
