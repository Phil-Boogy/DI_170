// 

const console = require("console");
const e = require("cors");

const people = ["Greg", "Mary", "Devon", "James"];

//1. Write code to remove “Greg” from the people array.
// const noGreg = people.slice(1);
people.splice(0, 1);
console.log(people);

// 2. Write code to replace “James” to “Jason”.
people.splice(2, 1, 'Jason');
console.log(people)

// 3. Write code to add your name to the end of the people array.
people.push('Philip');
console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.

const sliced = people.slice(1, 3)
console.log(sliced)

// 6. Write code that gives the index of “Foo”. Why does it return -1 ? Answer: Because it's not found in the array.

console.log(people.indexOf('Foo'));

// 7. Create a variable called last which value is the last element of the array.

const last = people[(people.length) - 1]
console.log(last);

const lastSliced = sliced[(sliced.length) - 1]
console.log(lastSliced);

// Part II - Loops
// 1.  Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
    console.log(`index: ${i}, name: ${people[i]}`)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") { break }
    console.log(`index: ${i}, name: ${people[i]}`)
}

/*Exercise 2 : Your favorite colors
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus */

const colors = ["blue", "orange", "green", "yellow", "red"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]} `);
}

/*Exercise 3 : Repeat the question
Instructions
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
 */

function repeatQuestion() {
    let input;
    do {
        let input = Number(prompt("Give me a number:"));
        if (isNaN(input)) {
            alert("Give me a number, dammit")
            input = 0;
        }
    }
    while (input < 10);
    console.log(input);
}

repeatQuestion();

/*🌟 Exercise 4 : Building Management
Console.log the number of floors in the building.
Console.log how many apartments are on the floors 1 and 3.
Console.log the name of the second tenant and the number of rooms he has in his apartment.
Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
console.log();

function checkRents() {
    const { sarah, dan, david } = building.numberOfRoomsAndRent;
    if (sarah[1] + david[1] > dan[1]) {
        building.numberOfRoomsAndRent.dan[1] = 1200;
    }
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

checkRents();

/*🌟 Exercise 5 : Family
Instructions
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.
 */

const family = {
    mom: "Sarah",
    dad: "Dan",
    oldest: "Billy",
    youngest: "Timmy"
}

for (const person in family) {
    console.log(`${person}`)
}

for (const person in family) {
    console.log(`${family[person]}`)
}

/*Exercise 6 : Rudolf
Given the object below and using a for loop, console.log “my name is Rudolf the reindeer”*/

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let string = ""
for (const item in details) {
    string += (`${item} ${details[item]} `)
}
console.log(string)

/*Exercise 7 : Secret Group
A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
    Hint: a string is an array of letters
Console.log the name of their secret society.The output should be “ABJKPS”*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

letters = []
for (const name of names) {
    letters.push(name[0])
}
name = ((letters.sort()).join('')).toUpperCase()
console.log(name)