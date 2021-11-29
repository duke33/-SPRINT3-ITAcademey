var amqp = require('amqplib');
class Publisher {



    constructor(connectionString, options = {}) {
        if (!connectionString) {
            throw new Error('Connection string is required')
        }
        if (!options.exchange) {
            throw new Error('Exchange required')
        }

        this.channel = null
        this.connectionString = connectionString


        this.options = Object.assign({
            type: 'fanout', //probando default
        }, options)
    }

    async connect() {
        console.log('connecting to RabbitMQ')
            //TODO ponerle catch method
        try {
            const connection = await amqp.connect(this.connectionString)
            return connection
        } catch (error) {
            console.log('failed to connect')
        }
    }

    async start() {

        const connection = await this.connect()

        this.channel = await connection.createChannel()
            // var durable = false
        await this.channel.assertExchange(this.options.exchange, this.options.type, { durable: false }) //TODO aca va un return, y el resto tendria que ser otra funcion



        //TODO de aca para abajo, podria ser otro metodo como publish
        const message = "IT-Academy!"
        console.log(" [x] Sent %s", message);
        return this.channel.publish(this.options.exchange, "", new Buffer(message))

    }


}


//TODO add error haddling

let publisher = new Publisher('amqp://localhost', { type: "fanout", exchange: "logs" })

publisher.start()