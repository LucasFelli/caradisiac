const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const populate = require('./populate')
const suv = require('./suv')
const port = 9292

app.use(bodyParser.json())


app.get('/populate', (req, res) => {
  populate.insertData((err, results) => {
    res.json(results);
  })
})

app.get('/suv', (req, res) => {
  suv.sortSuv((err, results) => {
    res.json(results)
  })
})


app.listen(port, () => {
  console.log("Listening on port " + port + " ...");
})