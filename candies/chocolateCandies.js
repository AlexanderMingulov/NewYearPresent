const Candy = require('./candy')

class ChocolateCandies extends Candy   {
    constructor(candyName, candyWeight, candyKcal, candySugar, candyGlazeType) {
        super(candyName, candyWeight, candyKcal, candySugar)
        this.candyGlazeType = candyGlazeType
    }

    getcandyGlazeType() {
        return this.candyGlazeType
    }
    

    toString() {
        return `The candy '${this.candyName}' has candy glaze type '${this.candyGlazeType}'`

    }
        
}

module.exports = ChocolateCandies