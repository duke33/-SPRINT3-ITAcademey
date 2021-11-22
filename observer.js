const EventEmitter = require('events');

class User {
    constructor(name) {
        this.name = name
    }

    newMessage(topic, message) {
        topic.addMessageToBoard(message, this.name)
    }

    handleEvent(message, messageOwner) {
        console.log(`${this.name} received this message: ${message}
Sent by : ${messageOwner} `);
    }

}

//-------------------------------------------------------------

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
    }
    subscribeUser(user) {
        this.on(this.eventName, (message, messageOwner) => {
            user.handleEvent(message, messageOwner);
        });

    }

}

//-------------------------------------------------------------------

const user1 = new User("Jose")
const user2 = new User("Hernan")
const user3 = new User("Maria")
const user4 = new User("Ernestina")

const itAcademyModule3 = new Topic("IT academy module 3 forum")
const softSkills = new Topic("Soft Skills")

itAcademyModule3.subscribeUser(user3)
itAcademyModule3.subscribeUser(user2)
softSkills.subscribeUser(user4)

user1.newMessage(itAcademyModule3, "The forum is available for doubts about module 3")
user1.newMessage(softSkills, "Don't forget to take your lessons on Fridays!")