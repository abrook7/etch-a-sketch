const gridArea = document.querySelector(".container");
const button = document.querySelector("button");

createGrid();

button.addEventListener("click", changeSize);

function changeSize() {
  const size = prompt("What number of grid squares per side would you like?");
  return createGrid(size);
}

function createGrid(size = 16) {
  if (size > 100) {
    return "ERROR GRID TOO LARGE";
  } else {
    for (i = 0; i < size ** 2; i++) {
      let box = document.createElement("div");
      box.setAttribute(
        "style",
        `border: 1px solid black; height:${38}px; width:${38}px;`
      );
      gridArea.appendChild(box);
    }
  }
}
