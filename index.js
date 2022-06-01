const NotesModel = require("./notesModel")
const NotesView = require("./notesView")

const notesModel = new NotesModel
notesModel.addNote('example note')
notesModel.addNote('whyyyyyy')
const notesView = new NotesView(notesModel)
notesView.displayNotes()
console.log(notesModel.getNotes())