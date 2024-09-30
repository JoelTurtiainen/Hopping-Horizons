class PickableItem extends Sprite {
	constructor({ symbol, position, height = 16, imageSrc, frameRate, scale }) {
		super({ imageSrc, frameRate, scale });
		this.currentFrame = symbol - 1;
		this.name = itemData[symbol].name;
		this.frameRate = 2;
		this.position = position;
		this.width = 16;
		this.height = height;
		this.collected = false;
	}

	update() {
		this.draw();
		c.fillStyle = 'rgba(255, 0, 0, 0.5)';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}
