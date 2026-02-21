/* app.js - Create the server
            Config the server.
*/

const express = require("express");
const app = express();
app.use(express.json()); //middleware

const notes = [
    // {
    //     title:"title 1",
    //     description:"description 1"
    // }
]

// add a resource
app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);

    console.log(notes);

    res.send("notes created");
})

// retrieve a resource
app.get('/notes', (req, res) => {
    res.send(notes);
})

// delete a resource
app.delete('/notes/:index', (req, res) => {
    console.log(req.params.index);

    delete notes[req.params.index];
    res.send("notes deleted");
})

app.patch('/notes/:index', (req, res) => {
    notes[req.params.index].description = req.body.description;
    res.send("description patched");
})

module.exports = app;