
//---------------------------------------SETS------------------------------------------------------
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("bread"));
console.log(ordersSet.has("Pizza"));
ordersSet.add("Pivas");
ordersSet.add("Milk");                            //? Map method =  rest.set("name", "italiano");
ordersSet.delete("Pivas");
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//TODO : Exemple ARRAY in SETS вытягиваем из массива одинаковые значения и создаем новый  массив. без повторных элементов

const staff = ["Waiter", "Chef", "Waiter", "Chef", "Manager"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);


//! ---------------------------------------MAPS--------------------------------------------------
//? В Картах KEY могут иметь любой тип даже Обьекты ! А  в обьектах key это обычно String.   any string: 1,

const rest = new Map();

rest.set("name", "Italiano");
rest.set(1, "Riga");
rest.set(2, "Daugavpils");

console.log(rest);

//---------
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.has("categories"));
console.log(rest.size);
const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
const arr = [1, 2];
rest.set(arr, "test KEY = arr");
console.log(rest);

//!------------------------------------------MAPS  ITERATION -------------------------- lesson 117

//? так создают новую карту в коде.
const question = new Map([["question", "What is the best language prog?"],
[1, "C"],
[2, "Java"],
[3, "JavaScript"],
["correct", 3],
[true, "Correct 🧨"],
[false, "Try again! 🎡"],
]);
console.log(question);

//?  так делают карту из ГОТОВОГО ОБЬЕКТА. 
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
//--------------------------

console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Ansver ${key} : ${value}`);
    }
}
// rest.get(time > rest.get('open') && time < rest.get('close')));

// const answer = Number(prompt("You answer?"));

// console.log(answer);
//! --------------------------- 2 раза QUESTION.GET 
// console.log(question.get(question.get("correct") === answer));
//--------------------------------------------------------------------------------------------------------------
//? можно увидеть что внутри. 
console.log(...question);
console.log(...question.keys());
console.log(...question.values());

//! ------------------------------------------118 lesson--------------------------------------------------------

// map array sets objects

//! Object and Maps = они имеют описание ( пример - adressHome: 10)
//! Array and Sets  = не имеют (пример [1. 10] просто 1 елемент , а что 10 не ясно) для простых списков.
//Теперь вы должны использовать массивы всякий раз, когда вам нужно хранить значения
//по порядку и когда эти значения могут содержать дубликаты.



//! ------------------------------------------119 lesson --- 3 Chelenge -----------------------------------------










