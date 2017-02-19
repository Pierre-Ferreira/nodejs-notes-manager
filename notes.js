const fs = require('fs')

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'))
  } catch(e) {
    return []
  }
}

const saveNotes = (notes) => {
  if (!notes) {
    console.log('No notes defined!')
    return
  }
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {

  let notes = fetchNotes()

  let duplicateTitle = ''
  duplicateTitle = notes.filter(x => x.title === title)
  if (duplicateTitle.length === 0) {
    let note = {
      title,
      body
    }
    notes.push(note)
    saveNotes(notes)
    return note
  }
};

const getAll = () => {
  return fetchNotes()
}

const readNote = (title) => {
  let notes = fetchNotes()
  return notes.filter(x => x.title === title)[0]

};

const removeNote = (title) => {
  let notes = fetchNotes()
  let newNotes = notes.filter(x => x.title !== title)
  saveNotes(newNotes)
  return (notes.length !== newNotes.length)
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
