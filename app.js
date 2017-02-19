console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
const command = process.argv[2]

// console.log('process:', process.argv)
// console.log('argv:', argv)

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (!note) {
    console.log("Duplicate title! Choose another title.")
  } else {
    console.log(`Note with title "${note.title}" and body "${note.body}" was created!`)
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('No instruction')
}
