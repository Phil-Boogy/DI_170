const express = require('express')

const app = express();
app.use(express.json());

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

app.post("/user", (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email, id: users.length + 1 };
    users.push(newUser);
    res.json({ msg: 'new user created' });
});

app.put("/user/:userid", (req, res) => {
    const { name, email } = req.body
    const { userid } = req.params
    const index = users.findIndex(item => item.id == userid)
    if (index === -1) {
        res.status(404).json({ msg: 'user to modify not found' })
        return
    }
    users[index] = { ...users[index], name, email };
    res.json(users);

})

app.delete('/user/:userid', (req, res) => {
    const { userid } = req.params;
    const index = users.findIndex((item) => item.id == userid);
    if (index === -1) {
        res.status(404).json({ msg: 'user to modify not found' })
        return
    }
    users.splice(index, 1);
    res.json(users);
})
// query syntax ?key=value, ?firstname=philip

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */