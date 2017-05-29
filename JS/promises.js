//lesson 06-07 Promises. Features
/*
let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("p1 Done!");
        resolve("#1");
        //reject("#1");
    }, 1000);

});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("p2 Done!");
        //resolve("#2");
        reject("#2");
    }, 2000);
});

function doAsync() {
    //return Promise.resolve("Some String");
    return Promise.reject("Errooor!");
}

//doAsync().then(
Promise.all([p1,p2]).then(
//Promise.race([p1,p2]).then(
   function (value) { console.log('Ok: ' + value); },
   function (reason) { console.log('Nope: ' + reason); }
);
*/
//lesson 06-06 Promises
/*
function doAsync() {
    let p = new Promise(function(resolve, reject) {
        console.log('in promise code');
        setTimeout(function() {
            //console.log('resolving...');
            //resolve("OK!");
            console.log('rejecting...');
            reject("Database error!");
        }, 1000);
    });
    return p;
}

/*
doAsync().then(function (value) {
    console.log('Fulfilled! ' + value);
},
function (reason) {
    console.log('Rejected! ' + reason);
});

doAsync().then(function (value) {
    console.log('Fulfilled! ' + value);
    return 'For Sure';
}).then(function(value) {
    console.log('Really! ' + value);
});

doAsync().catch(function(reason) {
    console.log('Error: ' + reason);
});
//let promise = doAsync();
*/
