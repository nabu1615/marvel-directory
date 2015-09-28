(function(app){ 
	'use strict';

	app.singleCharacther = Backbone.View.extend( {

	el: "#singleContent", 

	template : Handlebars.compile($("#single").html()),

	initialize: function(){
		this.render();
	},

	render: function(){
		$("#characters").empty().html(this.template(this.model.toJSON()))
		return this
	}

});
})(app);



	