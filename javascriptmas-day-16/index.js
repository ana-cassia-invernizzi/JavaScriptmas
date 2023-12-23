const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");

let sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function getRandomName() {
  const names = ["John", "Jane", "Michael", "Sarah", "Chris", "Emily"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function updateLists() {
  sorteesArr.push({
    name: getRandomName(),
    hasBeenGood: Math.random() < 0.5, // Define aleatoriamente se foi bom ou não
  });

  niceList.innerHTML = "";
  naughtyList.innerHTML = "";

  const nicePeople = sorteesArr.filter((person) => person.hasBeenGood);
  const naughtyPeople = sorteesArr.filter((person) => !person.hasBeenGood);

  nicePeople.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    niceList.appendChild(listItem);
  });

  naughtyPeople.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    naughtyList.appendChild(listItem);
  });

}

updateLists();

btn.addEventListener("click", updateLists);





