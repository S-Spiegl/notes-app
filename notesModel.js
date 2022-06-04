class NotesModel {
  constructor() {
    this.notes = []
  }

  setNotes(notes) {
    this.reset();
    notes.forEach((note) => this.notes.push(note));
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