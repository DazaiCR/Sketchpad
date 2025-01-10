let numOfCols = 16;
let gridLength = 620;
let gridLines = 1;  // means they're not hidden
let mouseDown = false;
let squares;
let circle = document.querySelector(".circle");
let gridSizeLabel = document.querySelector(".grid-size-label");
let gridSizeInput = document.querySelector("#grid-size-input");
let gridLinesButton = document.querySelector(".grid-lines");
let clearButton = document.querySelector(".clear");
let exclusives = document.querySelectorAll(".exclusive");
let colorButton = document.querySelector(".color-mode");
let randomButton = document.querySelector(".random-mode");
let shadowButton = document.querySelector(".shadow");
let eraserButton = document.querySelector(".eraser");
let grid = document.querySelector(".grid");

function createDiv() {
    const gridDiv = document.createElement("div");
    gridDiv.className = "square";
    return gridDiv;
}

function fillGrid() {
    const grid = document.querySelector(".grid");
    grid.replaceChildren();

    for (let i = 0; i < numOfCols*numOfCols; i++) {
      grid.appendChild(createDiv());
    }
}

fillGrid();

circle.addEventListener("input", () => {
    let inputVal = circle.value;
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
    if(!gridLines){
        squares.forEach(square => square.classList.add("no-borders"));
    }
});

exclusives.forEach( (exclusive) => {
    exclusive.addEventListener("click", (event) => {
        exclusives.forEach((exclusive) => {
            if(event.target === exclusive){
                exclusive.classList.toggle("exclusive-onclick");
            }
            else {
                exclusive.classList.remove("exclusive-onclick");
            }
        });
    });
});

grid.addEventListener("mousedown", (event) => {
    if(event.target.classList.contains("square")){
        mouseDown = true;
        colorSquare(event.target);
    }
});

grid.addEventListener("mouseup", () => {
    mouseDown = false;
});

grid.addEventListener("mouseover", (event) => {
    if(mouseDown && event.target.classList.contains("square")){
        colorSquare(event.target);
    }
});

function colorSquare(target) {
    let color;
    if(window.getComputedStyle(colorButton).color != "rgb(255, 255, 255)"){
        color = circle.value;
        target.style.opacity = 1;
        target.style.backgroundColor = color;
    }
    else if(window.getComputedStyle(randomButton).color != "rgb(255, 255, 255)"){
        color = getRandomColor();
        target.style.opacity = 1;
        target.style.backgroundColor = color;
    }
    else if(window.getComputedStyle(eraserButton).color != "rgb(255, 255, 255)"){
        color = "black";
        target.style.opacity = 1;
        target.style.backgroundColor = color;
    }
    else if(window.getComputedStyle(shadowButton).color != "rgb(255, 255, 255)"){       
        const color = "white";
        let opacity = parseFloat(target.style.opacity) || 0;
    
        if (opacity < 1)
            opacity += 0.1;
        else if(opacity == 1)
            opacity = 0.1;

        target.style.backgroundColor = color;
        target.style.opacity = opacity;
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}