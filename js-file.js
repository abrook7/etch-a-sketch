const gridArea = document.querySelector(".container");
const button = document.querySelector(".grid");
const reset = document.querySelector("#reset");
let size;

createGrid();

button.addEventListener("click", changeSize);
reset.addEventListener("click", () => {
  toRemove();
  createGrid(size);
});

function changeSize() {
  size = prompt("What number of grid squares per side would you like?");
  toRemove();
  return createGrid(size);
}

function toRemove() {
  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }
}

function createGrid(size = 16) {
  if (size > 100) {
    return "ERROR GRID TOO LARGE";
  } else {
    for (i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.setAttribute(
        "style",
        "display: flex; flex-direction: column; flex: 1 1 auto"
      );
      gridArea.appendChild(row);
      for (j = 0; j < size; j++) {
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", `border: 1px solid black; flex: 1 1 auto`);
        row.appendChild(box);
      }
    }
  }
  let sketch = document.querySelectorAll(".box");
  sketch.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.classList.add("dark");
    });
  });
}
