const express = require("express");

const app = express();
app.use(express.json());

// const notes = [
//     {
//         title: "Title 1",
//         description: "Description 1"
//     },
//     {
//         title: "Title 2",
//         description: "Description 2"
//     }
// ]

const notes = [];

// app.get('/', (req, res) => {
//     res.send("http Methods");
// })

app.post('/notes', (req, res) => {
    console.log(req.body);

    notes.push(req.body);

    res.send("notes created");
})

app.get('/notes', (req, res) => {
    res.send(notes);
})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})