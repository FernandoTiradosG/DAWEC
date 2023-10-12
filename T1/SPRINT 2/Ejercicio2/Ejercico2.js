document.getElementById('do').addEventListener('click', function() {
    document.getElementById('result').value = area(value1, value2);
});


function area() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const calculo = value1 * value2;
    return calculo
}