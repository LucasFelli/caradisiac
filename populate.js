const {
  getBrands,
  getModels
} = require('node-car-api');

var client = require('./connection.js');


exports.insertData = async (callback) => {
  console.log('Populate in progress...')
  const brands = await getBrands();
  var cars = [];
  var id = 1;
  for (var i = 0; i < brands.length; i++) {
    const models = await getModels(brands[i]);

    for (var j = 0; j < models.length; j++) {
      cars.push({
        index: {
          _index: 'cars',
          _type: 'car',
          _id: id
        }
      });
      cars.push(models[j]);
      id++;
    }
  }

  console.log('\nSending data to ElasticSearch...')
  client.bulk({
    body: cars
  }, function(error, response) {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log('\nDone !');
    }
  });
  mapping = {
        'index': 'cars',
        'type': 'car',
        'body': {
            'properties': {
                'volume': {
                    'type': 'text',
                    'fielddata': true
                }
            }
        }
    }
  client.indices.putMapping(mapping);
}