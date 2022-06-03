// fetch(url).then(response => console.log(response.json()))
// fetch(url).then(response => response.json().then(json => console.log(json))) 
// fetch(url).then(response => response.json()).then(json => console.log(json))

///////////
// fetch(url)
// .then(
//   response => response.json()
//   .then(json => console.log(json))
//   ) 

// ////////////

// fetch(url)
// .then(
// response => response.json())
// .then(json => console.log(json))

class NotesApi {

// url = 'http://localhost:3000/notes'

//   loadNotes(url, callback) {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       callback(data)
//     });
//   }


  async loadNotes(callback) {
    try {
      const response = await fetch("http://localhost:3000/notes");
      console.log('const response:', response)
      const notes = await response.json();
      console.log('const notes, post-json:', notes)
      return callback(notes);
    } catch (error) {
      console.log('const error:', error);
    }
  }

}

//test the fetch is made
//that it makes it to the right url
//that there is a callback function

module.exports = NotesApi;