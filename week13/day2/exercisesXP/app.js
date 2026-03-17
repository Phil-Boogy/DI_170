import { people } from "./data.js";

// function findAverageAge() {
//     let totalAge = 0
//     people.forEach(person => {
//         totalAge += person.age
//     });
//     const avgAge = totalAge / people.length
//     console.log(avgAge)
// }

function findAverageAge() {
    const avgAge = people.reduce((total, person) => total + person.age, 0) / people.length;
    console.log(avgAge);
}

findAverageAge()