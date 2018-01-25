const elasticsearch = require('elasticsearch');

module.exports = new elasticsearch.Client({
  host: 'localhost:9200',
  // set false if you do not want it
  log: 'trace'
});
