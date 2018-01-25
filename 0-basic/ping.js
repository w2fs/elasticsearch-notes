const client = require('../client');

// The 2nd param (callback) is optional, if not passed in, this will return a promise object
client.ping({
  requestTimeout: 30000
}, (error) => {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
