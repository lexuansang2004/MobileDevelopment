import { Person } from "./Person";
import { Student } from "./Student";
import { Car } from "./Car";

function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("200Lab"));

const person = new Person("Sang", 21);
person.displayInfo();

const student = new Student("Hạ", 21, "A");
student.displayInfo();

const car = new Car("Toyota", "Corolla", 2020);
car.displayInfo();



