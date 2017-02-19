const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const yargsSetup = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: yargsSetup.title,
    body: yargsSetup.body
  })
  .command('list', 'List all the notes')
  .command('read', 'Read a note', {
    title: yargsSetup.title
  })
  .command('remove', 'Remove a note', {
    title: yargsSetup.title
  })
  .help()
  .argv;
const command = argv._[0]

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
  let allNotes = notes.getAll()
  allNotes.forEach(x => {
    console.log('--------------')
    console.log('Title:', x.title)
    console.log('Body:', x.body)
  })
  console.log('--------------')
  console.log('EOF')
} else if (command === 'read') {
  let note = notes.readNote(argv.title)
  if (note) {
    console.log('--------------')
    console.log('Title:', note.title)
    console.log('Body:', note.body)
  } else {
    console.log('--------------')
    console.log(`Title "${argv.title}" not found!`)
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title)
  let message =  (noteRemoved) ? `Removed: ${argv.title}` : `"${argv.title}" was not found!`
  console.log(message)
} else {
  console.log('No instruction')
}
