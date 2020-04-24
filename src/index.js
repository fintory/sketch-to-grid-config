import express from 'express'

var app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('generate', function (req, res) {
  res.render('index', req.params)
})

app.listen(1337)
