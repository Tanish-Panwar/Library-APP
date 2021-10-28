console.log("hello")


// makeing a constructor for populating books 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


//  we are making a display constructor here this will display books in the table
function Display() {

}


//  here we are adding methods in display prototype
Display.prototype.add = function (book) {
    console.log("adding")
    tableBody = document.getElementById('tableBody')
    let tblStr = `     
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += tblStr;
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryForm")
    libraryform.reset();
}
// implimenting validate meathod to avoid empty adding of books in table
Display.prototype.validate = function (book) {
    if (book.name.lenght<=2 || book.author.lenght<=2 || book.author.lenght ==0) {
        return false
    }
    else{
        return true
    }
}
Display.prototype.show = function(type, Message){
    let mesage = document.getElementById('msg');
    mesage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Notice : </strong> ${Message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}



//  adding event listners in form submition
let libraryform = document.getElementById("libraryForm")
libraryform.addEventListener('submit', libraryformsubmition);

function libraryformsubmition(e) {
    console.log("submited");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;



    let act = document.getElementById('action');
    let his = document.getElementById('history');
    let fic = document.getElementById('fiction');
    let dra = document.getElementById('drama');
    let fan = document.getElementById('fantasy');
    let com = document.getElementById('comic');
    let kno = document.getElementById('knowledge');

    let type

    if (act.checked) {
        type = act.value
    }
    else if (his.checked) {
        type = his.value
    }
    else if (fic.checked) {
        type = fic.value
    }
    else if (dra.checked) {
        type = dra.value
    }
    else if (fan.checked) {
        type = fan.value
    }
    else if (com.checked) {
        type = com.value
    }
    else if (kno.checked) {
        type = kno.value
    }









    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show( 'Sorry you cannot add this book');
    }



    e.preventDefault();
}

// let book = new Book(name, author, type)
// console.log(book);

// let display = new Display();

// if (display.validate(book)) {

//     display.add(book);
//     display.clear();
//     display.show("We're sorry you cannot, Add this book")
    
// }
// else {
//     display.show('success', "your book has been added successfully")
// }



