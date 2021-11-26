/* eslint-disable no-unused-vars */
const pipe = require("./pipeline");
const values = require("./values.json")
const { addition, subtraction, multiplication } = require("./operations")

// create a middleware pipeline
const pipeline = pipe()

//Omar, la parte que viene ahora no se si esta bien interpretada del enunciado. En este caso, estoy haciendo uso de la llamada al siguiente middleware en la cadena, con next. Pero no estoy haciendo nada para pasar un valor a traves de toda la pipeline, modificandolo o usandolo con cada middleware y enviandolo al siguiente, que entiendo yo, es el motivo por el que existen los middlewares. Tuve que agregar la variable context que va a ser undefined para que no pete todo, porque la signature de la pipe requiere ese argumento.

// add middlewares to the pipeline
pipeline.pushToStack(
    (context, next) => {
        console.log("First middleware output: ", (addition(values[0].a, values[0].b)) ** 2)
        next()
    },
    (context, next) => {
        console.log("Second middleware output: ", (subtraction(values[1].a, values[1].b)) ** 3)
        next()
    },
    (context, next) => {
        console.log("Third and final middleware output: ", (multiplication(values[2].a, values[2].b)) ** 2)
            //not calling next because it is the last middleware on the stack
    }
)

pipeline.execute()