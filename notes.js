console.log('starting notes.js');
const fs = require('fs')

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'))
  } catch(e) {}
}

const saveNotes = (notes) => {
  if (!notes) {
    console.log('No notes defined!')
    return
  }
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  console.log('Adding:',title, body)

  let notes = fetchNotes() || []

  let duplicateTitle = ''
  duplicateTitle = notes.filter(x => x.title === title)
  if (duplicateTitle.length !== 0) {
    console.log("Duplicate title! Choose another title")
    return true
  }

  var note = {
    title,
    body
  }
  notes.push(note)
  saveNotes(notes)
};

const getAll = () => {
  console.log('SHOWING ALL')
  let notes = JSON.parse(fs.readFileSync('notes-data.json')) || []
  notes.forEach(x => {
    console.log('--------------')
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
