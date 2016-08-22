var nats = require('nats'),
    nsc = require('../');

describe('Example spec', function() {
  var server;  
  var client;  
  var busPort = Math.floor(Math.random() * 6000 + 2000);
  var busAddress = 'nats://localhost:' + busPort;

  beforeEach(function(done) {
    function createClient() {
      client = nats.connect(busAddress)
        .on('error', done.fail)
        .on('connect', done);
    }

    nsc.startServer(busPort)
      .then(function(oServer) { server = oServer; })
      .then(createClient)
      .catch(done.fail);
  });

  afterEach(function() {     
    if(server) {
      server.kill();      
    }
  });

  it('should publish and subscribe', function(done) {              
    client.subscribe('foo', function(msg) {
      console.log('Received a message: ' + msg);
      done();
    });

    client.publish('foo', 'Hello World!');
  });

});