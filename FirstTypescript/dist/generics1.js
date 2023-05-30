"use strict";
var arr;
arr = ["d"];
arr[0].toUpperCase();
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   resolve(30);
// });
// promise.then((data) => {
//   // console.log(data);
// });
// console.log("Hi");
// function dummy(a: string) {
//   return new Promise((resolve) => {
//     resolve(a);
//   });
// }
// async function fn() {
//   console.log("Before promise");
//   const res = await dummy("hi");
//   console.log("After awaiting");
//   console.log(res);
//   console.log("After logging");
// }
// fn();
function merge(a, b) {
    // return Object.assign(a, b);
}
var merged = merge({ ad: "sd", gcgg: "jgcfgx" }, { asad: "df" });
console.log(merged);
function extractValueFromKey(obj, key) {
    return "Value is ".concat(obj[key]);
}
console.log(extractValueFromKey({ group: "A" }, "group"));
