class Entity extends Sprite {
	constructor({ position, imageSrc, frameRate, frameBuffer, loop, autoplay, scale, type, name }) {
		console.log(imageSrc);
		super({ position, imageSrc, frameRate, frameBuffer, loop, autoplay, scale });
		this.position = position;
		this.position.y -= 16 * scale;

		this.name = name;
		this.type = type;
	}
	draw() {
		if (debug) {
			c.fillStyle = 'rgba(0,255,255,0.5)';
			c.fillRect(this.position.x, this.position.y, this.width, this.height);
		}
		super.draw();
	}
}

class Crate extends Entity {
	constructor(config) {
		super(config);
		// idk
	}
}

class Coin extends Entity {
	constructor(config) {
		super(config);
		// idk
	}
}
