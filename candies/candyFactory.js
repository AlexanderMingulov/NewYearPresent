const CandyWithFilling = require('./candyWithFilling');
const CandyWithoutFilling = require('./candyWithoutFilling');
const Lolipop = require('./lolipop');

class CandyFactory {
    create(candyData) {
        if (candyData.type === 'candyWithFilling') {
            return new CandyWithFilling(candyData.candyName, candyData.candyWeight, candyData.candyKcal, candyData.candySugar, candyData.candyGlazeType, candyData.candyTypeOfFilling)
        }
        else if (candyData.type === 'candyWithoutFilling') {
            return new CandyWithoutFilling(candyData.candyName, candyData.candyWeight, candyData.candyKcal, candyData.candySugar, candyData.candyGlazeType, candyTypeOfChocolate)
        }
        else if (candyData.type === 'lolipop') {
            return new Lolipop(candyData.candyName, candyData.candyWeight, candyData.candyKcal, candyData.candySugar, candyData.candyTaste, candyData.candyCaramelType)
        }
    } 
}

const arrGlazeType = ['Белый шоколад',  'Черный шоколад'];
const arrTypeOfFiling = ['Ореховая', 'Нуга', 'Пралине', 'Суфле', 'Желе'];
const arrCandyTaste = ['Лимон', 'Барбарис', 'Фруктовая',];
const arrCandyCaramelType  = ['Желейная', 'Сахарная', 'Ягодная',];
const arrCandyTypeOfChocolate = ['Горький шоколад', 'Молочный шоколад']
class ChocolateCandiesFactory {
    create(data) {
        if (data.type === 'chocolateWithFiling') {
            return new CandyWithFilling(
                data.name, 
                Math.round(Math.random() * 15 + 10),
                Math.round(Math.random() * 30 + 10), 
                Math.round(Math.random() * 30 + 10), 
                arrGlazeType[Math.round(Math.random() * 1)], 
                arrTypeOfFiling[ Math.round(Math.random() * 4)]
            )
        }
        if (data.type === 'chocolateWithoutFiling') {
            return new CandyWithoutFilling(
                data.name, 
                Math.round(Math.random() * 15 + 10),
                Math.round(Math.random() * 30 + 10), 
                Math.round(Math.random() * 30 + 10), 
                arrGlazeType[Math.round(Math.random() * 1)],
                arrCandyTypeOfChocolate[Math.round(Math.random() * 1)]
            )
        }
        if (data.type === 'lolipop') {
            return new Lolipop(
                data.name, 
                Math.round(Math.random() * 15 + 10),
                Math.round(Math.random() * 30 + 10), 
                Math.round(Math.random() * 30 + 10), 
                arrCandyTaste[Math.round(Math.random() * 2)], 
                arrCandyCaramelType[ Math.round(Math.random() * 2)]
            )
        }

    }
}

module.exports = {
    CandyFactory,
    ChocolateCandiesFactory
}