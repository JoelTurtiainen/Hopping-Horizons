class Trap extends Sprite {
    constructor({position, width, height, imageSrc, scale, symbol, frameRate}) {
        super({frameRate, imageSrc, scale})
        this.position = position;
        this.width = width;
        this.height = height;
        this.symbol = symbol;
    }

    update() {
        this.updateFrames();
        // c.fillStyle = 'rgba(0, 255, 0, 0.2)';
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);
       
        this.draw();
    }
}