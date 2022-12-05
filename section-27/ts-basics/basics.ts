// Primitives

// let age: number = 30;
let age: number;
age = 30;

let userName: string;
userName = "Panda";

let isAnimal: boolean;
isAnimal = true;

// More complex types

let hobbies: string[]; // string or number
hobbies = ["eating", "sleeping", "playing"];

type Animal = { name: string; age: number };

let animal: Animal;

// let animal: { name: string; age: number };

animal = {
  name: "Panda",
  age: 30,
};

// let animals: { name: string; age: number }[];
let animals: Animal[];
animals = [
  { name: "Panda", age: 30 },
  { name: "Red Panda", age: 15 },
];

// Type inference

// let course = "React - The Complete Guide"; // typescript will take the variable and assign type "string"
let course: string | number = "React - The Complete Guide";
course = 12341;

// Functions & types

function addNumbers(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
