const elasticsearch = require('elasticsearch');
var client = require('./connection.js');

exports.sortSuv = (callback) => {
  client.search({
	'index': 'cars',
    'type': 'car',
    'body': {
		'query': {
					'match_all': {}
				},
		  'sort': {
			'volume': {
			  'order': 'desc'
			}
		  }
	}
}).then(function(resp) {
    var hits = resp.hits.hits;
    return callback(null, hits)
  }, function(err) {
    console.trace(err.message)
  })
}