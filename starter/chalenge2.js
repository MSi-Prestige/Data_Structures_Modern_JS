"use strict";

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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


//TODO: -------------------------------------TASK 2------------------------------------------ 
//1-----------------------------------------------------
//OLD VARIANT 
const goalScore = [...game.scored];
for (const goal of goalScore.entries()) {
    console.log(`${goal[0] + 1} : ${goal[1]} !`);
}
//------------------------------------------------------
//1 NEW VARIANT
for (const [indexGamer, nameGamer] of game.scored.entries()) {
    console.log(`Goal - ${indexGamer + 1} :  ${nameGamer}`);
}
//------------------------------------------------------

//2 JONAS VARIANT
const gameData = Object.values(game.odds);
console.log(gameData);
let sum = 0;
for (const iData of gameData) {
    sum += (iData) / (gameData.length);
} console.log(sum);

//2 NEW VARIANT--------------- вычисление среднего.
const odds = Object.values(game.odds);
const myOdds = odds.reduce((a, b) => a + b, 0) / odds.length;
console.log(myOdds);

//3 

// for (const stringData of gameData) {
//     const stringOdd = `Odd of victory ${game.team1} : ${stringData}`;
//     console.log(stringOdd);
// }
//3        //! team = team 
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

//4 BONUS   create an object
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);




