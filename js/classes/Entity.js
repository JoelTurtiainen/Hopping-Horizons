class Entity extends Sprite {
	constructor({ position, imageSrc, frameRate, framebuffer, loop, autoplay, scale, name }) {
		super({ position, imageSrc, frameRate, framebuffer, loop, autoplay });
		this.position = position;
		this.position.y -= 64; // Tiled coordinates start from bottom left
		this.scale = scale;
		this.name = name;

		this.image.onload = () => {
			this.loaded = true;
			this.width = (this.image.width / this.frameRate) * this.scale;
			this.height = this.image.height * this.scale;
		};
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

		if (debug) {
			c.fillStyle = 'rgba(0,255,255,0.5)';
			c.fillRect(this.position.x, this.position.y, this.width, this.height);
		}

		this.updateFrames();
	}
}
