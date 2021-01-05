"use strict";

//--------------------STRING METHODS-------------

const airPlane = "TAP Air Portugal";
const plane = "A320";

console.log(airPlane.length);
console.log(plane.length);
console.log(airPlane[1]);
console.log(airPlane.indexOf("a")); //14 position
console.log(airPlane.indexOf("A")); // 1
console.log(airPlane.lastIndexOf("A")); // 4

console.log(airPlane.slice(4));   // Air Portugal  - подстрока 
//! всегда возвращается новая строка!

console.log(airPlane.slice(4, 7));  // 4 - start ,   7 - end     7 - 4 = 3 simbols

console.log(airPlane.slice(0, airPlane.indexOf(" "))); // TAP //  тут от 1 буквы до первого пробела.
console.log(airPlane.slice(airPlane.lastIndexOf(" ") + 1)); // Portugal // тут от последнего пробела до конца. +1 чтобы убрать 
//пробел в начале.

console.log(airPlane.slice(-2));    // al
console.log(airPlane.slice(1, -1));  //AP Air Portuga

//! --------------------------------------------FUNCTION STRING----------------------------------------

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === "B" || s === "E") {
        console.log("You got the middle seat 😂");
    } else {
        console.log("YOU GOT LUCKY SEAT");
    }

};

checkMiddleSeat("11B");
checkMiddleSeat("211C");
checkMiddleSeat("1E");
//------------------------------------------------------------------------------------------------------

//STRING lecture num 2

const airLine = "TAP Air Portugal";
console.log(airLine.toLocaleUpperCase());
console.log(airLine.toLocaleLowerCase());

const passenger = "jOnAS";
const lower = passenger.toLocaleLowerCase();
const passengerCorrect = lower[0].toUpperCase() + lower.slice(1);
console.log(passengerCorrect);   // Jonas

// Comparing emails

const email = "hello@jonas.io";
const loginEmail = "  hello@Jonas.Io  ";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
//---------------------------------------------------------
//! Проверка на одинаковость . 
const normMail = function (realMail, mail) {
    console.log(realMail === mail.toLowerCase().trim());
};
normMail("hello@jonas.io", " hello@Jonas.Io   ");
//---------------------------------------------------------

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement1 = "All passengers come to boarding door 23 , Boarding door 23!";
console.log(announcement1.replaceAll("door", "gate"));    // REPLACE _ ALL   new method . 

//------------------------------------------------------------------------------------------

const planeBus = "Airbus A320neo";
console.log(planeBus.includes("A320"));      // true
console.log(planeBus.includes("Boening"));  // false
console.log(planeBus.startsWith("Ai"));    //true

if (planeBus.startsWith("Airbus") && planeBus.endsWith("neo")) {
    console.log("It is a new Airplain");
}
//--------------------------------------------------------------------------------------------

const checkBaggage1 = function (items) {
    const baggage1 = items.toLowerCase();
    if (baggage1.includes("gun") || baggage1.includes("knife")) {
        console.log("You are NOT allowed on board!");
    } else {
        console.log("Welcome on board!");
    }
};
checkBaggage1("I have a Laptop, some Food, knife, GUN");
//---------------------------------------------------------------------------------------------

// lesson String  SPLIT 
console.log("Ilja Kristafenko".split(" "));


const [firstName1, lastname1] = "Ilja Kristafenko".split(" ");
console.log(firstName1, lastname1);

const newName = ["Mr.", firstName1, lastname1.toUpperCase()].join(" ");
console.log(newName);

//-------------------------------------------------------------------------------------------------

const capitalizeName1 = function (name) {
    const names = name.split(" ");
    const namesUpper = [];
    // console.log(names);
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        //! Variant num 2  namesUpper.push(n.replace(n[0], n[0].toUpperCase));
    }
    console.log(namesUpper.join(" "));
};

capitalizeName1("jasika ann smith davis");      // Jasika Ann Smith Davis.
capitalizeName1("ilja kristafenko");            //  Ilja Kristafenko
//---------------------------------------------------------------------------------------------------

//padStart padEnd

const messageIlja = " Go to gate 30";
console.log(messageIlja.padStart(20, "=").padEnd(30, "+"));

const maskCard = function (number) {
    const str = number + "";   //>>>>>>>>>>>>>> тут мы привидем все к строке str = string "23456"
    const last = str.slice(-4); // >>>>>>>>>>>>>>  тут послед 4 символа будут сохранены .
    return last.padStart(str.length, "*");  //? тут вставим перед last длинну str ****** + last -4  *******4344
}

console.log(maskCard(23423423432));
console.log(maskCard("234234234324443"));
//---------------------------------------------------------

//Repeat method

const repeatMet = "I knew JS !........";
console.log(repeatMet.repeat(3));


const planesInLines = function (n) {
    console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);  // 1 raz no samoletiki 4 raza 
};
planesInLines(4);
planesInLines(2);
planesInLines(6);
//------------------------------------------------------------



//! -------------------------------------------CHALLENGE 4----------------------------------------

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n'); //! tut delim vse na stroki - i budet massiv strok

    for (const [i, row] of rows.entries()) {  //! tut berem i = element po porjadku v massive + znachenie ( tekst)
        const [first, second] = row.toLowerCase().trim().split('_'); // k verxnemu, otsekaem probeli, razdelaem po___
        //i delim na 2 slova ( 2 peremennie)
        const output = `${first}${second.replace( //tut proso bez probela skleevaem 2 slova i menajem niz na verx
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
