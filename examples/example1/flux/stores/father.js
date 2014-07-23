var ReactFlux = require('../../../../index');
var userConstants = require('../constants/user');

var MotherStore = require('./mother');

module.exports = ReactFlux.createStore(null, [
	
	[userConstants.USER_LOGIN_SUCCESS, [MotherStore],  function notifyFatherOfLogin(payload){

		console.log("I'm Father,  I need 1 sec to answer!");
		
		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				console.log("I am Father, I have been notifed of login! ", payload.username);
				resolve();
			}, 1000);
		});
		
		return promise;
	
	}]

]);