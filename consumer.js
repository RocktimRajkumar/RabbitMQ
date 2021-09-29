const amqp = require('amqplib')

const msg = { number: 23 }
connect()
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const res = JSON.parse(message.content.toString());
            console.log(`Received job with input ${res.number}`);
            if (res.number == 7)
                channel.ack(message)
        });

        console.log("Waiting for messages....");
    }
    catch (ex) {
        console.error(ex)
    }
}