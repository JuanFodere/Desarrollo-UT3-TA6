function convertToCelcius(fharenheit){
    let cel = (5/9)*(fharenheit -32)
    let redondeado = cel.toFixed(1)
    console.log(redondeado)
}

convertToCelcius(100)

function convertToFharenheit(celcius){
    let far = (celcius *(9/5)) + 32
    let redondeado2 = far.toFixed(1)
    console.log(redondeado2)
}

convertToFharenheit(100)