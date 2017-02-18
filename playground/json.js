var obj = {
  name: "Peirre"
};

// var array = ['Peer', 1, 2, 3, 'Ferr']
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj)
// console.log(stringObj)
//
// let personString = '{"name": "Gert", "age": 39}'
// let person = JSON.parse(personString);
// console.log(typeof person)
// console.log(person.age)

const fs = require('fs');

let originalNote = {
  title: 'Some Title',
  body: 'Some body',
  extra: 'yep',
  extra: 'yep2'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json')

let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
