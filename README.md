# SPRINT3-ITAcademey: Design Patterns 

# Part 1

Design patterns are solutions to recurring problems in software construction. There are a lot of software patterns cataloged, and in this sprint we will learn some of the most important ones in Node.js.
Use the node interpreter in all cases

## Level 1
### Callback Hell
The attachment reads a file located in an inbox directory and writes its inverted contents to another file in the outbox directory. Restructure and simplify existing code to avoid the so-called Callback Hell.

## Level 2
### Singleton
Build an application that creates multiple Players. Players can be added to a Game, which will show a score with the scores and the winner. The app must be able to add or subtract points to each player for the scoreboard to change. The Marker class must implement a Singleton pattern as a prerequisite.

## Level 3
### Observer
Write an application that creates different User objects. The application will be able to create different Themes and subscribe users to them. When a User adds a message to a Topic, a console alert will be sent from the Topic. Each of the Users who are subscribed to the Theme will also display it by console (they will receive the message). Create a Theme with one User and one with two and show the reception of messages by users. Use the events module.

# Part 2

Second part, a little more advanced and essential to learn how to build software properly. Use the node interpreter in all cases.

## Level 1
### Middleware
Create a small application in an initial file that adds, subtracts, and multiplies by receiving the parameters in a JSON
Create a class in an external file that stores middlewares (functions)
Inserts in the invocation middlewares that make the square, cube, and division between 2 of the initial operands in each of the operations. Invokes the executions of addition, subtraction and multiplication, so that the modifications that are being made to the values ​​before the final result are shown by the console

## Level 2
### Decorator
Create a Decorator in a file that returns a function. This function will convert currencies to euros by multiplying by the conversion rate of the attachment currency_conversions.json based on the original currency
Create a small application that calculates the cost of a few items in euros from your initial currency, applying different conversions using the Decorator from the previous point

## Level 3
### Publisher - Subscriber
Using RabbitMQ as a must create a queue where a Publisher class posts messages that are read by a Subscriber class. Displays the sending and receiving of each message on different consoles