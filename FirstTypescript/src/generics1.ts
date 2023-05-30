let arr: Array<string>;
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

function merge<T extends object, U extends object>(a: T, b: U) {
  // return Object.assign(a, b);
}

const merged = merge({ ad: "sd", gcgg: "jgcfgx" }, { asad: "df" });
console.log(merged);

function extractValueFromKey<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value is ${obj[key]}`;
}

console.log(extractValueFromKey({ group: "A" }, "group"));
