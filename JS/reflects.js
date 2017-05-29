// reflect 08

class Laptop {
    constructor(firm, year) {
        this.firm = firm;
        this.year = year;
    }
}
Laptop.prototype.speed = 199;
class Computer extends Laptop {
    constructor(firm, year) {
        super(firm, year);
        this.type = "Desktop";
    }
}
Computer.prototype.constructor = Computer;
var note1 = Reflect.construct(Laptop, ["Dell", 2010]);
var comp1 = Reflect.construct(Computer, ["Atom", 2016]);
//console.log(note1, comp1);
//console.log(Reflect.getPrototypeOf(note1), Reflect.getPrototypeOf(comp1));
console.log(Reflect.get(note1, "speed"));
Reflect.set(note1, "speed", 99);
console.log(Reflect.get(note1, "speed"));
console.log(Reflect.has(comp1, "speed"), "speed" in comp1);
console.log(Reflect.ownKeys(comp1), Object.keys(comp1));
console.log(Reflect.getOwnPropertyDescriptor(note1, "firm"));
Reflect.deleteProperty(comp1, "type");

Reflect.preventExtensions(comp1);
comp1.newProp = 111;
console.log(Reflect.isExtensible(comp1));

class Restaurant {
    constructor(name, city) {
        console.log(`${name} in ${city}`);
        console.log(`new.target: ${new.target}`);
        this.name = name;
        this.id = 33;
    }
    show(prefix) {
        console.log(prefix + this.id);
    }
}

function restaurantMaker() {
    console.log(`in restaurantMaker`);
}

Reflect.apply(Restaurant.prototype.show, {id: 22}, ['REST: ']);

let r = Reflect.construct(Restaurant, ["Zoey's", "Goleta"], restaurantMaker);
console.log(r);
