## Rabbit Mq Sample with Node JS

# We use Amqplib and no wrapper

Erlang and Rabbit MQ should be installed on your device.

# CLI

1 - Get container name

```
sudo docker container ls
```

2 - exec bash

```
sudo docker exec -it rabbitmq_rabbitmq_1 /bin/bash
```

3 - Enable rabbitmq management plugin

```
rabbitmq-plugins enable rabbitmq_management
```

4 - Use rabitmqadmin

```
rabbitmqadmin -H 127.0.0.1 -u admin -p admin list vhosts
```


