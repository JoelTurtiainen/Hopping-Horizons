class Player extends Sprite {
	constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
		super({ imageSrc, frameRate, animations, loop });
		this.friction = 0.35;
		this.maxSpeed = 5;
		this.position = {
			x: 200,
			y: 200,
		};

		this.velocity = {
			x: 0,
			y: 0,
		};

		this.sides = {
			bottom: this.position.y + this.height,
		};
		this.gravity = 0.35;

		this.collisionBlocks = collisionBlocks;
		this.health = fullHealth;
		this.inventory = {
			coin_small_gold: 0
		}
	}

	update() {
		this.position.x += this.velocity.x;
		this.updateHitBox();
		this.checkForHorizontalCollisions();
		this.applyGravity();
		this.updateHitBox();
		this.checkForVerticalCollisions();
		if (debug) {
			c.fillStyle = 'rgba(0,0,255,0.3';
			// c.fillRect(this.position.x, this.position.y, this.width, this.height)
			c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
		}
	}

	handleInput(keys) {
		if (this.preventInput) return;
		if (keys.d.pressed) {
			this.switchSprite('runRight');
			if (this.velocity.x < this.maxSpeed) {
				this.velocity.x++;
			}
			this.lastDirection = 'right';
		} else if (keys.a.pressed) {
			this.switchSprite('runLeft');
			if (this.velocity.x > -this.maxSpeed) {
				this.velocity.x--;
			}
			this.lastDirection = 'left';
		} else {
			if (this.velocity.y === 0) this.velocity.x *= this.friction;
			else this.velocity.x *= 0.95;
			if (this.lastDirection === 'left') this.switchSprite('idleLeft');
			else this.switchSprite('idleRight');
		}
	}

	switchSprite(name) {
		if (this.image === this.animations[name].image) return;
		this.currentFrame = 0;
		this.image = this.animations[name].image;
		this.frameRate = this.animations[name].frameRate;
		this.frameBuffer = this.animations[name].frameBuffer;
		this.loop = this.animations[name].loop;
		this.currentAnimation = this.animations[name];
	}

	updateHitBox() {
		this.hitbox = {
			position: {
				x: this.position.x + 60,
				y: this.position.y + 35,
			},
			width: 35,
			height: 53,
		};
	}

	checkForHorizontalCollisions() {
		//check for horizontal collisions
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];
			// if collision exists
			if (
				this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
				this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
				this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
				this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
			) {
				if (collisionBlock instanceof TrapBlock) {
					this.preventInput = true;
					this.velocity.x = 0;
					this.switchSprite('hurt');
				}

				if (this.velocity.x < -0) {
					const offset = this.hitbox.position.x - this.position.x;
					this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
					break;
				}

				if (this.velocity.x > 0) {
					const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
					this.position.x = collisionBlock.position.x - offset - 0.01;
					break;
				}
			}
		}
	}

	applyGravity() {
		// apply gravity
		this.velocity.y += this.gravity;
		this.position.y += this.velocity.y;
	}

	checkForVerticalCollisions() {
		// check for vertical collisions
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];
			// if collision exists
			if (
				this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
				this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
				this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
				this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
			) {
				if (collisionBlock instanceof TrapBlock) {
					this.preventInput = true;
					this.velocity.x = 0;
					this.switchSprite('hurt');
				}

				if (this.velocity.y < -0) {
					this.velocity.y = 0;
					const offset = this.hitbox.position.y - this.position.y;
					this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
					break;
				}

				if (this.velocity.y > 0) {
					this.velocity.y = 0;
					const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
					this.position.y = collisionBlock.position.y - offset - 0.01;
					break;
				}
			}
		}
	}
	checkForEntityCollision(entities) {
		return entities.find(
			(entity) =>
				this.hitbox.position.x <= entity.position.x + entity.width &&
				this.hitbox.position.x + this.hitbox.width >= entity.position.x &&
				this.hitbox.position.y + this.hitbox.height >= entity.position.y &&
				this.hitbox.position.y <= entity.position.y + entity.height
		);
	}

	clearInventory() {
		for (const [key, value] of Object.entries(this.inventory)) {
			this.inventory[key] = 0;
		};
	}
}
