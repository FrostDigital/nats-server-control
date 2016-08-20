var nsc = require('../');

describe('NATS server control', function() {
  var server;
    
  it('should start and stop gnatsd', function(done) {          

    nsc.startServer(5222)
      .then(nsc.stopServer)
      .then(done)
      .catch(done.fail);

  });

});