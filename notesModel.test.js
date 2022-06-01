const NotesModel = require('./NotesModel')

describe('NotesModel', () => { 
  it('it is initialised with an empty array', () => {
    const notesModel = new NotesModel
    expect(notesModel.getNotes()).toEqual([])
  })

  it('allows a user to add a note to the notes array', () => {
    const notesModel = new NotesModel
    notesModel.addNote('empty bins')
    expect(notesModel.getNotes()).toEqual(['empty bins'])
  })

  it('allows a user to reset the notes', () => {
    const notesModel = new NotesModel
    notesModel.addNote('empty bins')
    notesModel.reset()
    expect(notesModel.getNotes()).toEqual([])
  })

  
}) 