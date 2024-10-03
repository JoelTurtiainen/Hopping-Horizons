class CollisionBlock {
	constructor({ position, width = 64, height = 64 }) {
		this.position = position;
		this.width = width;
		this.height = height;

		if (debug) this.fillStyle = 'rgba(255,0,0,0.5)';
	}

	draw() {
		c.fillStyle = this.fillStyle;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class CollectableBlock extends CollisionBlock {
	constructor({ position }) {
		super({ position });
		this.name = 'test_item';
		this.position.x += 16;
		this.position.y += 16;
		this.width = this.width / 2;
		this.height = this.height / 2;

		if (debug) this.fillStyle = 'rgba(0,255,255,0.5)';
	}
}

class TrapBlock extends CollisionBlock {
	constructor({ position }) {
		super({ position });
		this.position.x += 16;
		this.position.y += 32;
		this.width = this.width / 2;
		this.height -= this.height / 2;

		if (debug) this.fillStyle = 'rgba(255,255,0,0.5)';
	}
}
