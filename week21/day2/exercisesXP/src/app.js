"use strict";
// Exercise 1: Hello, World! Program
const sayHello = () => {
    console.log("Hello World");
};
sayHello();
// 🌟 Exercise 2: Type Annotations
const age = 43;
console.log(age);
const myName = "Philip";
console.log(myName);
// 🌟 Exercise 3: Union Types
const id = 21;
console.log(id);
// 🌟 Exercise 4: Control Flow with if...else
const nameThatNum = (a) => {
    if (a > 0) {
        return "positive";
    }
    else if (a < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
};
console.log(nameThatNum(-2));
// 🌟 Exercise 5: Tuple Types
const getDetails = (name, age) => {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
};
const details = getDetails("Philip", 99);
console.log(details);
const createPerson = (name, age) => {
    return { name: name, age: age };
};
const newPerson = createPerson("Philip", 89);
console.log(newPerson);
// 🌟 Exercise 7: Type Assertions
const input = document.getElementById("myInput");
input.value = "hello";

