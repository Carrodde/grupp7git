/* import "../css/style.css"; */
import { CPets } from "./models/CPets";
import "../css/book.css";
import { createHtmlBook } from "./htmlHelpers";
import { Book } from "./models/Book";

const siri = new CPets("Siri", "Cat", 3, "brown");
const sam = new CPets("Sam", "Cat", 3, "Black & White");
const gazette = new CPets("Gazette", "Horse", 13, "Yellowblack");
const rebus = new CPets("Rebus", "Horse", 9, "brown");

let petsList = [siri, sam, gazette, rebus];
console.log(petsList);

const divTag = document.getElementById("app");
document.body.appendChild(divTag);

for (let i = 0; i < petsList.length; i++) {
  const container = document.createElement("div");
  const nameTitle = document.createElement("h2");
  nameTitle.innerHTML = petsList[i].name;
  const infoSpec = document.createElement("p");
  infoSpec.innerHTML = petsList[i].species;
  const infoAge = document.createElement("p");
  infoAge.innerHTML = petsList[i].age;
  const infoColor = document.createElement("p");
  infoColor.innerHTML = petsList[i].color;

  container.appendChild(nameTitle);
  container.appendChild(infoSpec);
  container.appendChild(infoAge);
  container.appendChild(infoColor);
  divTag.appendChild(container);
  container.className = "box";
}

const bok1 = new Book("Jag har testat allt", "David Haroun", 2023);
const bok2 = new Book("Ödet och hoppet", " Niklas Natt och Dag", 2022);
const bok3 = new Book("Lille prinsen", "Antoine de Saint-Exupéry", 1977);

const books = [bok1, bok2, bok3];

for (let i = 0; i < books.length; i++) {
  createHtmlBook(books[i]);
}

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * data.results.length);

      const rickContainer = document.createElement("div");
      rickContainer.className = "rickContainer";
      const nameTag = document.createElement("h1");
      const locationTag = document.createElement("h3");
      const speciesTag = document.createElement("h3");

      const image = document.createElement("img");

      nameTag.innerHTML = data.results[randomNumber].name;
      locationTag.innerHTML =
        "Location: " + data.results[randomNumber].location.name;
      speciesTag.innerHTML = "Species: " + data.results[randomNumber].species;
      image.src = data.results[randomNumber].image;

      rickContainer.appendChild(nameTag);
      rickContainer.appendChild(locationTag);
      rickContainer.appendChild(speciesTag);
      rickContainer.appendChild(image);
      document.body.appendChild(rickContainer);
    }
  });
