const express = require('express');
const app = express();

var people = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male"
    }
    ];

app.get('/api', function (req, res){
    res.send(people);
});

app.get('/api/:id', function (req, res) {
    res.send(people[req.params.id]);
})

app.post('/api', function (req, res) {
    var newpeople = {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female"
    };
    people.push(newpeople);
    res.send(newpeople);
})

app.listen(3000, function(){
    console.log('Express serving at port 3000');
});