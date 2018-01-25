const client = require('../client');

// The 2nd param (callback) is optional, if not passed in, this will return a promise object
client.cat.nodes({
  format: 'json',
  v: true
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
