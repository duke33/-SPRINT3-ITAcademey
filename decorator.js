//Crea un Decorator en un archivo que devuelva una función. Esta función realizará una conversión de moneda a euros multiplicando por el coeficiente de conversión del archivo adjunto currency_conversions.json  en función de la divisa original


//Creo que hay un millon de formas de hacerlo, aca explico el razonamiento de la mia. Tengo una funcion simple (applyFactor) que hace una multiplicacion de dos factores. Quiero extender la funcionalidad para que haga una conversion de precios desde distintas monedas a euros, y para lograr esto voy a hacerlo con un decorator. Otro decorator podria por ejemplo, extender la funcionalidad para calcular los impuestos de un producto. Como el caso es sencillo, la implementacion del decorator solo requiere una funcion dentro de otra funcion. 



const conversions = require('./currency_conversions.json')

let applyFactor = (price, factor) => {
    return price * factor
}

let currencyToEuroDecorator = (apply, currencyAcronym, price) => {
    const conversionFactorValue = conversions[currencyAcronym.concat("_EUR")]
    return apply(price, conversionFactorValue)

}



//------------------------------------------------------------------------------------

//Crea una pequeña aplicación que calcule el coste de varios Artículos en euros a partir de sus divisas inciales, aplicando diferentes conversiones que usen el Decorator del punto anterior.

//Esta aplicacion lo que hace es recibir un array de objetos que tienen nombre del producto, precio y moneda en la que esta expresada el precio. Convierte todos los precios de los productos a euros, devolviendo el un nuevo array igual an anterior que ahora demas contiene el precio en euros como ultima key:value pair para cada producto.

//Como la funcion va a depender totalmente del formato en que se pasen los productos, precios y monedas, es lo primero que voy a definir.

const priceListToBeConvertedToEuro = [
    { productName: "bananas", price: 2, currencyAcronym: "GBP" },
    { productName: "pears", price: 3, currencyAcronym: "CHF" },
    { productName: "strawberry", price: 10, currencyAcronym: "CAD" },
    { productName: "watermelon", price: 7, currencyAcronym: "CNY" }

]


let convertListOfPricesToEuro = (listOfPrices) => {
    const listOfPricesInEU = listOfPrices.map(v => ({...v, priceInEU: currencyToEuroDecorator(applyFactor, v.currencyAcronym, v.price) }))
    return listOfPricesInEU
}

console.log('---------------------')
    //El array de productos que ahora incorpora los precioes en euros:
console.log(convertListOfPricesToEuro(priceListToBeConvertedToEuro))