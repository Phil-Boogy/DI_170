// Exercise 1: Hello, World! Program
const sayHello = (): void => {
    console.log("Hello World")
}

sayHello()

// 🌟 Exercise 2: Type Annotations
const age: number = 43
console.log(age);

const myName: string = "Philip"
console.log(myName);

// 🌟 Exercise 3: Union Types
const id: string | number = 21
console.log(id);

// 🌟 Exercise 4: Control Flow with if...else
const nameThatNum = (a: number): string => {
    if (a > 0) {
        return "positive"
    } else if (a < 0) {
        return "negative"
    } else {
        return "zero"
    }
}

console.log(nameThatNum(-2))

// 🌟 Exercise 5: Tuple Types
const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `Hello, ${name}! You are ${age} years old.`]
}

const details = getDetails("Philip", 99)
console.log(details)

// 🌟 Exercise 6: Object Type Annotations
type Person = {
    name: string;
    age: number;
};

const createPerson = (name: string, age: number): Person => {
    return { name: name, age: age }
}
const newPerson = createPerson("Philip", 89)
console.log(newPerson);

// 🌟 Exercise 7: Type Assertions
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "hello";

// 🌟 Exercise 8: switch Statement with Complex Conditions
const getAction = (role: string): string => {
    switch (role) {
        case "admin":
            return "Manage users and settings"
        case "editor":
            return "Edit content"
        case "viewer":
            return "View content"
        case "guest":
            return "Limited access"
        default:
            return "Invalid role"
    }
}

const action = getAction("admin")
console.log(action);

// 🌟 Exercise 9: Function Overloading with Default Parameters
function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
    if (name) { return `Hello ${name}` }
    else { return "Hello stranger" }
}
const greeting = greet("Albert")
console.log(greeting);
const stranger = greet()
console.log(stranger);

