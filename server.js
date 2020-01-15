var express = require("express");
var html = require("./routes/htmlRoutes");
var api = require("./routes/apiRoutes");

var app = express();
var PORT = process.env.PORT || 1738;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);


app.listen(PORT, function(){
    console.log("Listening from PORT " + PORT)
});



// make an empty array for NOTE
// var notes = [];


// ROUTE
// Route to notes.html
// app.get("/notes", function(req, res){
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// });

// Route to home page (index.html)
// app.get("*", function(req, res){
//     res.sendFile(path.join(__dirname, "./public/index.html"))
// });

// Get API notes and should read the db.json file and return all saved notes as JSON
// app.get("/api/notes", function(req, res){
//     fs.readFile('./db/db.json',function(err,content){
//         if(err) throw err;
//         var parseJson = JSON.parse(content);
//         for (i=0; i < notes.length ; i++){
//          parseJson.notes.push(newNotes)
//         }
//         fs.writeFile('./db/dbjson',JSON.stringify(parseJson),function(err){
//           if(err) throw err;
//         })
//       })
//     return res.json(notes)
// });

// To push new notes to note container
// app.post("/api/notes", function(req, res){
//     var newNotes = req.body;
//     notes.push(newNotes);
//     res.json(newNotes);
// });


