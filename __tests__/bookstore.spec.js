const app = require('../app')

test('should return list of the books', () =>{
    let books = app.getBooks()

    expect(books).toBeInstanceOf(Array)

    let book = books[0]
    expect(book.isbn).toBeDefined()
    //expect(true).toBe(true)
    
})