type Emp = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};

type ElevatedEmployee = Emp & Admin;

const e1: ElevatedEmployee = {
  name: "Tom",
  startDate: new Date(),
  privileges: ["Server"],
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknownEmployee = Emp | Admin;

function printEmpInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) console.log(emp.privileges);
  if ("startDate" in emp) console.log(emp.startDate);
}
// printEmpInfo(e1);
// printEmpInfo({ name: "Harry", startDate: new Date() });

//Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function animalInMotion(animal: Animal) {
  let speed;
  if (animal.type === "horse") speed = animal.runningSpeed;
  if (animal.type === "bird") speed = animal.flyingSpeed;
  console.log("Animal speed is: " + speed);
}
animalInMotion({ type: "horse", runningSpeed: 333 });

//TypeCasting

const input = document.getElementById("user-input");
// const input = <HTMLInputElement>document.getElementById("user-input");
// const para = document.querySelector("p");

if (input) {
  (input as HTMLInputElement).value = "Hello";
}

//Index Properties
interface ErrorContainer {
  [props: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  user: "3",
  20: "Hello",
};
