function Car(name, year) {
  this.name = name;
  this.year = year;
}

Car.prototype.startEngine = function() {console.log("Wroom!");}
Car.prototype.wheels = 4;

var car1 = new Car("Volvo", 1998);
//console.log(car1);

function Truck(name, year, mileage) {
  Car.call(this,name,year);
  this.mileage = mileage;
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
var truck1 = new Truck("MAN", 2010, 5900);
//console.log(truck1);

//console.log(truck1.startEngine);
truck1.speed = 100;
Object.defineProperty(truck1, "speed", {
  enumerable: false
})

Object.defineProperty(car1, "color", {value: "red"});
//console.log(Object.getOwnPropertyDescriptor(car1, 'color'));
//Object.defineProperty(car1, "color", {configurable: true});
delete car1.color;
car1.color = "Black";
//console.log(car1.color);
Object.defineProperties(car1, {
  "accident": {
    value: false,
    enumerable: true,
    writable: true
  },
  "fuel": {
    value: 10,
    enumerable: false,
    writable: false,
    configurable: true
  }
});
//delete car1.fuel;
car1.fuel = 20;
//console.log(car1);

//console.log(props1);
//console.log(Object.getOwnPropertyDescriptor(car1, "fuel"));
//console.log(Object.getOwnPropertyDescriptors(truck1));
//console.log(truck1.hasOwnProperty("name"));
//console.log(car1.propertyIsEnumerable("accident"));

//console.log(Object.keys(car1));
//console.log(Object.getOwnPropertyNames(car1));
var props = [];
for (prop in car1) {
  props.push(prop);
}
//console.log(props);
//console.log(Object.keys(truck1));
//console.log(Object.getOwnPropertyNames(truck1));
var props1 = [];
for (prop in truck1) {
  props1.push(prop);
}

//console.log(Object.getPrototypeOf(car1));
//console.log(Object.getPrototypeOf(truck1));
//console.log(Car.prototype.isPrototypeOf(truck1));
//console.log((car1 instanceof Car) + " " + (car1 instanceof Object));
//console.log((truck1 instanceof Truck) + " " + (truck1 instanceof Car) + " " +
//(car1 instanceof Object));


var car2 = new Car("Lada", 1980);
//Object.preventExtensions(car2);
//console.log(Object.isExtensible(car2));
//Object.seal(car2);
//console.log(Object.isSealed(car2));
//Object.freeze(car2);
//console.log(Object.isFrozen(car2));
//car2.speed = 120;
//car2.name = "VOL";
//delete car2.name;
//console.log(car2);
