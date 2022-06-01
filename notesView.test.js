/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe('NotesView', () => {
  it('displays a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote('gah')
    notesView.displayNotes()
    expect(document.querySelectorAll('.note').length).toBe(1)
  })

  it('adds a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);


    //arrange
    const buttonEl = document.querySelector('#addNoteButton')
    const textEl = document.querySelector('#text-input')
    //act
    textEl.value = "help I'm tired yo"
    buttonEl.click()
    notesView.displayNotes()
    //assert
    expect(document.querySelector('.note').innerText).toBe(textEl.value)
  })

  it('adds two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    //arrange
    const buttonEl = document.querySelector('#addNoteButton')
    const textEl = document.querySelector('#text-input')
    //act
    textEl.value = "you're all terrible"
    buttonEl.click()
    textEl.value = "need new computer"
    buttonEl.click()
    notesView.displayNotes()
    //assert
    expect(document.querySelectorAll('.note').length).toBe(2)

    
  })
})


  // document.querySelectorAll('.note').forEach(note => {
    //   expect(note.innerText).toBe('test')}

    // document.querySelectorAll('.note').forEach( note => {
    //   console.log(note.length)})
