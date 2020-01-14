var express = require("express");
var path = require("path");
var fs = require("fs");

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
    fs.readFile('./db/db.json',function(err,content){
        if(err) throw err;
        var parseJson = JSON.parse(content);
        for (i=0; i < notes.length ; i++){
         parseJson.notes.push(newNotes)
        }
        fs.writeFile('./db/dbjson',JSON.stringify(parseJson),function(err){
          if(err) throw err;
        })
      })
    return res.json(notes)
});

// To push new notes to note container
app.post("/api/notes", function(req, res){
    var newNotes = req.body;
    notes.push(newNotes);
    res.json(newNotes);
});




// To push notes to db.json
// app.get("/api/notes", function(req, res){
//     fs.readFile(path.join(__dirname, "./db/db.json"))
// });

// app.post('/notes', function(req, res){
//     var body = "";
//     req.on('data', function(chunk){
//       body += chunk;
//     });
//     req.on('end', function(){
//       fs.readFile(__dirname + './db/db.json', function(err, data){
//         if (err) throw err;
//         console.log(body);
//         var fileObj = JSON.parse(data.toString());
//         var postObj = JSON.parse(body);
//         fileObj.notes.push(postObj);
//         var returnjson = JSON.stringify(notes);
//         fs.writeFile(__dirname + './db/db.json', returnjson, function(err){
//           if (err) throw err;
//           res.send(returnjson);
//         });
//       });
//     });
//   });







// Route to home page (index.html)
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.listen(PORT, function(){
    console.log("Listening from PORT " + PORT)
});