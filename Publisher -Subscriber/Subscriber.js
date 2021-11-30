var amqp = require('amqplib');
class Subscriber {



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
        await this.channel.assertExchange(this.options.exchange, this.options.type, { durable: false }) //TODO aca va un return, y el resto tendria que ser otra funcion

        this.myQueue = await this.channel.assertQueue("", { exclusive: true })

        await this.channel.bindQueue(this.myQueue.queue, this.options.exchange, '') //TODO Error!!!!!!!!

        return this.channel.consume(this.myQueue.queue, function(msg) {
            if (msg.content) {
                console.log(" [x] %s", msg.content.toString());
            }
        }, {
            noAck: true
        })

    }



}


//TODO add error haddling

let subscriber = new Subscriber('amqp://localhost', { type: "fanout", exchange: "logs" })

//TODO ver si podes mejorar esto
const banana = async() => {
    await subscriber.start()
}
banana()


//publisher.publish()