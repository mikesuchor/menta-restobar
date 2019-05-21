const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get("/breakfast", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/breakfast.html'));
})

app.get("/cocktails", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/cocktails.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/contact.html'));
})

app.get("/dinner", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/dinner.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));