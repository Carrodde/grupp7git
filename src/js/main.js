import "../css/style.css";
import { CPets } from "./models/CPets";

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
