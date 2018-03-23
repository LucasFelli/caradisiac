const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const jsonfile = require('jsonfile');
const file = 'car2.json';

async function populate() {
  const brands = await getBrands();
  
  /*brands.forEach( async brand => {
	  const models = await getModels(brand);
	  models.forEach( model => {
		  jsonfile.writeFile(file, model, {spaces: 2, flag: 'a'}, function(err) {
			  if (err){
				  console.error(err)
			  }
			})
	  })
  })*/
  
for(var i = 0; i < brands.length; i++) {	
	var models = await getModels(brands[i]);
	for(var j = 0; j < models.length; j++){
			jsonfile.writeFile(file, models[j], {spaces: 2, flag: 'a'}, function(err) {
			  if (err){
				  console.error(err)
			  }
			})
		}		
	}
}	

populate();
