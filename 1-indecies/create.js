const client = require('../client');

// delete:
// client.indices.delete
// ignore: [404] // if not existed
client.indices.create({
  index: 'demo',
  ignore: [400]
}).then((result) => {
  // 400, already exists
  const { acknowledged = false } = result;
  console.log('status:', acknowledged ? 'success' : 'failed');
});
