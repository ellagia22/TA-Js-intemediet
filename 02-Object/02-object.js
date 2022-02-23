//soal no.1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function(nama) {
        console.log("Hello World")
        return console.log("Hello", nama);
    }
}

/// EDIT HERE
person.name = "ellagia"
person.favDrinks[1] = "Tap water"



/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
person.greeting(person.name);

//soal no.2
function getObjectValue(value, string) {
    let arrString = string.split('.');
    //console.log(arrString);
    for (let i = 0; i < arrString.length; ++i) {
        //console.log(arrString[i]);
        let j = arrString[i];
        if (j in value) {
            value = value[j];
        } else {
            return null;
        }
    }
    return value;
}


const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

// soal no.3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [{
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    /// EDIT DOWN HERE

    const dupObjItems = [];

    for (let i = 0; i < items.length; i++) {

        const item = items[i];

        let tempItem = {
            btc: 0,
            doge: 0,
            eth: 0
        };

        const btc = Object.values(item.btc).reduce((buy, sell) => sell - buy);
        const eth = Object.values(item.eth).reduce((buy, sell) => sell - buy);
        const doge = Object.values(item.doge).reduce((buy, sell) => sell - buy);
        tempItem['btc'] = btc;
        tempItem['eth'] = eth;
        tempItem['doge'] = doge;
        dupObjItems.push(tempItem);

    }

    const result = dupObjItems.reduce(
        (prev, curr) => {
            curr.btc += prev.btc;
            curr.eth += prev.eth;
            curr.doge += prev.doge;
            return curr;
        },

        { btc: 0, eth: 0, doge: 0 }

    );
    return result;
}
console.log(calculateIncome(items))