const NotesApi = require("./notesApi")
const NotesModel = require("./notesModel")
const NotesView = require("./notesView")

const notesModel = new NotesModel
notesModel.addNote('example note')
const notesView = new NotesView(notesModel, api)
notesView.displayNotes()
console.log(notesModel.getNotes())
const api = new NotesApi()
api.createNote('hello there!')
api.loadNotes((notes) => {
  notesModel.setNotes(notes)
  notesView.displayNotes();
});

