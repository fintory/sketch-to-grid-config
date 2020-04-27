import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import extractGridConfiguration from './extract-grid-configuration'

const app = express()

app.use(fileUpload())
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
})

app.post('/generate', function(req, res) {
  const configuration = extractGridConfiguration({ file: req.files.file.data })

  res.render('index', {
    generated_configuration: JSON.stringify(configuration, null, 2),
  })
})

app.listen(1337)
