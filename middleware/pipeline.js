/* eslint-disable no-unused-vars */
function pipe() {
    const stack = []

    //crea el stack de middleware
    const pushToStack = (...middlewares) => {
            stack.push(...middlewares)
        }
        // se puede hacer asyncrona aca, para este ejercicio da lo mismo.
    const execute = async(to_be_passed_through_pipe) => {

            const runner = (index) => {

                    const middleware = stack[index]

                    // el segundo argumento es la madre del borrego, la funcion next. Es importante que el ultimo middleware en la cadena NO llame a next, sino va a tirar un error "middleware is not a function" que aca no le estoy dando handling.
                    middleware(to_be_passed_through_pipe, () => {
                        return runner(index + 1)
                    })

                }
                //necesito ejecutarla aca para poder pasarle el valor inicial de 0
            await runner(0)
        }
        // devuelve las dos funciones en forma de objeto que quedan como valores del objeto pipeline y se pueden llamar con notacion de puntos
    return { pushToStack, execute }
}


//---------------------------------------------


module.exports = pipe