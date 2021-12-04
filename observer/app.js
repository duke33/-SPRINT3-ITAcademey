const User = require('./user.js');
const Topic = require('./topic.js');

//Create users
const user1 = new User("Jose")
const user2 = new User("Hernan")
const user3 = new User("Maria")
const user4 = new User("Ernestina")

//Create topics
const itAcademyModule3 = new Topic("IT academy module 3 forum")
const softSkills = new Topic("Soft Skills")

//Subscribe users to topics
itAcademyModule3.subscribeUser(user3)
itAcademyModule3.subscribeUser(user2)
softSkills.subscribeUser(user4)

//Send messages
user1.newMessage(itAcademyModule3, "The forum is available for doubts about module 3")
user1.newMessage(softSkills, "Don't forget to take your lessons on Fridays!")