let gridDivs = [];
let numOfCols = 16;
let gridLength = 620;
let gridLines = 1;  // means they're not hidden
let squares;
let circle = document.querySelector(".circle");
let gridSizeLabel = document.querySelector(".grid-size-label");
let gridSizeInput = document.querySelector("#grid-size-input");
let gridLinesButton = document.querySelector(".grid-lines");
let clearButton = document.querySelector(".clear");

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "square";
    return gridDiv;
}

function fillGrid() {
    const grid = document.querySelector(".grid");
    gridDivs = [];
    grid.replaceChildren();

    for (let i = 0; i < numOfCols*numOfCols; i++) {
      gridDivs.push(createDiv());
      grid.appendChild(gridDivs[i]);
    }
}

fillGrid();

circle.addEventListener("input", () => {
    let inputVal = circle.value;
    inputVal = circle.value;
    circle.style.boxShadow = `0 0 8px ${inputVal}`;
});

gridSizeInput.addEventListener("input", () => {
    let inputSize = gridSizeInput.value;
    numOfCols = inputSize;
    gridSizeLabel.textContent = `${inputSize}x${inputSize}`;
});

gridSizeInput.addEventListener("change", () => {
    let squareLength = gridLength / numOfCols;
    fillGrid();
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.height = `${squareLength}px`;
        square.style.width = `${squareLength}px`;
    });
    if (!gridLines) {
        squares.forEach(square => square.classList.add("no-borders"));
    }
});

gridLinesButton.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.toggle("no-borders"));
    gridLines = (gridLines == 1) ? 0 : 1;
});

clearButton.addEventListener("click", () => {
    let squareLength = gridLength / numOfCols;
    fillGrid();
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.height = `${squareLength}px`;
        square.style.width = `${squareLength}px`;
    });
    if (!gridLines) {
        squares.forEach(square => square.classList.add("no-borders"));
    }
});