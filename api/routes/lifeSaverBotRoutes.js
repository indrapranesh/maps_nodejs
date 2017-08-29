'use strict';
module.exports = function(app) {
  var botHandler = require('../controllers/lifeSaverBotController');


   app.route('/bot/:chatfuelId/:type/:numbers/:lat/:lng')
    .get(botHandler.get_a_ambulance);
 
  
 
  
};