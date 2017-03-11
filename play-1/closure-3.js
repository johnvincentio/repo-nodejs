function makeAdder(x) {
    return function (y) {
        console.log("x "+x);
        return x + y;
    };
}

var add5 = makeAdder(5);        // closure, with x = 5
console.log("add5 "+add5);
var add10 = makeAdder(10);      // closure, with x = 10
console.log("add10 "+add10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
