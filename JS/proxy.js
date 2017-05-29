function Employee() {
    this.name = 'Milton Waddams';
    this.salary = 0;
}

var e = new Employee();

var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        if (prop === 'salary') {
            return 'Denied';
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(p.salary);
console.log(p.name);
