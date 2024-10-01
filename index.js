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
// const player = new Player({
// 	imageSrc: './img/king/idle.png',
// 	frameRate: 11,
// 	animations: {
// 		idleRight: {
// 			frameRate: 11,
// 			frameBuffer: 2,
// 			loop: true,
// 			imageSrc: './img/king/idle.png',
// 		},
// 		idleLeft: {
// 			frameRate: 11,
// 			frameBuffer: 2,
// 			loop: true,
// 			imageSrc: './img/king/idleLeft.png',
// 		},
// 		runRight: {
// 			frameRate: 8,
// 			frameBuffer: 4,
// 			loop: true,
// 			imageSrc: './img/king/runRight.png',
// 		},
// 		runLeft: {
// 			frameRate: 8,
// 			frameBuffer: 4,
// 			loop: true,
// 			imageSrc: './img/king/runLeft.png',
// 		},
// 		enterDoor: {
// 			frameRate: 8,
// 			frameBuffer: 4,
// 			loop: false,
// 			imageSrc: './img/king/enterDoor.png',
// 			onComplete: () => {
// 				gsap.to(overlay, {
// 					opacity: 1,
// 					onComplete: () => {
// 						level++;
// 						if (level === 4) level = 1;
// 						levels[level].init();
// 						player.switchSprite('idleRight');
// 						player.preventInput = false;
// 						gsap.to(overlay, {
// 							opacity: 0,
// 						});
// 					},
// 				});
// 			},
// 		},
// 	},
// });

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
						if (level === 4) level = 1;
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
						levels[level].init();
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

let level = 4;
let levels = {
	1: {
		init: function () {
			parsedCollisions = collisionLevel1.parse2D();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			player.collisionBlocks = collisionBlocks;

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
						x: 767,
						y: 270,
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
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			player.collisionBlocks = collisionBlocks;
			player.position.x = 96;
			player.position.y = 140;

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
						x: 772,
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
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			player.collisionBlocks = collisionBlocks;
			player.position.x = 760;
			player.position.y = 210;

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
						x: 176,
						y: 334,
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
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			player.collisionBlocks = collisionBlocks;
			player.position.x = 300;
			player.position.y = 100;

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
						x: 772,
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
};

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
	collisionBlocks.forEach((collisionBlock) => {
		collisionBlock.draw();
	});

	doors.forEach((door) => {
		door.draw();
	});

	player.handleInput(keys);
	player.draw();
	player.update();

	c.save();
	c.globalAlpha = overlay.opacity;
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
	c.restore();
}
levels[level].init();
animate();
