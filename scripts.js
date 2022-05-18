const table = document.getElementById('table-books')

let titleInput = document.getElementById('title')
let autorInput = document.getElementById('autor')
let pagesInput = document.getElementById('pages')
let readInput = document.getElementById('readornot')
let row = 0 

const addBook = document.getElementById('addBook')
addBook.addEventListener('click', () => {
    addBookToLibrary()
})

const myLibrary = [];

function Book(title, autor, pages, readornot) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = readornot
}

function addBookToLibrary() {
    titleInput = document.getElementById('title').value;
    autorInput = document.getElementById('autor').value;
    pagesInput = document.getElementById('pages').value;
    if (readInput.checked === true) {
        readInput.value = "Yes"
    } else {
        readInput.value = "No"
    }
    const book = new Book(titleInput, autorInput, pagesInput, readInput.value)
    myLibrary.push(book)
    console.log(myLibrary)

    createTables()
}

function createTables(){
    let td = 0
    let column = 1
    const tr= document.createElement('tr')
    table.appendChild(tr)
    for(td = 0; td < 5; td++){
        const tdDivs = document.createElement('td')
        tdDivs.classList.add(`position${row}-${column}`)
        column = column + 1
        tr.appendChild(tdDivs)
    }
    row = row + 1 
    console.log(row)
}
