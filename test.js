const {getModels} = require('node-car-api');

async function print () {
  const models = await getModels('AIXAM');

  console.log(models);
}

print();