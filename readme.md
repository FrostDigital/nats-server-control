# NATS Server Control

> This has been cherry picked from [node-nats](https://github.com/nats-io/node-nats/tree/4092435aabe328667002032e8488802ffd8eae59/test/support). Kudos to Apcera and the [author(s)](https://github.com/nats-io/node-nats/blob/ef3ad853e75f1962dbaa5373d6928989e3633021/package.json#L25) of that repo!

Start, stop and kill the gnatsd process from javascript. Useful during testing where a NATS bus is needed.


## Start and stop a NATS server

    var nsc = require('nats-server-control');
    
    // Start gnatsd on localhost:4222 
    var server = nsc.startServer(4222, { /* optional opts })
      .then(function() {
         // up an running
      })
      .catch(function(err) {
        // catch error
      });

    // Stop server
    nsc.stopServer(server);

    // Or if you'd like
    // server.kill();


## Example

Check out `spec/example.spec.js` for example usage in a jasmine test.