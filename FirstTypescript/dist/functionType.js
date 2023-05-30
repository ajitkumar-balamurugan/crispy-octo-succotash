"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    console.log(n1 + n2);
}
var otherFunction;
otherFunction = add;
// otherFunction = add2;
console.log(otherFunction(2, 53));
