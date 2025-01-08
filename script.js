let gridDivs = [];
let numOfCols = 16;
let gridLength = 620;
let gridSizeInput = document.querySelector("#grid-size-input");
let squares;

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

function setUpColorInputShadowColor() {
    let circle = document.querySelector(".circle");
    let inputVal = circle.value;

    circle.addEventListener("input", () => {
        inputVal = circle.value;
        circle.style.boxShadow = `0 0 8px ${inputVal}`;
    });
}

function setUpGridSizeValue() {
    let gridSizeLabel = document.querySelector(".grid-size-label");
    let inputSize = gridSizeInput.value;

    gridSizeInput.addEventListener("input", () => {
        inputSize = gridSizeInput.value;
        numOfCols = inputSize;
        gridSizeLabel.textContent = `${inputSize}x${inputSize}`;
    });
}

gridSizeInput.addEventListener("change", () => {
    let squareLength = gridLength / numOfCols;
    fillGrid();
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.height = `${squareLength}px`;
        square.style.width = `${squareLength}px`;
    });
})

fillGrid();
setUpColorInputShadowColor();
setUpGridSizeValue();