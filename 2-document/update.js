const client = require('../client');

(async () => {
  // update
  const updated = await client.update({
    index: 'demo',
    type: 'test',
    id: '1',
    body: {
      // put the partial document under the `doc` key
      doc: {
        title: 'Updated'
      }
    }
  });
  console.log(updated);
})();
