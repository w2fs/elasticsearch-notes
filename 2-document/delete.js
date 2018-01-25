const client = require('../client');

(async () => {
  // delete
  const deleted = await client.delete({
    index: 'demo',
    type: 'test',
    id: '1',
    ignore: [404]
  });
  console.log(deleted);
})();
