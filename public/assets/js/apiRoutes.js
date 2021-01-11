const fs = require('fs')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => {
    fs.readFile('./db.json', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })

  // API POST Requests

  app.post('/api/notes', (req, res) => {
    fs.appendFile('./db.json', ' This is my text.', function (err) {
      if (err) throw err
      console.log('Updated!')
    })
  })
}
