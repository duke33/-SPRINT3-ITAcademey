/* eslint-disable no-unused-vars */
const middleware = require("./middleware");
const values = require("./values.json")
const { addition, subtraction, multiplication } = require("./operations")
const request = {}
// create a middleware pipeline
const app = middleware()


app.use((request, next) => {
        request.user = "Add user property to reques object and pass it a token value"
        console.log("First middleware output: ", (addition(values[0].a, values[0].b)) ** 2)
        next()
    })

app.use((request, next) => {

        console.log("Second middleware output: ", (subtraction(values[1].a, values[1].b)) ** 3)
        next()
    })
app.use((request, next) => {
    if (request.user){console.log('user authenticated')}
        console.log("Third and final middleware output: ", (multiplication(values[2].a, values[2].b)) ** 2)
            //not calling next because it is the last middleware on the stack
    })




//Will execute all the middlewares added to pipeline, with "Needles" as the context   
app.execute(request)