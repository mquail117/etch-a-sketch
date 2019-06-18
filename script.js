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
    size = size*size;
    for (var i = 1; i <= size; i++) {
        var div = document.createElement('div');
        div.addEventListener('mouseover', darken)
        //div.innerHTML = i;
        gridContainer.appendChild(div);
    }
    gridContainer.setAttribute('style', 'display:grid; grid-template-columns:' + gridAttribute)
}
function darken() {
    event.currentTarget.className = 'dark';
}
var reset = document.querySelector('#reset')
reset.addEventListener('click', resetGrid);