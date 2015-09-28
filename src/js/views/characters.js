(function(app){ 
	'use strict';
	
	app.AppView = Backbone.View.extend( {

		el : "body",

		template : Handlebars.compile($("#characters-item").html()),

		events : {
			"keyup #search": "search",
			"click .action-single" : "vista",
			"click .close-this" : "search"
		},

		initialize : function () {
			this.collection = new app.SearchResults();
			var that = this;
			this.collection.fetch({
				success: function() {
					that.render();
				}
			});
		},

		render : function () {
			var html = this.template({ results: this.collection.toJSON() });
			$("#characters").empty().append(html);
			return this;
		},

		search : function () {
			var value = this.$("#search").val();

			if (value.length == 1) {
				return;
			}
			
			if (value){
				this.collection.url = app.config.completeCall(value);
			}
			else{
				this.collection.url = app.config.complete();
			}

			var that = this;
			this.collection.fetch({
				success: function() {
					that.render();
				}
			});
		},

		vista: function(event){
			var id = $(event.target).attr("data-id");
			var singleCharacther = new app.singleCharacther({
				model: this.collection.get(id)
			});
			window.scrollTo(0,200);
		}

	});
})(app);


var appView = new app.AppView();





