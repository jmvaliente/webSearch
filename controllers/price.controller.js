const amazonPaapi = require('amazon-paapi');
const amazonConfig = require('../js/amazon.js')

module.exports.init = (req, res, next) => {
  
  amazonPaapi.GetVariations(amazonConfig.commonParameters, amazonConfig.requestParameters)
  .then(data => {
      // do something with the success response.
      res.send(data);
  
  })
  .catch(error => {
      // catch an error.
      res.send(error)

  });
  
};
