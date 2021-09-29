# RabbitMQ Implementation in JavaScript
In this POC I will first spin up a RabbitMQ server as docker container, after that i will  write some code to develop a publisher client that post messages to RabbitMQ. and finally We will also write the consumer piece which will be the code that reads rabbitMQ messages.

</br>

## Setting Up RabitMQ

**docker commands**

Spin rabbitmq server docker

    docker run --name rabbitmq -p 5672:5672 -d rabbitmq

Spin rabbitmq server HTTP server docker

    docker run --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:3-management

### Access RabbitMQ in javascript

    HTTP fetch("http://localhost:15672/api/vhosts”, {headers: {"Authorization" : Basic ${btoa('guest:guest')}}}).then(a=>a.json()).then(console.log)

</br>

    fetch("http://localhost:15672/api/channels", {headers: {"Authorization" : Basic ${btoa('guest:guest')}}}).then(a=>a.json()).then(console.log)

</br>

    fetch("http://localhost:15672/api/queues", {headers: {"Authorization" : Basic ${btoa('guest:guest')}}}).then(a=>a.json()).then(console.log)


## Dependency
Install Advanced Messaging Queuing Protocol Library to access RabbitMQ

> npm install amqplib

## RUN

Publish Message
> npm run publish 23

Consume Message
> npm run consume