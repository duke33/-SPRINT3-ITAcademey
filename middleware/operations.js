//Crea en un archivo inicial una pequeña aplicación que sume, reste y multiplique recibiendo los parámetros en un JSON

const addition = (a, b) => {
    const result = a + b
    console.log('result: ', result)
    return result
}



const subtraction = (a, b) => {
    const result = a - b
    console.log('result: ', result)
    return result
}

const multiplication = (a, b) => {
    const result = a * b
    console.log('result: ', result)
    return result
}

module.exports = { addition, subtraction, multiplication }