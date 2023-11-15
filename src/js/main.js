import "../css/book.css";
import { createHtmlBook } from "./htmlHelpers";
import { Book } from "./models/Book";

const bok1 = new Book("Jag har testat allt", "David Haroun", 2023);
const bok2 = new Book("Ödet och hoppet", " Niklas Natt och Dag", 2022);
const bok3 = new Book("Lille prinsen", "Antoine de Saint-Exupéry", 1977);

const books = [bok1, bok2, bok3];

for (let i = 0; i < books.length; i++) {
  createHtmlBook(books[i]);
}
