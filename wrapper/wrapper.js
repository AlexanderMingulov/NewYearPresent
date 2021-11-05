class Wrapper {
    constructor(present) {
        this.present = present
    }
    set wrap(name) {
        return this.present._wrap = name
    }
    get wrap() {
        return this.present._wrap
    }
}

module.exports = Wrapper;