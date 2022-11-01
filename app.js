const express = require('express')
const app = express()

app.set('view engine', 'hbs');

app.use((req, res, next) => {
  console.log('In the middleware')
  next()
})

app.use(express.static(__dirname + '/styles'))

app.get('/home', function (req, res) {
  // console.log('__dirname is: ', __dirname)
  res.render(__dirname + '/views/home.hbs')
})

app.get('/', function (req, res) {
  res.render(__dirname + '/views/landing.hbs', {name: 'Manish', age: 21})
})

app.get('/about', function (req, res) {

  let users = [
    {name: 'Dafydd', age: 20},
    {name: 'Sujith', age: 21},
    {name: 'TJ', age: 22},
    {name: 'Manish', age: 23}
  ]

  res.render(__dirname + '/views/about.hbs', {users})
}) 

app.get('/profile/:username/:age', (req, res) => {
  const {username, age} = req.params 
  console.log(req.params )
  res.send(`Welcome ${username}. You're ${age}`)
})


// handles all requests that do not match the above 
app.get('*', (req, res) => {
  res.render(__dirname + '/views/notfound.hbs')
})

  
app.listen(3000)