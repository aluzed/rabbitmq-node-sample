const Amqplib = require('amqplib');
const conf = require('./configs');
const Exchange = conf.exchange;
const Queue = conf.queue;
var connection = null;

const RabbitConnection = Amqplib.connect(conf.server);

// Publisher
(async () => {
  try {
    connection = await RabbitConnection;
    let ch = await connection.createChannel();
    await ch.assertExchange(Exchange.name, Exchange.mode, Exchange.opts);

    // setInterval(() => {
    //   ch.publish(
    //     Exchange.name, 
    //     conf.key, 
    //     new Buffer(
    //       'Message ' + 
    //       Math.floor((1 + Math.random()) * 0x10000)
    //       .toString(16)
    //       .substring(1)
    //     )
    //   );
    //   console.log("\n\nmessage sent");
    // }, 500);

    ch.publish(
      Exchange.name, 
      conf.key, 
      new Buffer(
        'Message ' + 
        Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
      ),
      function(err) {
        console.log('err', err);
      }
    );
    console.log("\n\nmessage sent");
  }
  catch(err) {
    console.error(err);
  }

})()
