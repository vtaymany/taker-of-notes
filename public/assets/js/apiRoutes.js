const fs = require('fs')
let dataTable = require('../../../db/db.json')

// ===============================================================================
// ROUTING
// ===============================================================================

function indexNotes() {
  dataTable.forEach((newNote, i) => {
    newNote.id = i + 1
  })
}
module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => {
    res.json(dataTable)
  })

  // API POST Requests

  app.post('/api/notes', (req, res) => {
    const newNote = req.body
    dataTable.push(newNote)
    indexNotes()
    fs.writeFileSync('./db/db.json', JSON.stringify(dataTable))
    res.json(dataTable)
  })
  // API DELETE Requests

  app.delete('/api/notes/:id', (req, res) => {
    const noteID = req.params.id
    for (var i = 0; i < dataTable.length; i++) {
      if (dataTable[i].id == noteID) {
        dataTable.splice(i, 1)
        indexNotes()
      }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(dataTable))
    res.json(dataTable)
  })
}
