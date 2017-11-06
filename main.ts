import { PI, calcCircumference} from './math/circle'; // import * as Circle from './math/circle';
import calc from "./math/rectangle"; 

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
function genericFunc<T>(argument: T): T[]{
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
console.log('Generics');
var arrayFromString = genericFunc<string>("beep"); //Best practice to set type 
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);

var arrayFromNumber = genericFunc(42);  //Inferred type
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);


/*Modules*/
console.log(PI); //console.log(Circle.PI);
console.log(calcCircumference(10));
console.log(calc(10, 20));