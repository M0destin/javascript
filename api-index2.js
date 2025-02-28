import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  var randomNumber = Math.round(Math.random() * jokes.length);
  res.json(jokes[randomNumber]);
});


app.get("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const getJokes = function (id) {
      for(var i = 0; i < jokes.length; i++){
        if(i === id){
          return jokes[i];
        }
      }
    }
    res.json(getJokes(id-1));
});


// app.get("/filter", (req, res) => {
//   const type = req.query.type;
//   const filteredActivities = jokes.filter((joke) => joke.jokeType === type);
//   res.json(filteredActivities);
// });

app.get("/filter", (req, res) => {
  const type = req.query.type;
  const typeArray = [];
  
  for(var i = 0; i < jokes.length; i++){
    if(jokes[i].jokeType === type){
      typeArray.push(jokes[i]);
    }
  }

  res.json(typeArray);
});


app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  jokes.push(newJoke);
  res.json(newJoke);
});

app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedJoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  
  for(var i = 0; i < jokes.length; i++){
    if (jokes[i].id === id){
      jokes[i] = updatedJoke;
    return  res.json(updatedJoke);
  }
}

});


app.patch("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingJoke = jokes.find((joke) => joke.id === id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text || existingJoke.jokeText,
    jokeType: req.body.type || existingJoke.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  res.json(replacementJoke);
});



app.delete("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
});
