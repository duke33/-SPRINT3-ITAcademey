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
            type: 'fanout', //probando default
        }, options)
    }

    async connect() {
        console.log('connecting to RabbitMQ')
            //TODO ponerle catch method
        try {
            this.connection = await amqp.connect(this.connectionString)
            return this.connection
        } catch (error) {
            console.log('failed to connect')
        }
    }

    async start() {

        this.connection = await this.connect()
        this.channel = await this.connection.createChannel()
            // var durable = false
        return await this.channel.assertExchange(this.options.exchange, this.options.type, { durable: false }) //TODO aca va un return, y el resto tendria que ser otra funcion

    }
    async publish(message) {
        console.log('llega?????')
        console.log("channel", this.channel)

        //TODO de aca para abajo, podria ser otro metodo como publish
        console.log(" [x] Sent %s", message);
        this.channel.publish(this.options.exchange, "", new Buffer(message))

    }


}


//TODO add error haddling

let publisher = new Publisher('amqp://localhost', { type: "fanout", exchange: "logs" })

const banana = async() => {
    await publisher.start()
    publisher.publish("hola!")
    publisher.publish("IT-Academy!")


}
banana()


//publisher.publish()