const Candy = require('./candy')

class Lolipop extends Candy   {
    constructor(candyName, candyWeight, candyKcal, candySugar, candyTaste, candyCaramelType) {
        super(candyName, candyWeight, candyKcal, candySugar);
        this.candyTaste = candyTaste;
        this.candyCaramelType = candyCaramelType;
    }

    getCandyTaste() {
        return this.candyTaste
    }
    

    getCandyCaramelType() {
        return this.candyCaramelType
    }

    
    toString() {
        return `The lolipop '${this.candyName}' has taste '${this.candyTaste}' and caramel type is '${this.candyCaramelType}'`

    }

    
}

module.exports = Lolipop