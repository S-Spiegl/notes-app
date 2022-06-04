const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableFetchMocks()

describe("loadNotes", () => {
  it("fetches notes from the server", (done) => {
    const api = new NotesApi();

    fetch.mockResponseOnce(async (request) => {
      return JSON.stringify(["Take out the bins"]);
    });

    api.loadNotes((response) => {
      expect(response[0]).toBe("Take out the bins");
      //assert on the times called and arguments given to fetch
      expect(fetch.mock.calls.length).toEqual(1)
      console.log(fetch.mock.calls)
      expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/notes");
      done();
      // how to run the above in chrome tools/the console to see them?
    });
  });

  it('creates a note', (done) => {
    //arrange
    const api = new NotesApi();
    fetch.mockResponseOnce(async (request) => {
      // try {
      //   expect(request.method).toBe("POST");
      //   const requestBody = await request.json();
      //   expect(requestBody.content).toEqual("Take a shower");
      // } catch (error) {
      //   console.log(error);
      // }
      return JSON.stringify(["Take a shower"]);
    });
    const response = api.createNote("Take a shower")
    expect(response).toBe("Take a shower");
    (done)    
  })

  // Test-drive a new method createNote on the NotesApi class. 
  // This method should make a POST request to the notes backend 
  //to create a new note.
});
