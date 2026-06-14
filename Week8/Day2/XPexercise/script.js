// 🌟 Exercise 1 : Change the article
// Using a DOM property, retrieve the h1 and console.log it.
const headerOne = document.querySelector("h1");
console.log(headerOne)


// Using DOM methods, remove the last paragraph in the < article > tag.

const article = document.querySelector("article");
const lastP = article.lastElementChild;
lastP.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const header2 = document.querySelector("h2");
header2.addEventListener("click", () => { header2.style.backgroundColor = "red" })

// Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).

const header3 = document.querySelector("h3");
header3.addEventListener("click", () => { header3.style.display = "none" })

// 🌟 Exercise 2 : Work with forms
// Retrieve the form and console.log it.
const form = document.querySelector("form")
console.log(form)

// Retrieve the inputs by their id and console.log them.

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const submit = document.querySelector("#submit");

console.log(fname, lname, submit);

// Retrieve the inputs by their name attribute and console.log them.

const firstName = document.querySelector("[name='firstname']");
const lastName = document.querySelector("[name='lastname']");
console.log(firstName, lastName)

// When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
//     get the values of the input tags,
//         make sure that they are not empty,
//             create an li per input value,
//                 then append them to a the < ul class="usersAnswer" ></ul >, below the form.
const usersAnswer = document.querySelector(".usersAnswer")

const submitHandler = (e) => {
    e.preventDefault();
    if (fname.value && lname.value) {
        [fname.value, lname.value].forEach(val => {
            const li = document.createElement("li");
            li.textContent = val;
            usersAnswer.appendChild(li);
        });
    }
    fname.value = "";
    lname.value = "";
}

form.addEventListener("submit", submitHandler)

// 🌟 Exercise 3 : Transform the sentence
// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter.This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();


// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
    allBoldItems.forEach(item => item.style.color = "blue");
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = "")
}

// Call the function highlight() on mouseover(ie.when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout(ie.when the mouse pointer is moved out of the paragraph).Look at this example

const toHighlight = document.querySelectorAll("p:not(article p)");
toHighlight.forEach(p => {
    p.addEventListener("mouseover", highlight);
    p.addEventListener("mouseout", returnItemsToDefault);
});

