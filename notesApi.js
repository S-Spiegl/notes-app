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

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json()) 
    .then(data => {
      callback(data)
    });
  }


  // async loadNotes(callback) {
  //   try {
  //     const response = await fetch("http://localhost:3000/notes");
  //     console.log('const response:', response)
  //     const notes = await response.json();
  //     console.log('const notes, post-json:', notes)
  //     return callback(notes);
  //   } catch (error) {
  //     console.log('const error:', error);
  //   }
  // }

//   async createNote(note) {
//     try {
//       const response = await fetch("http://localhost:3000/notes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ content: note }),  
//       });
//       const notes = await response.json();
//       return notes;
//     } catch (error) {
//       console.log(error)
//   }
// }

createNote(note){
  console.log('1')
  fetch('http://localhost:3000/notes', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({content: `${note}`})
  })
}
};


// curl -XPOST http://localhost:3000/notes -H 'content-type: application/json' -d ' { "content": "Remember to reflect on my progress this week!" }'

module.exports = NotesApi;

