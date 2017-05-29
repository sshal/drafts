let fruits = ["banana", "orange", "peach", "lemon", "grapes", "granate", "kiwi"];
//console.log(fruits.length);
//console.log(Array.isArray(fruits));

let newFruit = fruits.concat(["grapefruit", "pear"]);
//console.log(newFruit);
//console.log(fruits.copyWithin(0, 1, 3));
/*for (let e of fruits.entries()) {
  console.log(e);
}
for (let e of fruits.keys()) {
  console.log(e);
}
  for (let e of fruits.values()) {
    console.log(e);
  } 3rd don't work*/
//console.log(fruits.every((el,ind,arr)=>typeof(el) === "string"));
//console.log(fruits.fill("DELETED", 3, 5));
//console.log(fruits.filter(el => el.length === 5
//console.log(fruits.find(el => el.length > 6));
//console.log(fruits.findIndex(el => el.length > 6));
//fruits.forEach((el,ind) => console.log('element[' + ind +']=' + el));
//console.log(fruits.includes("peach", 3));
//console.log(fruits.indexOf("lemon"));
//console.log(fruits.join(" | "));
//console.log(fruits.lastIndexOf("kiwi"));
//console.log(fruits.map(function(el, x=0) {++x; return x + " " + el;}));
//console.log(Array.prototype.map.call('Water', x => x.toUpperCase()));
//console.log(`${fruits.pop()} | ${fruits}`);
//console.log(`${fruits.push(["mango", "pineapple"])} | ${fruits}`);
//console.log([1,2,3,4,5].reduce((prev,cur,ind,arr) => prev + cur, 100));
//console.log(["a","b","c","d"].reduceRight((prev,cur,ind,arr) => prev + cur));
//console.log(fruits.reverse());
//console.log(`${fruits.shift()} | ${fruits}`);
//console.log(`${fruits.slice(1, 4)} | ${fruits}`);
//console.log(fruits.some(el => el.length >= 7));
//console.log([5,10, 8, 1, 3].sort((a,b) => b - a), fruits.sort());
//console.log(`${fruits.splice(1, 2, 5, 10, 15)} | ${fruits}`);
//console.log(`${fruits.unshift('NEW FIRST ELEMENT')} | ${fruits}`);
//console.log(fruits.toString());
