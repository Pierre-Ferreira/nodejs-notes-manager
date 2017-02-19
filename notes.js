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
  let notes = fetchNotes() || []
  notes.forEach(x => {
    console.log('--------------')
    console.log('Title:', x.title)
    console.log('Body:', x.body)
  })
  console.log('--------------')
  console.log('EOF')
}

const readNote = (title) => {
  console.log("Read", title)
  let notes = fetchNotes() || []
  let note = notes.filter(x => x.title === title)
  if (note.length !== 0) {
    console.log('--------------')
    console.log('Title:', note[0].title)
    console.log('Body:', note[0].body)
  } else {
    console.log('--------------')
    console.log(`Title "${title}" not found!`)
  }
};

const removeNote = (title) => {
  console.log('Remove:', title)
  let notes = fetchNotes() || []
  let newNotes = notes.filter(x => x.title !== title)
  saveNotes(newNotes)
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
