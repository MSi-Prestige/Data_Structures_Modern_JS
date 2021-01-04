"use strict";
//! Lesson 119
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


//1  сделал массив из Map без повтора эллементов. во 2 методе . а Я сделал object {}
const events = new Set(gameEvents.values());
console.log(events);
console.log(events.size);
// ----------------------------------------------
const events1 = [...new Set(gameEvents.values())];
console.log(events1);

//2  

gameEvents.delete(64);
console.log(gameEvents);

//-----------------------------------------------
//3
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
console.log(gameEvents.size); // = 10


const time = [...gameEvents.keys()].pop();// преобразование в Массив - а pop для того что-бы получить 92 мин -послед значение
//! .pop = delete AND return last element - 92 min.
console.log(time);
console.log(                                // 92min / 11
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);


//4 

for (const [key, value] of gameEvents) {
    if (key <= 45) {
        console.log(`[FIRST HALF] ${key} min :  ${value}`);
    } else {
        console.log(`[SECOND HALF] ${key}: min : ${value}`);
    }
}

//--------------------
// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// }

