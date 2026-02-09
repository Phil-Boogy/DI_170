// prediction: a will be overwritten as 3 because let can be overwritten
// prediction 1.2: a will remain 5 because you can't overwrite it

function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

//#2
// predicton: a will be 0, then a will be 5. Once funcTwo is run a will be overwritten that's why it will be 5
const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ? You'll get an error

//#3
//prediction: a will be 'hello'
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
//prediction: a will be redeclared as "test"
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? It will still be test because it's inside the scope of the function, the local scope

//#5
// prediction: 5, 2. Because what happens in curly brackets stays in curly brackets
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? Same as above. The curly brackets win out.


//Exercise 2
function winBattle() {
    return true;
}
// Transform the winBattle() function to an arrow function.
const winBattle = () => true;

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator.If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
let experiencePoints = winBattle() ? 10 : 1;

// Console.log the experiencePoints variable.
console.log(experiencePoints)


// Exercise 3 : Is it a string ?
//     Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.The function should return true or false
// Check out the example below to see the expected output
// Example:


const isString = (checkThisThing) => {
    return typeof checkThisThing === 'string' || checkThisThing instanceof String
}


console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie.an arrow function) that receives two numbers as parameters and returns the sum.

const sumFunc = (x, y) => console.log(x + y)

// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
//     Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it

function gramKilogramDeclared(weight) {
    return weight * 1000
};

console.log(gramKilogramDeclared(20))

const gramKilogramExpression = function (weight) {
    return weight * 1000
};

console.log(gramKilogramExpression(20));

// the difference between the two is that a declared function has a name whereas a function experssion is an anonymous function contained in a variable.

const gramKilogramArrow = (weight) => weight * 1000;

console.log(gramKilogramArrow(20));

// Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function fortune(numChildren, partnerName, location, jobTitle) {
    displayText = `One day you will be a ${jobTitle}, living in ${location}, happily married to ${partnerName}, and you'll have ${numChildren} kids.`

    document.body.innerHTML += `<p>${displayText}</p>`;
})(4, 'Danielle', 'Tel Aviv', 'unemployed');
