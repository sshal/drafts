/*function Car(name, year) {
  this.name = name;
  this.year = year;
}
Car.prototype = new Object();
Car.prototype.constructor = Car;
var car1 = new Car("Porsche", 1990);

console.log(car1);

function Truck(name, year, mileage) {
  Car.call(this, name, year);
  this.mileage = mileage;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
var truck1 = new Truck("Volvo", 2010, 19213);
console.log(truck1); */
"use strict";
class Car {
  constructor (name, year) {
    this.name = name;
    this.year = year;
  }
  inhMethod() {
    console.log("This method was inherited");
  }
  static showInf(x) {
    alert(x);
  }
}
var car1 = new Car("Lada", 1980);
console.log(car1);

class Truck extends Car {
  constructor(nam, yea, mileage) {
    super(nam, yea);
    this.mileage = mileage;
  }
  get showName() {
    console.log(this.name);
  }
  startEngine() {this.statusEngine = true; console.log('Wroom!')}
  static suits(x) {return super.showInf(x)}
}
var truck1 = new Truck("Mercedes", 2013, 12813);
console.log(truck1);
truck1.showName;
truck1.startEngine();
console.log(truck1.statusEngine);
truck1.inhMethod();
//Car.showInf();
//console.log(Truck.suits("Hello!"));
