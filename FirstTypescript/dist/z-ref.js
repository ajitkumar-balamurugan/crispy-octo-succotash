"use strict";
var arr1 = [];
function addElement(element) {
    arr1.push(element);
}
function removeElement(element) {
    console.log(arr1.indexOf(element));
    arr1.splice(arr1.indexOf(element), 1);
}
// addElement("One");
// addElement("Two");
// addElement("Three");
// removeElement("Two");
var one = { one: "one" };
var two = { one: "two" };
var three = { one: "three" };
addElement(one);
addElement(two);
addElement(three);
removeElement(two);
console.log(arr1);
