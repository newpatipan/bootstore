const express = require('express')
const app = express()
const port = 3000

let books = [
    { id: 1, title: 'Node.js Web Development', isbn: '978-1838987572'},
    { id: 2, title: 'Get Programming with Node.js', isbn: '978-1617294747'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function getBooks(){
  return books
}

app.get('/list', (req, res) => {
    res.json(getBooks())
})

app.get('/id', (req, res) => {
    let id = req.params.id
    res.json(books[id-1])
})

module.exports = {
  getBooks: getBooks
}

//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})