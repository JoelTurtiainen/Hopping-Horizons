class Sprite {
	constructor({ position, imageSrc, frameRate = 1, animations, frameBuffer = 2, loop = true, autoplay = true, scale = 1 }) {
		this.position = position;
		this.scale = scale;
		this.loaded = false;
		this.image = new Image();
		this.image.onload = () => {
			this.loaded = true;
			this.width = (this.image.width / this.frameRate) * this.scale;
			this.height = this.image.height * this.scale;
		};
		this.image.src = imageSrc;
		this.frameRate = frameRate;
		this.currentFrame = 0;
		this.elapsedFrames = 0;
		this.frameBuffer = frameBuffer;
		this.animations = animations;
		this.loop = loop;
		this.autoplay = autoplay;
		this.currentAnimation;

		if (this.animations) {
			for (let key in this.animations) {
				const image = new Image();
				image.src = this.animations[key].imageSrc;
				this.animations[key].image = image;
			}
		}
	}
	draw() {
		if (!this.loaded) return;
		c.save();
		c.translate(this.position.x, this.position.y);
		c.scale(this.scale, this.scale);
		c.drawImage(
			this.image,
			this.currentFrame * (this.image.width / this.frameRate),
			0,
			this.image.width / this.frameRate,
			this.image.height,
			0,
			0,
			this.image.width / this.frameRate,
			this.image.height
		);
		c.restore();
		this.updateFrames();
	}

	play() {
		this.autoplay = true;
	}

	updateFrames() {
		if (!this.autoplay) return;

		this.elapsedFrames++;

		if (this.elapsedFrames % this.frameBuffer === 0) {
			if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
			else if (this.loop) this.currentFrame = 0;
		}
		if (this.currentAnimation?.onComplete) {
			if (this.currentFrame === this.frameRate - 1 && !this.currentAnimation.isActive) {
				this.currentAnimation.onComplete();
				this.currentAnimation.isActive = true;
			}
		}
	}
}
