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

function makeArray(name: string, ...args: number[]) {
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
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
const greet2 = (name: string = "Max") => console.log("Hello, " + name);
greet2();
greet2("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers2: number[] = [-3, 33, 38, 5];
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
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk = () => console.log("Toooooooooot!");
  accelerate = (speed: number) =>
    (this.acceleration = this.acceleration + speed);
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends baseObject {
  calcSize = () => this.width * this.length;
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
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

interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greetPerson(lastName: string): void;
}

function greetPerson(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const personArg = {
  firstName: "Pooja",
  hobbies: ["Cooking", "Sports"],
  greetPerson(lastName: string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

changeName(personArg);
greetPerson(personArg);
personArg.greetPerson("Anything");

//function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Max",
  greetPerson(lastName: string) {
    console.log("Hello!");
  }
};

function trimAndLower(text: string | null | undefined) {
  if (!text) {
    //this works for blank strings too
    return text;
  }
  return text.trim().toLowerCase();
}
console.log("Trimmed to", trimAndLower(null));
console.log("Trimmed to", trimAndLower(""));
console.log("Trimmed to", trimAndLower("Hello guys "));

const container = document.getElementById("app-id")!; //Non null assertion. Assume that the call will not be null or undefined.
container.remove(); //This is risky because of the non null assertion.

let foo: number | undefined;

console.log(foo);

const numbersToFlatten = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];
function flatten<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

console.log(flatten(numbersToFlatten));

const stringsToFlatten = ["ab", ["on", "lk"], "pi", ["ou"], "lmv"];
console.log(flatten(stringsToFlatten));

//Custom type guard

function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}

if (isFlat(numbersToFlatten)) {
  numbersToFlatten;
}

enum ShirtSize {
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value '$(value)'`);
}

function prettyPrint(size: ShirtSize) {
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
