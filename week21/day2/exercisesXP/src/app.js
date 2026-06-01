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
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "hello";
// 🌟 Exercise 8: switch Statement with Complex Conditions
const getAction = (role) => {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
};
const action = getAction("admin");
console.log(action);
function greet(name) {
    if (name) {
        return `Hello ${name}`;
    }
    else {
        return "Hello stranger";
    }
}
const greeting = greet("Albert");
console.log(greeting);
const stranger = greet();
console.log(stranger);
