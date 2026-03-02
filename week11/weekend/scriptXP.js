// exercise 1

// const gifURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(gifURL)
//     .then(response => {
//         // Step 1: Check the response status
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Step 2: Parse the body as JSON
//         return response.json();
//     })
//     .then(data => {
//         // Step 3: Log the JavaScript object
//         console.log(data);
//     })
//     .catch(error => {
//         // Step 4: Catch any errors (network issues, bad status, etc.)
//         console.error("Something went wrong:", error);
//     });

// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
//     Console.log the Javascript Object that you receive.

// const gifURL = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(gifURL)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Something went wrong:", error);
//     });

// 🌟 Exercise 3 : Async function
//     Instructions
// Improve the program below:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

// async function getStarship() {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const objectStarWars = await response.json();
//         console.log(objectStarWars.result);

//     } catch (error) {
//         console.error("Something went wrong:", error);
//     }
// }

// getStarship();

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome ?
// prediction: we'll see 'calling' first then 2 seconds later the other functio will resolve and we'll see 'result'

//     function resolveAfter2Seconds() {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('resolved');
//             }, 2000);
//         });
//     }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
