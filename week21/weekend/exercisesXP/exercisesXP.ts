// 🌟 Exercise 1: Intersection Types

// Define an intersection type PersonWithAddress that combines Person and Address types.Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,

type Person = {
    name: string;
    age: number
}

type Address = {
    street: string;
    city: string
}

type PersonWithAddress = Person & Address

const Elvis: PersonWithAddress = {
    name: "Elvis Presley",
    age: 65,
    street: "Main St",
    city: "Memphis"
}

// 🌟 Exercise 2: Type Guards with Union Types

// Create a function describeValue that accepts number | string.Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number"
    }
    else {
        return "This is a string"
    }
}

// 🌟 Exercise 3: Type Casting
// Create a variable someValue of type any and cast it to a string.Then, use it as a string.

let someValue: any = "hello";
console.log((someValue as "string").toUpperCase())

// 🌟 Exercise 4: Type Assertions with Union Types

// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string.Test with arrays of mixed types.

function getFirstElement(array: (number | string)[]) {
    return array[0] as string
}

let testArray = [22, 1, "bye", 2]
console.log(getFirstElement(testArray));

// 🌟 Exercise 5: Generic Constraints

// Create a generic function logLength that takes a parameter of type T constrained to types with a length property(like string or Array).The function should log the length.

function logLength<T extends { length: number }>(value: T) {
    return value.length
}
console.log(logLength(testArray));

// 🌟 Exercise 6: Intersection Types and Type Guards

// Define a type Employee that combines Person and Job using intersection types.Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Person = {
    name: string;
    age: number;
}

type Job = {
    position: string;
    department: string
}

type Employee = Person & Job

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return "Hiya boss"
    }

    else if (employee.position === "Developer") {
        return "You're out, AI's in!"
    }
    else {
        return "Keep up the good work"
    }
}

// 🌟 Exercise 7: Type Assertions and Generic Constraints

// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method.Use type assertions to ensure the parameter is treated as a string for formatting.The function should format the input as a string.

function formatInput<T extends { toString(): string }>(value: T) {
    return value.toString()
}