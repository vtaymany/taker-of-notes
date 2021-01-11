const fs = require('fs')
const dataTable = require('./db.json')
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => {
    res.json(dataTable)
  })

  // API POST Requests

  // app.post('/api/notes', (req, res) => {
  //   fs.appendFile('./db.json', ' This is my text.', function (err) {
  //     if (err) throw err
  //     console.log('Updated!')
  //   })
  // })
}
