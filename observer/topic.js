const EventEmitter = require('events');

class Topic extends EventEmitter {
    constructor(topicName) {
        super();
        this.messageBoard = ["No messages"];
        this.topicName = topicName
        this.eventName = "New Message"

    }

    addMessageToBoard(message, messageOwner) {
        console.log(
            `A new message has been added to the topic "${this.topicName}"`)
        console.log('------------------------------------------------------')
        this.messageBoard.push(message)
        this.emit(this.eventName, message, messageOwner)
        console.log('------------------------------------------------------')
    }
    subscribeUser(user) {
        this.on(this.eventName, (message, messageOwner) => {
            user.handleEvent(message, messageOwner);
        });

    }

}

module.exports = Topic