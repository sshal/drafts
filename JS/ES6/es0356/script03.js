
//lesson 07 03 ArrayBuffer and Typed Arrays

let buffer = new ArrayBuffer(1024);
//buffer[0] = 0xff;
//console.log(buffer[0]);
//let a = new Int8Array(buffer);
//let a = new Uint8Array(buffer);
//a[0] = 0xff;
//let a = new Uint8ClampedArray(buffer);
//a[0] = -12;
//console.log(a[0]);

let a = new Uint8Array(buffer);
let b = new Uint16Array(buffer);
//a[0] = 1;
a[1] = 1;
//console.log(b[0]);

//lesson 07 02 Array Extensions

//let salaries = Array(90000);
//let salaries = Array.of(90000);
//console.log(salaries.length);
let amounts = [100, 110, 120];
//let salaries = Array.from(amounts, v => v + 1000);
let salaries = Array.from(amounts, function(v) {
    return v + this.adjustment;
}, {adjustment: 55});
//console.log(salaries);

//lesson 06-05 Throw and return
/*
function* process() {
    //try {
        yield 9001;
        yield 9002;
        yield 9003;
    //} catch(e) {
    //    console.log("Execution terminated");
    //}
}

let it = process();
console.log(it.next().value);
//console.log(it.throw('foo'));
console.log(it.return('foo'));
console.log(it.next());
*/

//lesson 06-04 Yielding in Generators
/*
function* process() {
    let result = yield;
    console.log(`result is ${result}`);
}

let it = process();
it.next();
//console.log(it.next(200));

function* process1() {
    yield 42;
    //yield [1,2,3];
    yield* [1,2,3];
}
let it1 = process1();
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
*/

// lesson 06-03 Generators
/*
function* process() {
    yield 8001;
    yield 8002;
}
let it = process();
it.next();
it.next();
console.log(it.next());
*/
///*

///*

// lesson 06-02 Iterators
/*
let ids = [100, 101, 102];
//console.log(typeof ids[Symbol.iterator]);
let it = ids[Symbol.iterator]();
it.next();
it.next();
it.next();
//console.log(it.next());

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 0;
        return {
            next() {
                return {
                    value: nextId++,
                    done: false
                };
            }
        };
    }
};

for (let v of idMaker) {
    if (v > 2) break;
    console.log(v);
}
*/

//-------------------------------------------------------------------------
//Lesson 05-05 String Extensions
//console.log(String.fromCodePoint(0x1f3c4));
var title = "Surfer's \u{1f3c4} Blog";
//console.log(title);

//Lesson 04 Object Extensions
/*let a = { x: 1 },
    b = { y: 2 };

Object.setPrototypeOf(a, b);
console.log(a.y);
console.log(Object.assign({}, a, b));
*/
//Lesson 02(3) Symbols
/*
let s = Symbol('event');
console.log(Symbol.keyFor(s));
let s2 = Symbol.for('event');
console.log(s === s2);
let description = Symbol.keyFor(s2);
console.log(description);

let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value);
console.log(Object.getOwnPropertyNames(article));
console.log(Object.getOwnPropertySymbols(article));
*/
//-----------------------------------------------------------
//Lesson 04 Classes
/*function Car() {}

class Task {
    constructor() {
        console.log('constructing Task');
    }
    showId() {
        console.log('99');
    }
}

let task = new Task();
//console.log(task.showId === Task.prototype.showId);
//console.log(typeof task);
//console.log(task instanceof Task);
console.log(window.Task === Task);
console.log(window.Car === Car);

let newClass = class Goal {
    constructor() {
        console.log('constructing Goal');
    }
};

new newClass();
*/
// lesson  05 extends and super
/*
class Car {
    static showMessage () {
        console.log("This is a static method!");
    }
    constructor(name) {
        console.log(new.target);
        this.name = name;
    }
}
class Truck extends Car {
    constructor(nam, year){
        super(nam);
        this.year = year;
    }
}
let newCar = new Car("Opel");
let newTruck = new Truck("Lada", 1999);
console.log(newTruck);
console.log(Car.showMessage());
*/
//-----------------------------------------------------------
//lesson 10, 11 destructuring & advance destructuring

let price =  ['10', '40', '90'];
let [low, average, high, extra = '100'] = price;
//console.log(`${low} ${average} ${high} ${extra}`);

let level = {
    jun: 'A2',
    middle: 'B2',
    sen: 'C2'
};

//let {jun, middle, sen} = level;
//console.log(`${jun} ${middle} ${sen}`);

//let {jun: newJun, middle: newMiddle, sen: newSen} = level;
//console.log(newMiddle);
let newJun, newMiddle, newSen
({jun: newJun, middle: newMiddle, sen: newSen} = level);
//console.log(newJun, newMiddle);

let [maxCode, minCode] = 'BY';
//console.log(`Min: ${minCode}; Max: ${maxCode}`);

//lesson 9 template literals
/*
let invoice = '1350';
console.log(`Invoice Number: ${"INV-" + invoice}`);

function showMessage(message) {
    let invoiceNum = '99';
    console.log(message);
}

let invoiceNum = '1350';
showMessage(`Invoice Number: ${invoiceNum}`);
/*
//lesson 8 octal and binary literals
/*
console.log(0o10 + " " + 0O10);
console.log(0b10 + " " + 0B10);
*/
//lesson 7 For...of Loops
/*
var categories = ['hardware', 'software', 'varorware'];
for (var item of categories) {
    console.log(item);
}
var someString = "ABCDE";
for (var letter of someString) {
    console.log(letter);
}
*/
//--------------------------------lesson 6 Object Literal Extensions
/*var price = 5.99, quantity = 10;
var dynamicMethod = "method";
var productView = {
    price: 7.99,
    quantity,
    calculateValue() {
        return this.price * this.quantity;
    },
    [dynamicMethod + "-01"] () {
        console.log("Hey! I'm a dynamic method.");
    },
    get count () {
        return this.quantity;
    },
    set count(num) {
        this.quantity = num;
    }
};
console.log(productView.calculateValue());
productView["method-01"]();
console.log(productView.count = 15);
console.log(productView.count);
*/
//--------------------------------lesson 5 Rest and spread
/*var showCategories = function (productId, price = 100, ...categories) {
    console.log(categories);
    console.log(arguments.length);
}
showCategories(123, undefined, 'search', 'advertising');

var prices = [10, 15, 5];
console.log(Math.max(...prices));
*/

//--------------------------------lesson 4 default
/*
var getProduct = function (productId = 1000, type = "software") {
    console.log(`${productId}, ${type}`);
}
getProduct(undefined, "hardware");

var baseTax = 0.07;
var getTotal = function (price, tax = price * baseTax) {
    console.log(price + tax);
};
getTotal(5.00);
*/

//--------------------------------lesson 3 arrow funtions
/*
var getTax = () => 0.07;
//console.log(getTax());

var getPrice = (count, tax) => {
    var price = count * 4;
    price *= (1 + tax);
    return price;
};
//console.log(getPrice(2, 0.07));

document.addEventListener('click', function () {
    console.log(this);
});

var invoice = {
    number: 123,
    process: () => console.log(this)
};

var invoice2 = {
    number: 256,
    process: function () {
        return () => console.log(this.number);
    }
}
invoice.process();
invoice2.process()();
*/
//--------------------------------lesson 2 let, const, blocks

/*let productId = 12;
{
  let productId = 2000;
}
console.log(productId);
*/

/*var updateFunctions = [];
for (let i = 0; i < 2; i += 1) {
    updateFunctions.push(function () { return i; });
}
var i = 2;
console.log(updateFunctions[1]());

const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT);
*/
