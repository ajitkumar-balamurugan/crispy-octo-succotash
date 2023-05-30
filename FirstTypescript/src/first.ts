enum Role {
  Admin,
  User,
}

const person = {
  name: "Some name",
  age: 39,
  role: Role.User,
};
console.log(person.name);

if (person.role === Role.User) {
  console.log("User");
}

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(add(2, 4));
