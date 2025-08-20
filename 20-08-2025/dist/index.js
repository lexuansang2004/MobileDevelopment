"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Student_1 = require("./Student");
const Car_1 = require("./Car");
function hello(name) {
    return `Hello, ${name}!`;
}
console.log(hello("200Lab"));
const person = new Person_1.Person("Sang", 21);
person.displayInfo();
const student = new Student_1.Student("Hạ", 21, "A");
student.displayInfo();
const car = new Car_1.Car("Toyota", "Corolla", 2020);
car.displayInfo();
