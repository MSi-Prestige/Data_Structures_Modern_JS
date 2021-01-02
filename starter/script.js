'use strict';


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


for (const [i, valueScore] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${valueScore}.`);
}


//TODO:           ENTRIES = vivodit ili vesj array esli Object.entries   ili key , value
const odds = Object.values(game.odds);
//TODO:  Object.keys = vivodit toljko klju4i (naznavnija)
//! Object.values = vivodit toljko zna4enija - 1.3, 3.4, .....
// console.log(odds);


const myOdds = odds.reduce((a, b) => a + b, 0) / odds.length;
console.log(myOdds);


const gameOdds = Object.values(game.odds);
let averageOdd = 0;

for (const odd of gameOdds) {
  averageOdd += (odd) / (gameOdds.length);
}
console.log(averageOdd);




















// const victorianSlang = [

//   {
//     term: 'doing the bear',
//     found: true,
//     popularity: 108,
//   },

//   {
//     term: 'katterzem',
//     found: false,
//     popularity: null,
//   },

//   {
//     term: 'bone shaker',
//     found: true,
//     popularity: 609,
//   },

//   {
//     term: 'smothering a parrot',
//     found: false,
//     popularity: null,
//   },

//   {
//     term: 'damfino',
//     found: true,
//     popularity: 232,
//   },

//   {
//     term: 'rain napper',
//     found: false,
//     popularity: null,
//   },

//   {
//     term: 'donkey’s breakfast',
//     found: true,
//     popularity: 787,
//   },

//   {
//     term: 'rational costume',
//     found: true,
//     popularity: 513,
//   },

//   {
//     term: 'mind the grease',
//     found: true,
//     popularity: 154,
//   },

// ];
// let popularitySum = 0;
// let itemsFound = 0;
// const len = victorianSlang.length;
// let item = null;
// for (let i = 0; i < len; i++) {
//   item = victorianSlang[i];
//   if (item.found) {
//     popularitySum = item.popularity + popularitySum;
//     itemsFound = itemsFound + 1;

//   }
//   const averagePopularity = popularitySum / itemsFound;
//   console.log("Average popularity:", averagePopularity);


// }

// //TODO: -------------- 1
// const goals = [...game.scored];
// console.log(goals);
// //TODO: -------------- 1                   [] + key value.
// const values = Object.values(game.scored);
// console.log(values);
// //TODO:-----------------
// // Entire object
// const entries = Object.entries(game.scored);
// console.log(game.scored);
// //TODO:-----------------

// for (const [day] of entries) {
//   console.log(`On ${day} we`);
// }



// for (const playersGoal of (goals)) {

//   let golPl = `Goal: ${goals} - ${playersGoal}`;
//   console.log(golPl);
// }

// const ilja = {
//   score: "4:0",
//   age: 32,
//   nameLast: ["vija", "sabina", "dana", "oksana"]
// };

// for (const [index, name1] of ilja.nameLast.entries()) {
//   console.log(`first girl : ${index + 1} and name ${name1}`);
// }





// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }





// const cars = {

//   myCars: ["bmw", 10, "audi", "mercedes", "volvo", "touareg"],
//   myFamily: ["Vija", "Sabina", "Silver"],
//   myWork: ["java", "js", "css"]
// };

// //TODO: INDEX + VALUE  = exaple -  1 : Ilja.

// for (const [i, valueCar] of cars.myCars.entries()) {
//   console.log(`Index = ${i + 1} , and car = ${valueCar}`);
// }

// for (const [i, valueFamily] of cars.myFamily.entries()) {
//   console.log(`My family num - ${i + 1} and name ${valueFamily}`);
// }

// for (const [i, valuemyWork] of cars.myWork.entries()) {
//   console.log(`num : ${i + 1} and my work is ${valuemyWork}`);
// }










// const [player1, player2] = game.players;
// console.log(player1, player2);


// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);


// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Finals = [...player1, "tobi", "mobi", "gabi"];
// console.log(players1Finals);

// const {
//   odds: { team1, x: draw, team2 } } = game;



// const printGoals = function (...numbers) {

//   console.log(numbers);
//   console.log(...numbers);
// };

// printGoals(...game.scored);


// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
