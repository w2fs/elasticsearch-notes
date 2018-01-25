const client = require('../client');

(async () => {
  // insert
  const inserted = await client.create({
    index: 'demo',
    type: 'test',
    id: '1',
    body: {
      title: 'Test 1',
      tags: ['y', 'z'],
      published: true,
      published_at: '2013-01-01',
      counter: 1
    },
    ignore: [409]
  });
  console.log(inserted);
})();
