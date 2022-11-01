const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('"Hi there, welcome to my assignment!"')
  })
  


app.get('/speak/:animal', function (req, res) {
     const {animal} = req.params
     if (animal == 'pig') {
        res.send('Oink')
     }
     else if (animal == 'cow') {
        res.send('Moo')
     }
     else if (animal == 'dog') {
        res.send('Woof')
     }
  })
  

app.get('/greet/:msg/:count', function (req, res) {
    const {msg, count} = req.params
    res.send( (msg + ' ').repeat(count) )
 })
 
 app.get('*', function (req, res) {
    res.send("Sorry, page not found...Blame our developer" )
 })

  
app.listen(3000)