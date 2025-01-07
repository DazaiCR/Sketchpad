const myDivs = [];
let numOfCols = 16;

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "square";
    return gridDiv;
}

function fillGrid() {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < numOfCols*numOfCols; i++) {
      myDivs.push(createDiv());
      grid.appendChild(myDivs[i]);
    }
}

fillGrid();