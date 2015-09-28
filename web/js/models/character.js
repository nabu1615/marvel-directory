(function(app){
	"use strict";
	
	app.character = Backbone.Model.extend( {

		initialize: function() {
			if (!this.get("description") || $.trim(this.get("description") || '') === '') {
			this.set({"description": this.defaults.description});
			}
		},

		defaults : {
			name : "Batman", // Character name
			description : "Oftentimes in reality, the genius is in the position of the antihero. Neither the good guys nor the bad guys really trust him because his truth is universal.", // Character description
			intro:'"We love our superheroes because they refuse to give up on us. We can analyze them out of existence, kill them, ban them, mock them, and still they return, patiently reminding us of who we are and what we wish we could be.',
			introAutor:"- Grant Morrison"
		}
	});
})(app);


var character = new app.character();

console.log(character.get("name"));