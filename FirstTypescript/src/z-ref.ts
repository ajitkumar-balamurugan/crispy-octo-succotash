let arr1: any[] = [];

function addElement(element: any) {
  arr1.push(element);
}

function removeElement(element: any) {
  console.log(arr1.indexOf(element));
  arr1.splice(arr1.indexOf(element), 1);
}

// addElement("One");
// addElement("Two");
// addElement("Three");
// removeElement("Two");
const one = { one: "one" };
const two = { one: "two" };
const three = { one: "three" };
addElement(one);
addElement(two);
addElement(three);
removeElement(two);

console.log(arr1);
