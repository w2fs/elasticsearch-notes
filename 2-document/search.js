const client = require('../client');

(async () => {
  // get one
  const getted = await client.get({
    index: 'demo',
    type: 'test',
    id: 1
  });
  console.log(getted);
  // search
  const { hits: { hits = undefined } = {} } = await client.search({
    index: 'demo',
    body: {
      query: {
        match: {
          title: 'Updated'
        }
      }
    }
  });
  console.log(hits);
})();
