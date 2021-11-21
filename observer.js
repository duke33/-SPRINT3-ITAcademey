const EventEmitter = require('events');

class User {
    constructor(name) {
        this.name = name
    }

    // Methods
    newMessage(topic, message) {
        topic.addMessageToBoard(message) //TODO mas adelante le podrias agregar el usuario que lo crea, para descontarlo de los que van a ser notificados
    }

    subscribeToTopic( /*topic*/ ) {} //esto tiene que llamar a la funcion register

    handleEvent(arg) { // ESTA FUNCION TIENE EL NOMBRE, pero no las propiedades que deberia tener
        console.log(`${this.name} received this message:
                     ${arg}`); // Prints 'foo'
    }

    //necesito un metodo que se llame update para cuando reciba informacion nueva!

}

//-------------------------------------------------------------

class Topic extends EventEmitter { //TODO topic tiene mensajes, talvez un array sera, los mensajes van aumentando
    eventName = "Event name"
    constructor() {
            super();
            this.messageBoard = ["hola"]; //TODO esto asi funciona, pero quiesiera que fuera un instance field, o field


        }
        // el metodo subscribir usuario es el que agrega los observers con ON

    //METHODS
    addMessageToBoard(message) {
        this.messageBoard.push(message) //Aca tiene que ir el emmit!!!!

        this.emit(this.eventName, message) //TODO sacar el "Event name" hardcoded y ponerlo como una variable de la clase!
    }
    subscribeUser(user) { //Se hace con esto Event: 'newListener' de https://nodejs.org/api/events.html#eventtarget-and-event-api
        // Insert a new listener in front
        this.on(this.eventName, (arg) => {
            user.handleEvent(arg);
        });


    }

}


//-------------------------------------------------------------------

const user1 = new User("Jose")
const user2 = new User("Hernan") // deberian ser extensiones de Class: EventTarget??????????
const user3 = new User("Maria")


const learningBackendEMITTER = new Topic()

learningBackendEMITTER.subscribeUser(user3)
learningBackendEMITTER.subscribeUser(user2)
learningBackendEMITTER.subscribeUser(user1)


//learningBackendEMITTER.on("Event name", () => { console.log('Enterado!!!') }) //The NodeEventTarget supports EventListener objects as well as functions as handlers for all event types. objects with a handleEvent property 


learningBackendEMITTER.on("Event name", () => {})

console.log('listener count::::', learningBackendEMITTER.listenerCount("Event name"))

user1.newMessage(learningBackendEMITTER, "El ejercicio de Observer esta completado!!")






//La aplicación podrá crear diferentes Temas y suscribir a los usuarios a ellos. 

//Cuando un Usuario añada un mensaje a un Tema se enviará una alerta por la consola desde el Tema. 

//También lo mostrarán por consola cada uno de los Usuarios que estén suscritos al Tema (recibirán el mensaje). 

//Crea un Tema con un Usuario y otro con dos y muestra la recepción de los mensajes por los usuarios. Utiliza el módulo  evento.

//Create a Topic with one User and one with two and show the reception of messages by users. Use the events module.