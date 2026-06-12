/**🌟 Exercise 1 : Find the numbers divisible by 23
Instructions
Create a function call displayNumbersDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23. */

const { appendFile } = require("node:fs");
const { type } = require("node:os");

function displayNumbersDivisible() {
    const isDivisible = []
    for (let i = 0; i < 501; i++) {
        if (i % 23 === 0) {
            isDivisible.push(i)
        }
    }
    console.log(isDivisible)
    const sum = isDivisible.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);
}

displayNumbersDivisible()

/**Exercise 2 : Shopping List
Instructions

Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.
Bonus: If the item is in stock, decrease the item’s stock by 1
 */

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

const shoppingList = [
    "banana",
    "orange",
    "apple"
]

function myBill() {
    const subTotal = []
    for (item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            console.log(`${item} costs ${prices[item]}`)
            subTotal.push(prices[item])
            stock[item]--
        }
    }
    const total = subTotal.reduce((partialSum, a) => partialSum + a, 0);
    console.log(total)
}

myBill()

/**Exercise 3 : What’s in my wallet ?
Instructions
Note: Read the illustration (point 4), while reading the instructions

Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.
 */

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01]
    const changeValue = []
    for (let i = 0; i < coinValues.length; i++) {
        const value = amountOfChange[i] * coinValues[i]
        changeValue.push(value)
    }
    const totalPrice = changeValue.reduce((partialSum, a) => partialSum + a, 0)
    if (totalPrice >= itemPrice) {
        return true
    }
    else {
        return false
    }
}

console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))

/**🌟 Exercise 4 : Vacations Costs
Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.*/

function hotelCost() {
    const costPerNight = 140;
    let input;
    while (!input || isNaN(input)) {
        input = Number(prompt("How many nights would you like to stay?"));
    }
    return input * costPerNight
}

/*
Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300 */

function planeRideCost() {
    const destination = {
        London: 183,
        Paris: 220
    }
    let userInput;

    while (!userInput) {
        userInput = prompt("Where ya wanna go?")
    };
    if (userInput in destination) {
        return destination[userInput]
    }
    else {
        return 300
    }
}

/*Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.*/

function rentalCarCost() {
    const carCost = 40;
    let carDays;
    while (!carDays || isNaN(carDays)) {
        carDays = Number(prompt("How many days is your rental?"))
    }
    let totalRentalCost = carCost * carDays
    if (carDays > 10) {
        totalRentalCost = totalRentalCost - (totalRentalCost * .05)
    }
    return totalRentalCost
}

/*Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()*/
function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost()
};
