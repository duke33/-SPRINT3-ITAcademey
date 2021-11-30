var amqp = require('amqplib');
class Publisher {

    constructor(connectionString, options = {}) {
        if (!connectionString) {
            throw new Error('Connection string is required')
        }
        if (!options.exchange) {
            throw new Error('Exchange required')
        }

        this.connectionString = connectionString

        this.options = Object.assign({
            type: 'fanout', //Esto hace que por defecto si no se pase una opcion, use fanout
            durable: false // Lo mismo vale para aca
        }, options)
    }

    async connect() {
        console.log('connecting to RabbitMQ')
        try {
            this.connection = await amqp.connect(this.connectionString)
            return this.connection
        } catch (error) {
            console.log('failed to connect')
        }
    }

    async start() {

        console.log('starting subscriber')
        this.connection = await this.connect()
        console.log('connection success')
        this.channel = await this.connection.createChannel()
        console.log('connected to channel')
        return await this.channel.assertExchange(this.options.exchange, this.options.type, { durable: this.options.durable })

    }
    async publish(message) {
        if (!this.channel) {
            throw new Error('Connection not found. Make sure you first call publisher.start')
        }
        console.log('\npublishing message')
        console.log(`exchange: ${this.options.exchange}`)
        console.log("\n [x] Sent %s", message);
        this.channel.publish(this.options.exchange, "", Buffer.from(message))

    }

}

let publisher = new Publisher('amqp://localhost', { type: "fanout", exchange: "logs", durable: false })
    // Le paso fanout solo para probar, pero no es necesario porque es el que usa por defecto si no se pasa el tipo de exchange, lo mismo para  durable 

//TODO agregar aca la duda que tenes

const makeItHappen = async() => {
    await publisher.start()
    publisher.publish("hola!")
    publisher.publish("IT-Academy!")

}
makeItHappen()