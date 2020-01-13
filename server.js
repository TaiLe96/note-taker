var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// make an empty array for NOTE
var notes = [];

// ROUTE
// Route to notes.html
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

// Get API notes and should read the db.json file and return all saved notes as JSON
app.get("/api/notes", function(req, res){
    return res.json(notes)
});

// To push new notes to note container
app.post("/api/notes", function(req, res){
    var newNotes = req.body;
    notes.push(newNotes);
    res.json(newNotes);
});

// Route to home page (index.html)
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.listen(PORT, function(){
    console.log("Listening from PORT " + PORT)
});