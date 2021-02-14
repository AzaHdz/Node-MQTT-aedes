var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883'); //se conect al broker
var topic = 'test';
var message = 'Hello world';
//publica mensaje en el topic
client.on('connect',()=>{
  setInterval(()=>{
    client.publish(topic, message);
    console.log('Message Sent!',message);
}, 5000);
} );
