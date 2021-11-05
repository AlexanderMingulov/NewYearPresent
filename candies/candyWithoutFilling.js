const ChocolateCandies = require('./chocolateCandies')

class CandyWithoutFilling extends ChocolateCandies  {
    constructor(candyName, candyWeight, candyKcal, candySugar, candyGlazeType, candyTypeOfChocolate) {
        super(candyName, candyWeight, candyKcal, candySugar, candyGlazeType);
        this.candyTypeOfChocolate = candyTypeOfChocolate;
    }

    getCandyTypeOfChocolate() {
        return this.candyTypeOfChocolate;
    }
    

    toString() {
        return `The candy '${this.candyName}' has type of chocolate '${this.candyTypeOfChocolate}'`;

    }
        
}

module.exports = CandyWithoutFilling;