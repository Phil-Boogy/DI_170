const express = require('express')

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
});

const users = [
    { id: 1, name: 'Philip', email: 'philip@philip.com' },
    { id: 2, name: 'Bill', email: 'pBill@philip.com' },
    { id: 3, name: 'Sarah', email: 'Sarah@philip.com' }
]

app.get("/user", (req, res) => {
    // console.log(req);
    // res.send(users)
    res.status(201).json(users);
});

app.get("/user/:a/:b", (req, res) => {
    console.log(req.params);
    // res.send(users)
    res.json(users);
});

// query syntax ?key=value, ?firstname=philip