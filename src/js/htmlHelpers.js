export function createHtmlBook(book) {
  const bookContainer = document.createElement("div");
  const bookName = document.createElement("h3");
  const bookAutor = document.createElement("h5");
  const bookYear = document.createElement("h6");

  bookContainer.className = "container";
  bookName.className = "title";
  bookAutor.className = "autors";
  bookYear.className = "years";

  bookName.innerHTML = book.name;
  bookAutor.innerHTML = book.author;
  bookYear.innerHTML = book.year;

  bookContainer.appendChild(bookName);
  bookContainer.appendChild(bookAutor);
  bookContainer.appendChild(bookYear);
  document.body.appendChild(bookContainer);
}
