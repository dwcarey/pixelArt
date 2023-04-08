const gridContainer = document.querySelector('.gridContainer');
const sideLength = 16;
const widthHeight = (516/sideLength);
console.log(widthHeight);

for (let i = sideLength; i>0; i--) {
    let gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare);

    for (let x = (sideLength); x>0; x--) {
        let gridSquareChild = document.createElement('div');
        gridSquareChild.className = "gridSquare gridSquareChild";
        gridSquareChild.style.width = (widthHeight-2)+'px';
        gridSquareChild.style.height = (widthHeight-2)+'px';
        gridSquare.appendChild(gridSquareChild);
    }
}

