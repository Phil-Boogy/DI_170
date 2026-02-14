// const tova = document.createElement('li');
// tova.innerText = 'Tova';
// ulDom.appendChild(tova);

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

// function insertRow() {
//     row = document.getElementById('sampleTable');
//     row.createElement('Tr');
// }
function insertRow() {
    const table = document.getElementById("sampleTable");
    const rowCount = table.rows.length;

    table.innerHTML += `
        <tr>
            <td>Row${rowCount + 1} cell1</td>
            <td>Row${rowCount + 1} cell2</td>
        </tr>
    `;
}

