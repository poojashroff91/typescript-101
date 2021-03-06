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
    //unknown number of params.
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
// Exercise 1 - Maybe use an Arrow Function?
const double = (value) => value * 2;
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
const greet2 = (name = "Max") => console.log("Hello, " + name);
greet2();
greet2("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));
// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
// Exercise 1 - How was your TypeScript Class?
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.honk = () => console.log("Toooooooooot!");
        this.accelerate = (speed) => (this.acceleration = this.acceleration + speed);
        this.name = name;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
class baseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends baseObject {
    constructor() {
        super(...arguments);
        this.calcSize = () => this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new Person();
console.log(person.firstName); //Default blank
person.firstName = "Ma"; //Blank
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
function greetPerson(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
const personArg = {
    firstName: "Pooja",
    hobbies: ["Cooking", "Sports"],
    greetPerson(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
changeName(personArg);
greetPerson(personArg);
personArg.greetPerson("Anything");
let myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
const oldPerson = {
    age: 27,
    firstName: "Max",
    greetPerson(lastName) {
        console.log("Hello!");
    }
};
function trimAndLower(text) {
    if (!text) {
        //this works for blank strings too
        return text;
    }
    return text.trim().toLowerCase();
}
console.log("Trimmed to", trimAndLower(null));
console.log("Trimmed to", trimAndLower(""));
console.log("Trimmed to", trimAndLower("Hello guys "));
const container = document.getElementById("app-id"); //Non null assertion. Assume that the call will not be null or undefined.
container.remove(); //This is risky because of the non null assertion.
let foo;
console.log(foo);
const numbersToFlatten = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        }
        else {
            flattened.push(element);
        }
    }
    return flattened;
}
console.log(flatten(numbersToFlatten));
const stringsToFlatten = ["ab", ["on", "lk"], "pi", ["ou"], "lmv"];
console.log(flatten(stringsToFlatten));
//Custom type guard
function isFlat(array) {
    return !array.some(Array.isArray);
}
if (isFlat(numbersToFlatten)) {
    numbersToFlatten;
}
var ShirtSize;
(function (ShirtSize) {
    ShirtSize[ShirtSize["S"] = 0] = "S";
    ShirtSize[ShirtSize["M"] = 1] = "M";
    ShirtSize[ShirtSize["L"] = 2] = "L";
    ShirtSize[ShirtSize["XL"] = 3] = "XL";
})(ShirtSize || (ShirtSize = {}));
function assertNever(value) {
    throw new Error(`Unexpected value '$(value)'`);
}
function prettyPrint(size) {
    switch (size) {
        case ShirtSize.S:
            return "small";
        case ShirtSize.M:
            return "medium";
        case ShirtSize.L:
            return "large";
        case ShirtSize.XL:
            return "extra large";
        default:
            return assertNever(size);
    }
}
function reverse(stringOrArray) {
    return typeof stringOrArray === "string" ? [...stringOrArray].reverse().join("") : stringOrArray.slice().reverse();
}
const reversedString = reverse("TypeScript");
const reversedArray = reverse([4, 8, 15, 16, 23, 42]);
//using type to contain the variable in finite values
let autoComplete = "on";
autoComplete = "on";
let base;
base = 2;
function tryParseInt(text) {
    if (/^[0-9]*$/.test(text)) {
        return {
            success: true,
            value: parseInt(text, 10)
        };
    }
    return {
        success: false,
        error: "Invalid number format"
    };
}
console.log(tryParseInt("6"));
function echo(data) {
    console.log(data);
}
echo("Max");
echo(27);
echo({ "name": "Max", "age": 27 });
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(45));
console.log(betterEcho({ name: "Max", age: 27 }));
const testResults1 = [1.94, 2.33];
testResults1.push(-2.34);
console.log(testResults1);
//Arrays
function printAll(args) {
    args.forEach((element) => console.log(element));
}
printAll(["Apple", "Banana"]);
//Generic types
const echo2 = betterEcho;
console.log(echo2("Something"));
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//Let's keep it simple and only add the following methods to the Map:
class MyMap {
    constructor() {
        this.map = {};
    }
    setItem(key, item) {
        this.map[key] = item;
    }
    ;
    getItem(key) {
        return this.map[key];
    }
    ;
    clear() {
        this.map = {};
    }
    ;
    printMap() {
        for (var key in this.map) {
            var element = this.map[key];
            console.log(key, element);
        }
    }
    ;
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
