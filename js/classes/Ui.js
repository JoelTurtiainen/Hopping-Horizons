function splitNumberIntoDigits(number) {
    return number
        .toString()
        .split("")
        .map(Number);
}

class Ui {
    constructor({position,imgSrcs}) {
        this.position = position;
        this.margin = 10;
        this.rowHeight = 40;
        this.width = 260;
        this.height = this.rowHeight * 3 + this.margin * 2;
        this.fontSize = 32;
        this.imgSrcObj = imgSrcs;
        this.coin = new Image();
        this.coin.src = this.imgSrcObj.coin;
        this.coin.width = this.rowHeight;
        this.coin.height = this.coin.width;
        this.digit = new Image();
        this.digit.src = this.imgSrcObj.numbers;
        this.digit.width = 32;
        this.digit.height = this.rowHeight;
        this.heart = new Image();
        this.heart.src = this.imgSrcObj.hearts;
        this.heart.width = this.rowHeight;
        this.heart.height = this.heart.width;
    }

    draw({coins, health, level}) {
        c.fillStyle = 'rgba(40,40,40,0.5)';
        c.beginPath();
		c.roundRect(this.position.x, this.position.y, this.width, this.height, 5);
        c.fill()
        c.stroke();
        this.levelInfo(level);
        this.coins(coins);
        this.hearts(health);
    }

    levelInfo(levelNumber) {
        c.font = `${this.fontSize}px serif`;
        c.fillStyle = 'rgb(255,255,255)'
        c.fillText(`Level ${levelNumber} / ${Object.keys(levels).length - 1}`, this.position.x + this.margin, this.position.y + this.fontSize + this.margin);
    }

    coins(coins) {
        // Draw coin icon
        c.drawImage(this.coin, this.position.x + this.margin, this.position.y + this.margin + this.rowHeight, this.coin.width, this.coin.height);

        // Draw x mark between icon and digits
        c.drawImage(
            this.digit,
            10 * this.digit.width,
            0,
            this.digit.width,
            this.digit.height,
            this.position.x + this.margin * 1.5 + this.coin.width,
            this.position.y + this.margin + this.rowHeight,
            this.digit.width,
            this.digit.height
        );

        // Draw how many coins have collected in numbers and draw zero if value is undefined
        if (coins != undefined) {
            const digits = splitNumberIntoDigits(coins);
            digits.forEach((digit,index) => {
                this.drawDigit(digit,index);
            });
        }
        else {
            this.drawDigit(0,0);
        }
    }

    hearts(health) {
        const firstHeartPosition = {x:this.position.x + this.margin, y:this.position.y + this.margin + this.rowHeight * 2};
        let heartPositionX = firstHeartPosition.x;
        const fullHearts = fullHealth - health;
        const emptyHearts = fullHealth - fullHearts;
        
        // Draw full hearts
        for (let i = 0; i < fullHealth - fullHearts; i++) {
            this.drawFullHeart({x:heartPositionX,y:firstHeartPosition.y});
            heartPositionX += firstHeartPosition.x - this.margin + this.heart.width;
        }

        // Draw empty hearts
        for (let i = 0; i < fullHealth - emptyHearts; i++) {
            this.drawEmptyHeart({x:heartPositionX,y:firstHeartPosition.y})
            heartPositionX += firstHeartPosition.x - this.margin + this.heart.width;
        }

        
    }

    drawFullHeart(position) {
        c.drawImage(this.heart, 0, 0, this.heart.width, this.heart.height, position.x, position.y, this.heart.width, this.heart.height);
    }

    drawEmptyHeart(position) {
        c.drawImage(this.heart, this.heart.width, 0, this.heart.width, this.heart.height, position.x, position.y, this.heart.width, this.heart.height);
    }

    drawDigit(number,digit) {
        const firstDigitPosition = {x:this.position.x + this.margin + this.coin.width + this.digit.width, y:this.position.y + this.margin + this.rowHeight}
        c.drawImage(
            this.digit, 
            number*this.digit.width,
            0,
            this.digit.width,
            this.digit.height,
            firstDigitPosition.x + this.margin + digit * this.digit.width,
            firstDigitPosition.y,
            this.digit.width,
            this.digit.height
        )
    }
};