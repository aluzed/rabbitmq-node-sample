const Amqplib = require('amqplib');
const conf = require('./configs');
const Exchange = conf.exchange;
const Queue = conf.queue;

const RabbitConnection = Amqplib.connect(conf.server);

// Publisher
RabbitConnection.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertExchange(Exchange.name, Exchange.mode, Exchange.opts).then(() => {
    ch.publish(Exchange.name, conf.key, new Buffer('Message...'));
    console.log('message sent');
    return;
  });
}).catch(console.warn);
