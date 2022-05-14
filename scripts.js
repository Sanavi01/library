const addBook = document.getElementById('addBook')
addBook.addEventListener('click', () => {
    addBookToLibrary()
})

let myLibrary = [];

function Book(title, autor, pages, readornot) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = readornot
}

function addBookToLibrary() {
    const titleInput = document.getElementById('title').value;
    const autorInput = document.getElementById('autor').value;
    const pagesInput = document.getElementById('pages').value;
    const readInput = document.getElementById('readornot')
    if (readInput.checked === true) {
        readInput.value = "Yes"
    } else {
        readInput.value = "No"
    }
    const book = new Book(titleInput, autorInput, pagesInput, readInput.value)
    myLibrary.push(book)
    console.log(myLibrary)
}