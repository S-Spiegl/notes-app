class NotesView {
  constructor(model) {
    this.notesModel = model;
    this.maincontainerEl = document.querySelector('#main-container');

    this.addNoteButtonEl = document.querySelector('#addNoteButton');
    
    
    this.addNoteButtonEl.addEventListener('click', () => {
      const textInput = document.querySelector('#text-input').value;  
      this.addNewNote(textInput)
    });
    console.log(this.maincontainerEl);
  }

  addNewNote(textInput) {
    this.notesModel.addNote(textInput)
    this.displayNotes()
  }

  displayNotes() {
document.querySelectorAll('.note').forEach(note => {
  note.remove();
});
    const notes = this.notesModel.getNotes()
    //for each note, create and append a new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note
      noteEl.className = 'note';
      this.maincontainerEl.append(noteEl);
      document.querySelector('#text-input').value = ''
    })
    
  }

}




module.exports = NotesView