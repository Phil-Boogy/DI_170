const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
const usernames = []

gameInfo.forEach(function (player) {
    usernames.push(player.username + "!");
});

console.log(usernames)

// const usernames = gameInfo.map(player => player.username + '!');

// console.log(usernames)

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]

const winners = []

gameInfo.forEach(function (player) {
    if (player.score > 5)
        winners.push(player.username);
});

console.log(winners)

// 3. Find and display the total score of the users. (Hint: The total score is 71)

let sum = 0
gameInfo.forEach(function (player) {
    sum += player.score
});

console.log(sum)

let sum2 = gameInfo.reduce(function (total, player) {
    return total + player.score;
}, 0);

console.log(sum2)
