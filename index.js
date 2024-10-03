let debug = false;

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
let inventory = {};

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
						if (level === 5) level = 4;
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
			entities = entitiesLevel4.createEntityArrayFromObject();
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
	5: {
		init: function () {
			parsedCollisions = collisionLevel5.parse2D();
			collisionBlocks = parsedCollisions.createObjectsFrom2D();
			player.collisionBlocks = collisionBlocks;
			player.position.x = 50;
			player.position.y = 100;

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
	6: {
        init: function () {
            parsedCollsions = collisionLevel6.parse2D()
            collisionBlocks = parsedCollsions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 100
            player.position.y = 500

            if (player.currentAnimation)
                player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: './img/backgroundLevel6.png'
            })

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
                    autoplay: false
                })
            ]

        }
    },
    7: {
        init: function () {
            parsedCollsions = collisionLevel7.parse2D();
            collisionBlocks = parsedCollsions.createObjectsFrom2D();
            player.collisionBlocks = collisionBlocks
            player.position.x = 350;
            player.position.y = 64;

            if (player.currentAnimation)
                player.currentAnimation.isActive = false;

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: './img/backgroundLevel7.png'
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
                    autoplay: false
                })
            ];

        }
    },
	8: {
        init: function () {
            parsedCollsions = collisionLevel8.parse2D();
            collisionBlocks = parsedCollsions.createObjectsFrom2D();
            player.collisionBlocks = collisionBlocks;
            player.position.x = 100;
            player.position.y = 500;

            if (player.currentAnimation)
                player.currentAnimation.isActive = false;

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: './img/backgroundLevel8.png'
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
                    autoplay: false
                })
            ];

        }
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

	if (entities) {
		const collidedEntity = player.checkForEntityCollision(entities);
		if (collidedEntity) {
			console.log(collidedEntity);
			entities = entities.filter((i) => i !== collidedEntity);
			if (inventory[collidedEntity.name]) inventory[collidedEntity.name]++;
			else inventory[collidedEntity.name] = 1;
		}

		entities.forEach((entity) => {
			entity.draw();
		});
	}

	c.save();
	c.globalAlpha = overlay.opacity;
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
	c.restore();
}
levels[level].init();
animate();
