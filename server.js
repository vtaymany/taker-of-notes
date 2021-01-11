const express = require('express')

// Tells node that we are creating an "express" server
const app = express()

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Set the public folder
app.use(express.static('public'))

// ROUTER

// require('./apiRoutes')(app)
require('./public/assets/js/htmlRoutes')(app)

// LISTENER

app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT)
})
