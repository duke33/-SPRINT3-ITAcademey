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
            durable: false
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
        this.channel = await this.connection.createChannel()
        console.log('connected to channel')

        console.log(`asserting exchange ${this.options.exchange}`)
        await this.channel.assertExchange(this.options.exchange, this.options.type, { durable: this.options.durable })

        console.log("asserting queue")
        this.myQueue = await this.channel.assertQueue("", { exclusive: true })
        await this.channel.bindQueue(this.myQueue.queue, this.options.exchange, '')
        console.log('queue binded')

        return this.channel.consume(this.myQueue.queue, function(msg) {
            if (msg.content) {
                console.log("\n [x] %s", msg.content.toString());
            }
        }, {
            noAck: true
        })
    }
}

let subscriber = new Subscriber('amqp://localhost', { type: "fanout", durable: false, exchange: "logs" })

//TODO ver si podes mejorar esto
const makeItHappen = async() => {
    await subscriber.start()
}
makeItHappen()

//publisher.publish()