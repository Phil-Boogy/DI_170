// Exercise 1 : Location
// Instructions
// Analyze the code below.What will be the output ?
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const { name, location: { country, city, coordinates: [lat, lng] } } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// Exercise 2: Display Student Info
// Instructions
// function displayStudentInfo(objUser) {
//     //destructuring
// }

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// Exercise 3: User & id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// // Using methods taught in class, turn the users object into an array:
// // Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// // FYI: The number is their ID number.
console.log(Object.entries(users));

// // Modify the outcome of part 1, by multipling the user’s ID by 2.
// // Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]

const newArray = Object.entries(users).map(([username, id]) => {
    return [username, id * 2]
})

// Exercise 4 : Person class
//     Instructions
// Analyze the code below.What will be the output ? object
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//     }

// const member = new Person('John');
// console.log(typeof member);

// Exercise 5 : Dog class
//     Instructions
// Using the Dog class below:

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };
// // Analyze the options below.Which constructor will successfully extend the Dog class?
// // My answer: 2
// // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };


// // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };


// // 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };


// // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

// 🌟 Exercise 6 : Challenges
// Evaluate these(ie True or False) : False, false

// [2] === [2]
// { } === {}

// What is, for each object below, the value of the property number and why ?
// My answer: Objects 1, 2, and 3 are 4 and object4 is 5. This is because object1 through 3 point to the same place in memory, they are passed by reference, not value

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin etc …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    };

    sound(speaks) {
        return `${this.name} is a ${this.color} ${this.type} that says ${speaks}`;
    };
};

// Create a  object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal('Mr Moo Moo', 'Cow', 'black & white');
console.log(farmerCow.sound('moo'))