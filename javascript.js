const gridContainer = document.querySelector('.gridContainer');
const clearButton = document.querySelector('.clearButton');
const colourButton = document.querySelectorAll('.colourButton');
const colourContainer = document.querySelector('.colourContainer');
const currentSelectionDisplay = document.querySelector('.currentSelection');
const sideLength = 16;
const widthHeight = (516/sideLength);
let mouseDown = false;
let currentSelection = "black";

for (let i = sideLength; i>0; i--) {
    let gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare);

    for (let x = (sideLength); x>0; x--) {
        let gridSquareChild = document.createElement('div');
        gridSquareChild.className = "gridSquare gridSquareChild";
        gridSquareChild.style.width = (widthHeight-2)+'px';
        gridSquareChild.style.height = (widthHeight-2)+'px';
        gridSquareChild.id = "gridSquareChild" + i +"-"+ x;
        gridSquare.appendChild(gridSquareChild);
    }
};

gridContainer.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('gridSquareChild')) {
      mouseDown = true;
      event.target.style.backgroundColor = currentSelection;
  
      gridContainer.addEventListener('mousemove', mousemoveHandler);
    }
  });
  
  gridContainer.addEventListener('mouseleave', function(event) {
    if (mouseDown) {
      mouseDown = false;
      gridContainer.removeEventListener('mousemove', mousemoveHandler);
    }
  });

  
  document.addEventListener('mouseup', function(event) {
    if (mouseDown) {
      mouseDown = false;
      gridContainer.removeEventListener('mousemove', mousemoveHandler);
    }
  });
  
  function mousemoveHandler(event) {
    if (event.target.classList.contains('gridSquareChild')) {
      event.target.style.backgroundColor = currentSelection;
    }
  }
  
  clearButton.addEventListener('click', function() {
    let squares = document.querySelectorAll('.gridSquareChild');
    squares.forEach(function(square) {
      square.style.backgroundColor = "white";
    });
  });
  
  colourContainer.addEventListener('click', function(event){
    if ((event.target.classList.contains('colourButton'))) {
      currentSelection = window.getComputedStyle(event.target).getPropertyValue("background-color");
      currentSelectionDisplay.style.backgroundColor = currentSelection;
      console.log(currentSelection);
    }
  })




