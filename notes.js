console.log('starting notes.js');
const fs = require('fs')

const addNote = (title, body) => {
  console.log('Adding:',title, body)
  let notes = []
  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'))
  } catch(e) {}
  
  var note = {
    title,
    body
  }
  notes.push(note)
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const getAll = () => {
  console.log('SHOWING ALL')
  let notes = JSON.parse(fs.readFileSync('notes-data.json')) || []
  notes.forEach(x => {
    console.log('Title:', x.title)
    console.log('Body:', x.body)
  })
}

const readNote = (title) => {
  console.log("Read", title)
  let notes = JSON.parse(fs.readFileSync('notes-data.json')) || []
  notes.forEach(x => {
    if (x.title === title) {
      console.log('Title:', x.title)
      console.log('Body:', x.body)
    }
  })
};

const removeNote = (title) => {
  console.log('Remove:', title)
  let notes = JSON.parse(fs.readFileSync('notes-data.json')) || []
  let newNotes = notes.filter(x => {
    if (x.title !== title) return true
  })
  fs.writeFileSync('notes-data.json', JSON.stringify(newNotes))
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
