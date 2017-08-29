'use strict';

exports.get_a_ambulance = function(req, res) {
  var task = 
{ "messages": [ {"text": "Welcome to our store!"}, {"text": "How can I help you?"} ] };
  


  res.json(task);
  
};
