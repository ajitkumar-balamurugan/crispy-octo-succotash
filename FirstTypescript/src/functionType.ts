function add(n1: number, n2: number) {
  return n1 + n2;
}

function add2(n1: number, n2: number) {
  console.log(n1 + n2);
}

let otherFunction: (a: number, b: number) => number;

otherFunction = add;
// otherFunction = add2;
console.log(otherFunction(2, 53));
