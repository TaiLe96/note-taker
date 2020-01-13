var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// make an empty array for NOTE
var notes = [];

// ROUTE
// 1st route to home page (index.html)
app.get("*", function(req, res){
    res.sendFile(path,join(__dirname, "index.html"))
});

// 2nd route to notes.html
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"))
});

// Get API notes and should read the db.json file and return all saved notes as JSON
app.get("/api/notes", function(req, res){
    return res.json(notes)
});

app.post("/api/notes", function(req, res){
    var newNotes = req.body;
    notes.push(newNotes);
    res.json(newNotes);
});

app.listen(PORT, function(){
    console.log("Listening from PORT " + PORT)
});