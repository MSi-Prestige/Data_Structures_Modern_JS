'use strict';

const restaurant = {
    names: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //возвращаем из функ. 2 элемента - в одном массиве. Под теми индэксами которые были переданы.
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    //-----------------------------------------------------------------------------------------------
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
        // console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`);
        //! restaurant.starterMenu[st.....] = this.start.......
    },
    //? Этот обект Restaurant имеет функцию orderDelivery которая принимает обьект,
    //? и деструкт ее на 4 части как в обьекте. 
    //? пример --- передали mainIndex = this.mainMenu[mainIndex] = это значит что этот обект (ресторан) в главном своем
    //? меню получает индекс 0 = что равно mainMenu: ['Pizza]
    //! Order received! Garlic Bread and Pizza, will be delivered to Via des Sole 23 at 22:30
    //TODO : this.mainMenu[mainIndex] 
    //! this =========== restaurant.
    //! mainMenu =========== restaurant.mainMenu
    //! [mainIndex] ========== 0;   
    // restaurant.mainMenu[0] <--- mainIndex
    //--------------------------------------------------------------------------------------------------------

    //-----------------------------------------spread function--------------------------------------------------

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1} , ${ing2} , ${ing3} !`);

    }


};
//-----------------------------------------object in agruments function-----------------------------------------
restaurant.orderDelivery({
    time: "22:30",                 // 4 части обьекта 
    starterIndex: 2,
    address: "Via des Sole 23",
    mainIndex: 0
});
//------------------------------------------SPRED FUNCTION------------------------------------------------------
//const ingredients = [prompt("lets make pasta! Ingredient 1?"), prompt("lets make pasta! Ingredient 2?"), prompt("lets make pasta! Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);



//--------------------------------------------OBJECT DESCTRUCT---------------------------------------------------
//names , openingHours ..... -- it is e new Variable.
const { names, openingHours, categories } = restaurant;
// console.log(names, openingHours, categories);
//! можно сменить имена names == names: restourantName, openingHours: hours .....

//TODO: DEFAULT VALUE : menu - [] --> default value ( not undefined);
// мы знаем что есть старт.меню но на всякий случай тоже ставим дефолт значение. и на меню -- его нет и что
// бы не получить ундеф. 
const { menu = [], starterMenu: starters = [], mainMenu } = restaurant;
// console.log(menu, starters, mainMenu);

//TODO: Mutating variables ------------
//TODO: Destruction object:
let aa = 111;
let bb = 999;

const objects = { aa: 23, bb: 7, c: 14 };

({ aa, bb } = objects);
// console.log(aa, bb);

//TODO: Nested object: object in object;
// const { fri } = openingHours;
// console.log(fri);
const { fri: { open, close },
} = openingHours;
// console.log(open, close);


//---------------------------------------------------------------ARRAY DESTRUCT------------------------------
//TODO: возвращаем из функ. 2 элемента - в одном массиве.
const arrayTwoElemet = restaurant.order(2, 0);
// console.log(arrayTwoElemet);

//TODO: Destraction 2 элем. на 2 слова в консоль.
const [oneElement, twoElement] = restaurant.order(2, 0);
// console.log(oneElement, twoElement);
//!--------------------------------------

//TODO: Destraction Array - деструктуризация массива- разбиение на части . Массив остается не изменным.
//! Old school.
const arr = [2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const h = arr[3];
//! -----------

//? New variant: Desctaction 
const [x, y, z, g] = arr;
// console.log(x, y, z, g);
//? ------------------------

//TODO: nested Array; выбрали 2 и 5.7 массивом
const nested = [2, 4, [5, 7]];
const [i, , j] = nested;
// console.log(i, j);
//TODO: СПОСОБ Другой ---------
const nested2 = [2, 4, [5, 7]];
const [i2, , [j2, k2]] = nested2;  //i2 = 2.  4 пропустили. j2 = 5,  k2 = 7.
// console.log(i2, j2, k2);
//!-----------------------------------------------
// ЗАГЛУШКА как константа если не знаем длинны массива
const [p, e, r] = [8, 9];  // R is undefined
const [p1 = 1, e1 = 1, r1 = 1] = [8, 9];  // cl: = p1 = 8, e1 = 9, r1 = 1 ! 



//TODO: запятыми пропускаем не нужные элементы массива. 1,..,3...
const [first, , second] = restaurant.categories;
// console.log(first, second);

//TODO: делаем свитч - меняем местами. 
let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//Italian Vegetarian

[main, secondary] = [secondary, main];
// console.log(main, secondary);
//Vegetarian Italian

// -----------------------------------------------------ARRAY DESCTRUCT AND------------------------------------------


//----------------------------------SPREAD Operator---------------------------------
//TODO: создание массива на основе другова.
const arr3 = [7, 8, 9];
const newArr3 = [3, ...arr3];
// console.log(newArr3);
// отдельные элементы 
// console.log(...newArr3);

//TODO: new element in array with spred operator

const newMenu = [...restaurant.mainMenu, "Popatos"];  // NEW ARRAY + 1 ELEMENT
// console.log(newMenu);

//! spread don't create a new variable and gives all elements from array . 
//but destruction create variable [a,b] = .......

// copy Array

const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//! array +++++++++++++++ array ======== menu2
const menu2 = [...mainMenuCopy, ...newMenu];
// console.log(menu2);
//--------------------------------------------------------------------------------------------------------------

//! -------------- LESSOn  104 - 105 - 106 ----------------

// Objects 
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//?--------------------------------------------...numbers for(let i = 0 ; i< num.length ; i++) sum += num[i];

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        // } console.log(sum);
    }
};
add(2, 4);                   //функция принимает любое количество аргументов
add(5, 6, 7, 9);
add(10, 10, 20);
//?------------------------------------------------------------------------------------------------------------





// //TODO: ----------------String--------  cons.log - 3 items  LESSON  -------- 113 .
for (const day of Object.keys(openingHours)) {
    console.log(day);
}
// //TODO: -----------------Array--------- keys in varibale properties (array 3 items)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days`);  // 3 items

// //TODO: так как properties теперь содержит массив с 3 днями то его можно 
// //TODO: перебрать с FOR OF. 

for (const day of properties) {
    console.log(day);
}
// //TODO: FULL String output console log.

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
    openStr += `${day},`;
}
console.log(openStr);
//-----------------------------------------------------------------------------------
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
    console.log(key, open, close);
}




// restaurant.numGuest = 0;
// const numGess = restaurant.numGuest || 10;
// console.log(numGess);

// if (restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) {
//     console.log(restaurant.openingHours.fri.open);
// }
//TODO: PROMPT order
// const ingridients = [prompt("Let's make pasta! Ingredient 1?"),
// prompt("Ingredient 2?"), prompt("Ingredient 3?")];

// console.log(ingridients);
// restaurant.orederPasta(...ingridients);

// console.log(restaurant);

// console.log(restaurant.order(2, 1));
//! COPY RESTOURANT  COPY OBJECT ++ NEW ELEMENTS
// const newRestorant = { year: 1998, ...restaurant, founder: "soup" };
// console.log(newRestorant);

//!------------------------------------
// const [a, b, ...others] = [1, 5, 20, 44, 90];
// console.log(a, b, others);

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Riga - zvaigznaja",
//     mainIndex: 2,
//     starterIndex: 2
// });

//!-----------------------
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     } console.log(sum);
// };

// add(1, 2);
// add(10, 20);

// const x = [5, 20, 2];

// add(...x);
// console.log(1 || "Jon");


//! ---------------- ------------------- -----------------
// const arr1 = [1, 3, 5, 6, 9];
// const arrBad = [8, 10, arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]];
// console.log(arr1);
// console.log(arrBad);

// const newArr = [1, 2, ...arrBad, ...arr1];
// // 1, 2, 3, ...arr1; kopija + novoe ---- bez to4ek budet vlozennij massiv
// console.log(newArr);


//TODO ---------------------------------- 1 METHOD -- ENTRIES --------------LESS 111-----------------------
const menu12 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu12);

// for (const items of menu12) {
//     console.log(items);
// }
//! ENTRIES ------->>> он создает массив с индексом и названием(значением)  items 0 = index.  items 1 = value.
for (const items of menu12.entries()) {
    //0: "Focaccia"
    //1: "Bruschetta"
    //2: "Garlic Bread"
    //3: "Caprese Salad"
    //4: "Pizza"
    //5: "Pasta"
    //6: "Risotto"
    // console.log(`${items[0] + 1} : ${items[1]}`);
}
//TODO ---------------------------------- 2 METHOD -- ENTRIES   GOOD -------------------------------------
for (const [i, el] of menu12.entries()) {
    // console.log(`${i + 1} : ${el}`);
}
//--------------------------------------------------------------------------------------------------------

//TODO: ---------------------------------LESSON 112---------------------------------------------------

//console.log(restaurant.openingHours?.mon?.open);    // undifined
//console.log(restaurant.openingHours.mon.open);      //ERROR cannot read prop.

