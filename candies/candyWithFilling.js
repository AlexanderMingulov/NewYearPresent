const ChocolateCandies = require('./chocolateCandies')

class CandyWithFilling extends ChocolateCandies  {
    constructor(candyName, candyWeight, candyKcal, candySugar, candyGlazeType, candyTypeOfFilling) {
        super(candyName, candyWeight, candyKcal, candySugar, candyGlazeType);
        this.candyTypeOfFilling = candyTypeOfFilling;
    }

    getCandyTypeOfFilling() {
        return this.candyTypeOfFilling;
    }
    

    toString() {
        return `The candy '${this.candyName}' has type of filling '${this.candyTypeOfFilling}'`;

    }
        
}

module.exports = CandyWithFilling;