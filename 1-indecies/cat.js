const client = require('../client');

client.cat.indices({
  format: 'json'
}).then((result) => {
  // return list
  console.log(result);
});
