"use strict";

let firstName = "Denis";

let lastName = new String(firstName);

console.log(typeof (firstName));
console.log(typeof (lastName));

const soldier = {
   health: 400,
   armor: 100
};

const soldierJohn = {
   health: 100
};

Object.setPrototypeOf(soldierJohn, soldier);