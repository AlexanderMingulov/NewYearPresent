class Candy {
    constructor (candyName, candyWeight, candyKcal, candySugar ) {
        this.candyName = candyName;
        this.candyWeight = candyWeight;
        this.candyKcal = candyKcal;
        this.candySugar = candySugar;

    }

    getCandyName() {
        return this.candyName
    }

    getCandyWeight() {
        return this.candyWeight
    }

    getCandyKcal() {
        return this.candyKcal
    }

    getCandySugar() {
        return this.candySugar
    }

    toString() {
        return `The candy '${this.candyName}' has weight ${this.candyWeight} , Kcal =  ${this.candyKcal} , sugar = ${this.candySugar}g `;
}
}
    
module.exports = Candy