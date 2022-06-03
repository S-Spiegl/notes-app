class NotesModel {
  constructor() {
    this.notes = []
  }

  loadNotes() {

  }
  //is the above required here?
  //can't tell from instructions whether I'm 
  //meant to create a loadNotes or a setNotes in
  //the model

  setNotes() {

  }

  getNotes() {
    return this.notes
  }

  addNote(note) {
    this.notes.push(note)
  }

  reset() {
    this.notes = []
  }
}

module.exports = NotesModel