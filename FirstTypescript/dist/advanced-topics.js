"use strict";
var e1 = {
    name: "Tom",
    startDate: new Date(),
    privileges: ["Server"],
};
function printEmpInfo(emp) {
    console.log(emp.name);
    if ("privileges" in emp)
        console.log(emp.privileges);
    if ("startDate" in emp)
        console.log(emp.startDate);
}
function animalInMotion(animal) {
    var speed;
    if (animal.type === "horse")
        speed = animal.runningSpeed;
    if (animal.type === "bird")
        speed = animal.flyingSpeed;
    console.log("Animal speed is: " + speed);
}
animalInMotion({ type: "horse", runningSpeed: 333 });
//TypeCasting
var input = document.getElementById("user-input");
// const input = <HTMLInputElement>document.getElementById("user-input");
// const para = document.querySelector("p");
if (input) {
    input.value = "Hello";
}
var errorBag = {
    email: "Not a valid email",
    user: "3",
    20: "Hello",
};
