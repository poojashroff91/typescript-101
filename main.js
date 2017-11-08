"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./math/circle"); // import * as Circle from './math/circle';
const rectangle_1 = require("./math/rectangle");
require("jQuery");
console.log("Hi there");
var burger = "hamburger", calories = 300, tasty = true; //Change this to a string and see what happens
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
function speakObj(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speakObj(ice_cream);
/*Classes*/
class Menu {
    constructor(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    list() {
        console.log("Our menu for today:");
        for (var index = 0; index < this.items.length; index++) {
            console.log(this.items[index]);
        }
    }
}
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
class HappyMeal extends Menu {
    //Inheritance
    constructor(item_list, total_pages) {
        super(item_list, total_pages);
    }
    //Overriding parent class function
    list() {
        console.log("Our special menu for children:");
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            console.log(element);
        }
    }
}
var happyMealMenu = new HappyMeal(["candy", "drink", "toy"], 1);
happyMealMenu.list();
/*Generics*/
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
console.log("Generics");
var arrayFromString = genericFunc("beep"); //Best practice to set type
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
var arrayFromNumber = genericFunc(42); //Inferred type
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
/*Modules*/
console.log(circle_1.PI); //console.log(Circle.PI);
console.log(circle_1.calcCircumference(10));
console.log(rectangle_1.default(10, 20));
$("#app-id").css({ "background-color": "lightblue" });
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/*es6*/
let variable = "Test"; //Mutable
console.log(variable);
variable = "Another value";
console.log(variable);
const maxLevels = 100; //Immutable
console.log(maxLevels);
//Block scope
function reset() {
    let variable = null;
    console.log(variable); //prints null
}
reset();
console.log(variable); //prints "Another value"
console.log("Arrow functions");
function addNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addNumbers(2, 3));
const multiplyNumbers = (number1, number2) => number1 * number2;
console.log(multiplyNumbers(5, 6));
const greet = () => {
    console.log("Hi");
};
greet();
const greetFriend = (friend) => console.log("Hi", friend);
greetFriend("Pooja");
//Default parameters
const countdown = (start = 10) => {
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
//Spread
const numbers = [2, 3, 10, -1];
console.log(Math.max(...numbers)); //Basically all array elements are spread to individual parameters
function makeArray(name, ...args) {
    return args;
}
console.log(makeArray("Max", 2, 4, 6));
console.log("Destructuring");
const hobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const userData = { username: "Pooja", age: 27 };
const { username: myName, age: myAge } = userData;
console.log(myName, myAge);
//Template Literals
const username = "Pooja";
const greeting = `Hi I am ${username} I am so cool!`;
console.log(greeting);
