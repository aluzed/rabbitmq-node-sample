module.exports = {
  server: {
    host: 'localhost',
    username: 'admin',
    password: 'admin',
    port: '5672',
    vhost: '/'
  },
  exchange: {
    name:'test_exchange',
    mode:'fanout',
    opts: {
      durable: true
    }
  },
  queue: {
    name: 'test_queue'
  },
  key: 'worker'
};
