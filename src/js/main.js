import "../css/style.css";
import { CPets } from "./models/CPets";

const siri = new CPets("Siri", "Cat", 3, "brown");
const sam = new CPets("Sam", "Cat", 3, "Black & White");
const gazette = new CPets("Gazette", "Horse", 13, "Yellowblack");
const rebus = new CPets("Rebus", "Horse", 9, "brown");

let petsList = [siri, sam, gazette, rebus];
console.log(petsList);

const divTag = document.createElement("div");
document.body.appendChild(divTag);

for (let i = 0; i < petsList.length; i++) {
  const container = document.createElement("div");
  const nameTitle = document.createElement("h2");
  nameTitle.innerHTML = petsList[i].name;

  container.appendChild(nameTitle);
  divTag.appendChild(container);
}
