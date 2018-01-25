const client = require('../client');

(async () => {
  // bulk
  const result = await client.bulk({
    body: [
      // insert one {
      // action description
      { index: { _index: 'demo', _type: 'test', _id: 2 } },
      // the document to index
      { title: 'foo' },
      // }

      // update one {
      // action description
      { update: { _index: 'demo', _type: 'test', _id: 3 } },
      // the document to update
      { doc: { title: 'foo' } },
      // }

      // delete one {
      // action description
      { delete: { _index: 'demo', _type: 'test', _id: 4 } }
      // no document needed for this delete
      // }
    ]
  });
  console.log(result);
})();
