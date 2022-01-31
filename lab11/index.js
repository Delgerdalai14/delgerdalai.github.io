const express = require('express');
const path = require('path');

const app = express();

app.set('port', 8080);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

const questions = [
  { question: '3, 1, 4, 1, 5 __', answer: 9 },
  { question: '1, 1, 2, 3, 5 __', answer: 8 },
  { question: '1, 4, 9, 16, 25 __', answer: 36 },
  { question: '2, 3, 5, 7, 11 __', answer: 13 },
  { question: '1, 2, 4, 8, 16 __', answer: 32 },
];

// GET
app.get('/', function (req, res) {
  res.render('quiz', { questions: questions[0], step: 1, score: 0 });
});

// POST
app.post('/', function (req, res) {
  const data = req.body;
  const answer = parseInt(data.answer);
  let step = parseInt(data.step);
  let score = parseInt(data.score);

  if (answer === questions[step - 1].answer) {
    score++;
  }

  if (step == questions.length) {
    return res.render('result', { step: 0, score });
  }

  step++;
  res.render('quiz', {
    questions: questions[step - 1],
    step,
    score,
  });
});

const server = app.listen(app.get('port'), function () {
  console.log('Listening: ' + server.address().port);
});