//MQTT subscriber
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883'); //se conect al broker
var topic = 'test';

//se subscribe al topic
client.on('connect', ()=>{
  client.subscribe(topic);
});
//si hay algun mensaje enviado por el broker lo muestra
client.on('message',(topic, message)=>{
  message = message.toString();
  console.log(message);
});
