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

module.exports = User