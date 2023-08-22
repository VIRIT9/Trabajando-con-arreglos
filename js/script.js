// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  //Filtra los elementos de tipo string y los ordena alfabeticamente sin importar si estan en mayusculas o minusculas
  const strings = array.filter((element) => typeof element ==="string");
  strings.sort((a, b) =>
  a.toLowerCase() > b.toLowerCase() ? 1 :
  a.toLowerCase() < b.toLowerCase() ? -1:
  0
);

  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  strings.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// Muestra el array 
document.addEventListener("DOMContentLoaded", (e) => {
  
  showList(strangeArray);
  
});
