// 🌟 Exercise 1: Class with Access Modifiers

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getEmployeeInfo(): string {
        return `${this.name}, ${this.position}`
    }

}

let employee = new Employee("Philip J", 1000000, "CEO", "Executive Dept")

let info = employee.getEmployeeInfo()
console.log(info);

// 🌟 Exercise 2: Readonly Properties in a Class

class Product {
    readonly id: number;
    public name: string;
    public price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `${this.name}, ${this.price}`
    }
}

let chewToy = new Product(1, "chew toy", 99)
// chewToy.id = 2

// 🌟 Exercise 3: Class Inheritance

class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Animal Sound"
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    makeSound(): string {
        return "Bark"
    }
}

const fido = new Dog("Fido")
let sound = fido.makeSound()
console.log(sound);

// 🌟 Exercise 4: Static Properties and Methods

class Calculator {
    static add(a: number, b: number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}

let sum = Calculator.add(1, 1)
let difference = Calculator.subtract(5, 3)
console.log(sum);
console.log(difference);

// 🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string
}

function printUserDetails(user: PremiumUser): void {
    console.log(user.id, user.name, user.email, user.membershipLevel || "none")
}

const newUSer: PremiumUser = {
    id: 1,
    name: "Polly",
    email: "hello@gmail.com",
    membershipLevel: "platinum"
}

printUserDetails(newUSer)