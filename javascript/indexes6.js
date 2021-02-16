console.log("New Project with use of es6");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add (book) {
        let tablebody=document.getElementById("tableBody");
        let stringtest =
            `<tr>
                <th scope="col">${book.name}</th>
                <th scope="col">${book.author}</th>
                <th scope="col">${book.type}</th>
            </tr>`
        tablebody.innerHTML+=stringtest;
    }
    clear () {
        let libform = document.getElementById("LibraryForm");
        libform.reset();
    }
    validate (book) {
        if(book.name.length <2 || book.author.length<2){
            return false;
        }
        else {
            return true;
        }
    }
    show (type,displaymessage) {
        let message=document.getElementById("message");
        message.innerHTML=
        `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${displaymessage} !!</strong>.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
    
        `
    }
}

let LibraryForm = document.getElementById("LibraryForm");
LibraryForm.addEventListener("submit", libraryformSubmitted);

function libraryformSubmitted(e) {
    console.log("submit");

    let bookname = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(bookname, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
       display.show("success","Thank You for entering");
    }
    else{
        display.show("danger","Please enter valid characters");
    }
    e.preventDefault();

}