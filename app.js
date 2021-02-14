var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
//cliente se subscribe y publica en el topic "presence"
client.on('connect', function(){
  client.subscribe('presence', function(err){
    if(!err){
      client.publish('presence','Hello desde mi compu')
    }
  })
})

//mensaje entrante
client.on('message', function(topic, message){
  //message is Buffer
  console.log(message.toString());
  client.end();
})
