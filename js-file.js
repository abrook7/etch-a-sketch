const gridArea = document.querySelector(".container");
let grid = [];

for (i = 0; i < 256; i++) {
  let box = document.createElement("div");
  box.setAttribute(
    "style",
    "border: 1px solid black; height:38px; width:38px;"
  );
  gridArea.appendChild(box);
  console.log(gridArea);
}
