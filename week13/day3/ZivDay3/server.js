const express = require("express");
// import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use('/', express.static(__dirname + '/public'))

const users = [
  { id: 1, name: "lena", email: "lena@gmail.com" },
  { id: 2, name: "ervin", email: "ervin@gmail.com" },
  { id: 3, name: "dan", email: "dan@gmail.com" },
];
/**
 * cRud - Read - get
 */
app.get("/usr", (req, res) => {
  //   console.log(req);
  res.status(201).json(users);
});

app.get("/usr/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    // res.status(404).json({ msg: "user not found" });
    res.sendStatus(404);
    return;
  }
  res.json(user);
});

app.get("/usrs", (req, res) => {
  const { a } = req.query;
  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(a.toLowerCase());
  });
  if (filteredUsers.length === 0) {
    res.status(404).json({ msg: " no user match your search" });
  }
  res.json(filteredUsers);
});


/**
 * app.get
 * app.post
 * app.put
 * app.delete
 */
/**
 * API
 */
/**
 * HTTP -Methods
 * GET
 * POST
 * PUT
 * DELETE
 */
/** CRUD
 * Create - POST - Create a new data - new row in db
 * Read  - GET - retrieve data-
 * Update - PUT - modify a password
 * Delete - DELETE - delete something
 */
/**
 * Rest(full) API
 * http://example.com/users - GET - get users
 * http://example.com/users - POST - create get user
 * http://example.com/users - PUT - modify a users
 * http://example.com/users - DELETE - delete a user
 */
