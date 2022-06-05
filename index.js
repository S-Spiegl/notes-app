const NotesApi = require("./notesApi")
const NotesModel = require("./notesModel")
const NotesView = require("./notesView")

const notesModel = new NotesModel
notesModel.addNote('example note')
const api = new NotesApi()
const notesView = new NotesView(notesModel, api)
notesView.displayNotes()
console.log(notesModel.getNotes())
notesView.addNewNote('wtf!')
api.loadNotes((notes) => {
  notesModel.setNotes(notes)
  notesView.displayNotes();
});

