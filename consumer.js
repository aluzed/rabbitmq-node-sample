const Amqplib = require('amqplib');
const conf = require('./configs');
const Queue = conf.queue;

const RabbitConnection = Amqplib.connect(conf.server);

// Consumer
RabbitConnection.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(Queue.name).then(function(ok) {
    return ch.consume(Queue.name, function(msg) {
      if (msg !== null) {
        console.log(JSON.stringify(msg));
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  });
}).catch(console.warn);
