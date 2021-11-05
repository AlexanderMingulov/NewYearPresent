const prompt = require('prompt-promise');
let CandyWithFilling = require('./candies/candyWithFilling');
let CandyWithoutFilling = require ('./candies/candyWithoutFilling');
let Lolipop = require('./candies/lolipop');
let Present = require('./present/present');
let Wrapper = require('./wrapper/wrapper')
const {ChocolateCandiesFactory} = require('./candies/candyFactory')
const test = require('./data/candyies.json');
const PresentBuilder = require('./present/presentBuilder');

let cand = []
for(let i = 0; i < test.length; i++) {
    const candy = new ChocolateCandiesFactory().create(test[i]);
    cand.push(candy)
}


// let present = new PresentBuilder.add();
let present = new Present()

let presentBuilder = new PresentBuilder()
                            .addChocolateCandiesPool(cand)
                            .addLolipopCandiesPool(cand)
                            .build()

const arrWrapper = ['paperWrapper', 'plasticWrapper', 'paperboardWrapper']
const presentWrapp = new Wrapper(present)
presentWrapp.wrap = arrWrapper[Math.round(Math.random() * 2)]

for(let i = 0; i < cand.length; i++) {
    if(cand[i] instanceof CandyWithFilling || cand[i] instanceof CandyWithoutFilling) {
        present.addchocolateCandies(cand[i])
    } else {
        present.addlolipop(cand[i])
    }
}


(async () => {
    const paramForSort = await prompt(' Введите параметр для сортировки: ')
    const sortAllCandies = present.sortCandies(paramForSort)
    const isViewSortCandy = await prompt(' Вывести список отсортированных конфет? y/n: ')
    if (isViewSortCandy === 'y') {
        console.log(sortAllCandies);
    }

    const isFindCandy = await prompt('Хотите найти конфету? y/n: ')
    if (isFindCandy === 'y') {
        const paramForSearch = await prompt(' Введите параметр для поиска: ')
        const valueForSearch = await prompt(' Введите значение для поиска: ')
        const searchCandy = present.findCandy(paramForSearch, valueForSearch)
        console.log(searchCandy);
    }

    

    
    const isWantRandomPresent = await prompt('Хотите собрать рандомный подарок? y/n: ')
    if (isWantRandomPresent === 'y') {
        const weightforRandomPresent = await prompt('Введите вес подарка:')
        present.rebuildPresent(weightforRandomPresent)
        present.getRebuildPresentToString()
    }
    
    prompt.finish();
})();