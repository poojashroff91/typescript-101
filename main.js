"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle"); // import * as Circle from './math/circle';
var rectangle_1 = require("./math/rectangle");
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
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var index = 0; index < this.items.length; index++) {
            console.log(this.items[index]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    //Inheritance
    function HappyMeal(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    //Overriding parent class function
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            console.log(element);
        }
    };
    return HappyMeal;
}(Menu));
var happyMealMenu = new HappyMeal(["candy", "drink", "toy"], 1);
happyMealMenu.list();
/*Generics*/
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
console.log('Generics');
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
