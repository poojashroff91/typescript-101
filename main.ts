import { PI, calcCircumference } from "./math/circle"; // import * as Circle from './math/circle';
import calc from "./math/rectangle";
import "jQuery";

console.log("Hi there");
var burger: string = "hamburger",
  calories: number = 300,
  tasty: boolean = true; //Change this to a string and see what happens

function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);
//speak("Triple cheeseburger", "a ton of");

/*Interfaces*/
interface Food {
  name: string;
  calories: number;
}

function speakObj(food: Food): void {
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
  name: "ice cream", //Misspell name and see what happens
  calories: 200
};

speakObj(ice_cream);

/*Classes*/

class Menu {
  //By default the properties are public but they can be private or protected.
  items: Array<string>;
  pages: number;

  constructor(item_list: Array<string>, total_pages: number) {
    this.items = item_list;
    this.pages = total_pages;
  }

  list(): void {
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

  constructor(item_list: Array<string>, total_pages: number) {
    super(item_list, total_pages);
  }

  //Overriding parent class function
  list(): void {
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
function genericFunc<T>(argument: T): T[] {
  var arrayOfT: T[] = [];
  arrayOfT.push(argument);
  return arrayOfT;
}
console.log("Generics");
var arrayFromString = genericFunc<string>("beep"); //Best practice to set type
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);

var arrayFromNumber = genericFunc(42); //Inferred type
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);

/*Modules*/
console.log(PI); //console.log(Circle.PI);
console.log(calcCircumference(10));
console.log(calc(10, 20));

$("#app-id").css({ "background-color": "lightblue" });

//enums

enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green;
console.log(myColor);

type BankAccount = { money: number; deposit: (val: number) => void };
let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
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

function addNumbers(number1: number, number2: number) {
  return number1 + number2;
}
console.log(addNumbers(2, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;

console.log(multiplyNumbers(5, 6));

const greet = () => {
  console.log("Hi");
};
greet();

const greetFriend = (friend: string) => console.log("Hi", friend);

greetFriend("Pooja");

//Default parameters
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
};

countdown();

//Spread

const numbers = [2, 3, 10, -1];
console.log(Math.max(...numbers)); //Basically all array elements are spread to individual parameters

function makeArray(name: string, ...args: number[]) { //unknown number of params.
  return args;
}

console.log(makeArray("Max", 2,4,6));

console.log("Destructuring");
const hobbies = ["Cooking", "Sports"];
const[ hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)

const userData = {username: "Pooja", age: 27};
const {username: myName, age:myAge} =  userData;
console.log(myName, myAge);

//Template Literals

const username = "Pooja";
const greeting = `Hi I am ${username} I am so cool!`;
console.log(greeting);