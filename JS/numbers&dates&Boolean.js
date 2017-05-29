/*console.log(new Boolean("d"));
console.log(new Boolean([]));
console.log(new Boolean({}));
console.log(new Boolean(""));
console.log(new Boolean(NaN));
console.log(new Boolean(0));
console.log(new Boolean(false));
console.log(new Boolean(null));
console.log(new Boolean(undefined));*/

//console.log(Math.random());
//console.log(Math.abs(-1) + " " + Math.abs(0) + " " + Math.abs(1));
//console.log(Math.pow(2, 3));
//console.log(Math.cbrt(27) + " " + Math.cbrt(-8));
//console.log(Math.sqrt(16));
//console.log(Math.ceil(1.1) + " " + Math.ceil(-1.1));
//console.log(Math.floor(2.95) + " " + Math.floor(-2.95));
//console.log(Math.trunc(2.95) + " " + Math.trunc (-2.95));
//console.log(Math.round(2.5) + " " + Math.round(2.49) + " " + Math.round(-20.5) + " " + Math.round(-20.51));
//console.log(Math.sign(2) + " " + Math.sign(-2) + " " + Math.sign(-0) + " " + Math.sign(0) + " " + Math.sign("one"));
//console.log(Math.min(5,10,4,6,2,15,-1) + " " + Math.max(5,10,4,6,2,15,-1));
//console.log(Number.isFinite(100) + " " + Number.isFinite(Infinity));
//console.log(Number.isInteger(10) +" "+ Number.isInteger(-110) +" "+ Number.isInteger('10') +" "+ Number.isInteger(true));
//console.log(Number.isNaN(NaN) + " " + NaN == NaN);
//console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));
//console.log(parseFloat("12.742 1soa 131.1") + " " + parseInt(" -f5vaosdfj 4 sidjfa", 16));
//var someNum = 12.15319; console.log(someNum.toPrecision(3) + " " + someNum.toFixed(3));

 //dates
console.log(new Date(Date.UTC(96, 11, 1, 0, 0, 0)));
var temp = new Date();
console.log(temp.getTime());

console.log(temp.getFullYear() + "|" + temp.getMonth() + "|" + temp.getDate() +
"|" + temp.getDay() + "|" + temp.getHours() + "|" + temp.getMinutes() +
"|" + temp.getSeconds() + "|" + temp.getMilliseconds());

console.log(temp.getUTCFullYear() + "|" + temp.getUTCMonth() + "|" + temp.getUTCDate() +
"|" + temp.getUTCDay() + "|" + temp.getUTCHours() + "|" + temp.getUTCMinutes() +
"|" + temp.getUTCSeconds() + "|" + temp.getUTCMilliseconds());

temp.setFullYear(2000) + "|" + temp.setMonth(10) + "|" + temp.setDate(12) +
"|" + temp.setHours(14) + "|" + temp.setMinutes(23) +
"|" + temp.setSeconds(15) + "|" + temp.setMilliseconds(100);
console.log(temp);

temp.setUTCFullYear(2000) + "|" + temp.setUTCMonth(10) + "|" +
temp.setUTCDate(12) + "|" + temp.setUTCHours(14, 25, 55, 159);
console.log(temp);
console.log(temp.getTimezoneOffset()/60);
