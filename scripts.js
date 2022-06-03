const table = document.getElementById('table-books')

let titleInput = document.getElementById('title')
let autorInput = document.getElementById('autor')
let pagesInput = document.getElementById('pages')
let readInput = document.getElementById('readornot')
let rowCreateTable = 0
let rowSelectTable = 0

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
    createTables()
}

function createTables() {
    let td = 0
    let columnCreateTable = 0
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (td = 0; td < 5; td++) {
        const tdDivs = document.createElement('td')
        tdDivs.classList.add(`position${rowCreateTable}-${columnCreateTable}`)
        columnCreateTable = columnCreateTable + 1
        tr.appendChild(tdDivs)
    }
    rowCreateTable = rowCreateTable + 1
    showBook()
}

function showBook() {
    //title
    let columnSelectTable = 0
    let selectorTable = `.position${rowSelectTable}-${columnSelectTable}`
    const titleTable = document.querySelector(selectorTable)
    titleTable.textContent = myLibrary[book].title
    //autor
    columnSelectTable = columnSelectTable + 1
    selectorTable = `.position${rowSelectTable}-${columnSelectTable}`
    const autorTable = document.querySelector(selectorTable)
    autorTable.textContent = myLibrary[book].autor
    //pages
    columnSelectTable = columnSelectTable + 1
    selectorTable = `.position${rowSelectTable}-${columnSelectTable}`
    const pagesTable = document.querySelector(selectorTable)
    pagesTable.textContent = myLibrary[book].pages
    //read
    columnSelectTable = columnSelectTable + 1
    selectorTable = `.position${rowSelectTable}-${columnSelectTable}`
    const readOrNotTable = document.querySelector(selectorTable)
    readOrNotTable.textContent = myLibrary[book].read
    //delete button
    columnSelectTable = columnSelectTable + 1
    selectorTable = `.position${rowSelectTable}-${columnSelectTable}`
    const deleteTable = document.querySelector(selectorTable)
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteTable.appendChild(deleteBtn)
    //Finish the table (next book)
    rowSelectTable = rowSelectTable + 1
    selectDeleteBtn()
}

function selectDeleteBtn() {
    const selectedDeleteBtn = document.querySelectorAll('.deleteBtn')
    selectedDeleteBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.parentElement.remove()
        })
    })
}

/*
PARA ELIMINAR EL LIBRO DEL ARRAY

function deleteBookFromArray() {
    const selectedDeleteBtn = document.querySelectorAll('.deleteBtn')
    selectedDeleteBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            let firstStep = deleteBtn.parentElement.parentElement.firstChild
            let secondStep = firstStep.textContent
            let indexInArray = myLibrary.findIndex((book) =>  book.title === secondStep)    
            console.log(indexInArray)
            myLibrary.splice(indexInArray,1)
            console.log(myLibrary)
        })
    })
}


function identifyDeleteButtons(){
    const selectedDeleteBtn = document.querySelectorAll('.deleteBtn')
    selectedDeleteBtn.forEach(deleteBtn => {
        let identifier = deleteBtn.classList.contains('identified')
        console.log(identifier)
        if(identifier == false){
            deleteBtn.classList.add('identified')
            identifiedDeleteBtn = document.querySelectorAll('.identified')
            selectDeleteBtn()
            console.log("HOla")
        } else {
            return
        }
    })
}


function selectDeleteBtn() {
    //deleteBookFromArray()
    //const selectedDeleteBtn = document.querySelectorAll('.deleteBtn')
    identifiedDeleteBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.parentElement.remove() 
        })
    })
}
*/

