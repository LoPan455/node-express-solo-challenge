var express = require('express');
var router = express.Router();
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];


router.get('/', function(req,res){
  res.send(jokes);
});

router.post('/submit',function(req,res){
  jokes.push(req.body);
  console.log('a new joke has been submitted.  the current array is: ',jokes);
  res.sendStatus(200);
});

module.exports = router;
