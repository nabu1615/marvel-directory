(function(app){
	"use strict";
	
	app.SearchResults = Backbone.Collection.extend( {

	model : app.character,
	url : app.config.complete(),

	initialize : function(){
		// this.fetch({success: function(){
		// 	console.log("hello");
		// }});
	},
	
	parse: function (response) {
		return response.data.results;
	},

	});
})(app);







