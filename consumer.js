const Amqplib = require('amqplib');
const conf = require('./configs');
const Queue = conf.queue;
var connection = null;
const RabbitConnection = Amqplib.connect(conf.server);

// Consumer
(async () => {
  try {
    connection = await RabbitConnection;
    let ch = await connection.createChannel();
    await ch.assertQueue(Queue.name);
    ch.consume(Queue.name, function(msg) {

      if (msg !== null) {
        console.log("\n\n");
        console.log(JSON.stringify(msg));
        console.log(msg.content.toString());

        if(Math.floor(Math.random() * 2)) {
          console.log('-- ACK --');
          ch.ack(msg);
        }
        else {
          console.log('-- NACK --');
          ch.nack(msg, false, true);
        }

      }

    });
  }
  catch(err){
    console.error(err);
  }
})();