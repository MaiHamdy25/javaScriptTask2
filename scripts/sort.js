// Sort it in descending  and ascending orders
function sortValues() {
    let input = document.getElementById('values').value;
    let values = input.split(' ').map(Number);
    if (values.length !== 5 || values.some(isNaN)) {
        document.getElementById('output').innerHTML = "Error: Please enter exactly 5 numerical values with spaces.";
        return;
    }

    //descending
    let descending = [...values].sort((a, b) => b - a);
    //ascending 
    let ascending = [...values].sort((a, b) => a - b);

    document.getElementById('output').innerHTML = `
        u've entered the values of ${values.join(', ')}<br>
        ur values after being sorted descending ${descending.join(', ')}<br>
        ur values after being sorted ascending ${ascending.join(', ')}
    `;
    document.getElementById('output').style.color = "red";
}