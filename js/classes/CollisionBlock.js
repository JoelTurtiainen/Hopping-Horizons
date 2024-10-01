class CollisionBlock {
	constructor({ position }) {
		this.position = position;
		this.width = 64;
		this.height = 64;
	}

	draw() {
		c.fillStyle = 'rgba(255,0,0,0.5)';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class TrapBlock {
	constructor({ position }) {
		this.position = position;
		this.position.x += 8;
		this.position.y += 32;
		this.width = 48;
		this.height = 32;
	}

	draw() {
		c.fillStyle = 'rgba(255,255,0,0.5)';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}
