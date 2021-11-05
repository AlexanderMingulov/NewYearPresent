const Present = require("./present");

class PresentBuilder {
    constructor() {
        this.present = new Present()
    }

    addChocolateCandiesPool(pool) {
        this.present.chocolateCandiesPool.push(pool)
        return this
    }

    addLolipopCandiesPool(pool) {
        this.present.lolipopPool.push(pool)
        return this
    }

    build() {
        return this.present
    }
}

module.exports = PresentBuilder;