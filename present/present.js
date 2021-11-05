class Present {
    constructor() {
        this.chocolateCandiesPool = [];
        this.lolipopPool = [];
    }

    addchocolateCandies(chocolateCandies) {
        this.chocolateCandiesPool.push(chocolateCandies);
    }

    addlolipop(lolipop) {
        this.lolipopPool.push(lolipop);
    }

    addchocolateCandiesPool(chocolateCandies) {
        this.chocolateCandiesPool = [...this.chocolateCandiesPool, ...chocolateCandies];
    }

    addlolipopPool(lolipop) {
        this.lolipopPool = [...this.lolipopPool, ...lolipop];
    }

    getAllWeightPresent() {
        const resultWeight = this.getAllCandies().reduce((accum, candy) => {
            return accum + candy.getCandyWeight()
        }, 0)
        return `Итоговый вес собранного подарка состялвяет ${resultWeight} грамм`
    }

    rebuildPresent(weight) {
        const allCandies = this.getAllCandies()
        let resultWeight = 0
        const resultPresent = []
        while(true) {
            if(resultWeight < weight) {
                const randomCandy = allCandies[Math.round(Math.random() * (allCandies.length-1))]
                resultWeight += randomCandy.getCandyWeight()
                resultPresent.push(randomCandy)
            } else {
                break;
            }
        }
        this.setRebuildPresent(resultPresent)
    }

    setRebuildPresent(candyPool) {
        this.rebuild = candyPool
    }

    getRebuildPresent() {
        return this.rebuild
    }

    getRebuildPresentToString() {
        console.log('В подарке собраны конфеты:');
        let weight = 0
        this.rebuild.forEach(element => {
            console.log(`Конфета ${element.getCandyName()} весом ${element.getCandyWeight()} г`);
            weight += element.getCandyWeight()
        });
        console.log(`Общий вес подарка составляет ${weight} г` );
    }
    
    sortCandies(paramForSort) {

        const allCandies = this.getAllCandies();

        if (paramForSort === 'вес') {
            return allCandies.sort((candyOne, candyTwo) => {
                return candyOne.getCandyWeight() - candyTwo.getCandyWeight();
            });
        } else if (paramForSort === 'название') {
            return allCandies.sort((candyOne, candyTwo) => {
                return candyOne.getCandyName().toLowerCase() < candyTwo.getCandyName().toLowerCase();
            });
        }
    }  

    getAllCandies() {
        return [...this.chocolateCandiesPool, ...this.lolipopPool];
    }

    findCandy(paramForFind, valueForFind) {
        const allCandies = this.getAllCandies();

        if (paramForFind === 'вес') {
            return allCandies.find((candy) => {
                return candy.getCandyWeight() === parseInt(valueForFind);
            });
        } else if (paramForFind === 'название') {
        
            return allCandies.find((candy) => {
                return candy.getCandyName().toLowerCase() === valueForFind.toLowerCase();
            });
        }

    }
    
}




module.exports = Present;


