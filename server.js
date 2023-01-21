const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

const animalTab =[
    {
        id: 1,
        name: "Lion",
        image: "/images/lion2.png",
        notes: "Big cat",
        favorite: true,
    },
    {
        id: 2,
        name: "Gorilla",
        image: "/images/gorilla.png",
        notes: "Big monkey",
        favorite: false,
    },
    {
        id: 3,
        name: "Panda",
        image: "/images/panda2.png",
        notes: "Big chinese bear",
        favorite: false,
    },
    {
        id: 4,
        name: "Crocodile",
        image: "/images/croco2.png",
        notes: "Big lizard",
        favorite: true,
    },
    {
        id: 5,
        name: "Turtle",
        image: "/images/turtle.png",
        notes: "Sturdy lizard",
        favorite: true,
    },
    {
        id: 6,
        name: "Zebra",
        image: "/images/zebra.png",
        notes: "Dual Color horse",
        favorite: false,
    },
    {
        id: 7,
        name: "Giraffe",
        image: "/images/giraffe.png",
        notes: "Long neck horse",
        favorite: true,
    },
    {
        id: 8,
        name: "Rhinoceros",
        image: "/images/rhino.png",
        notes: "it's grey and big",
        favorite: false,
    },

    {
        id: 9,
        name: "Wolf",
        image: "/images/wolf.png",
        notes: "wild dog",
        favorite: false,
    },
    {
        id: 10,
        name: "Dolphin",
        image: "/images/dolphin.png",
        notes: "smart fish",
        favorite: true,
    },

];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json()); // faut utiliser du json

function generateNewId(){
    return Math.random().toString(36).substring(2, 9);
}


app.get('/message',(req,res) => {
    res.send('Mon premier Serveur NodeJs !')
});

app.get("/api/animals", (req, res)=>{
    res.send(animalTab)
});

app.get("/api/animals:id", (req, res)=>{
    res.send(animalTab.id)
});


app.post("/api/animals", (req, res)=>{
    const animal = req.body;
    console.log(animal)
    animal.id = generateNewId(); // cette methode est à définir
    animalTab.push(animal); // j'ajoute dans mon context le nouvel événement
    res.send(animalTab)
});



app.use('/',express.static('public'));
app.get('/*',(rec, res) =>{
    res.sendFile(path.resolve("./public/index.html"))
});

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`);
});


const db = require("./src/app/tab/db_init");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });