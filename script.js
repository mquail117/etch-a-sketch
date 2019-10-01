function resetGrid() {
    var gridContainer = document.querySelector('#grid-container');
    var size = document.querySelector('#size').value
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    var gridAttribute = '';
    for (var i = 1; i <= size; i++) {
        gridAttribute += 'auto ';
    }
    size2 = size*size;
    for (var i = 1; i <= size2; i++) {
        var div = document.createElement('div');
        if (1 <=i & i <= size) {
            div.classList += " top";
        }
        if (i % size == 1) {
            div.classList += " left";
        }
        if (i % size == 0) {
            div.classList += " right";
        }
        if ((size2 - size + 1) <= i & i <= size2) {
            div.classList += " bottom";
        }
        div.addEventListener('mouseover', darken)
        gridContainer.appendChild(div);
    }
    gridContainer.setAttribute('style', 'display:grid; grid-template-columns:' + gridAttribute)
}
function darken() {
    event.currentTarget.className = 'dark';
}
var reset = document.querySelector('#reset')
reset.addEventListener('click', resetGrid);