// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

    // bookList.push(bookName);
    return bookList.concat([bookName]);

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

        return bookList.slice(0, book_index).concat(bookList.slice(book_index + 1));

        // Change code above this line
    }
}