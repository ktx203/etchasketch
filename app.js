const containerDiv = document.querySelector('.container');
const clearBtnEl = document.getElementById('clearBtn');
//run
makeGrid();
//functions 
//make the grid
function makeGrid() {
    let number =  10;
    containerDiv.innerHTML =  "";
    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        containerDiv.appendChild(row);
        for (let j = 0; j < 10; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
}

