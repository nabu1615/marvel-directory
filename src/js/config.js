'use strict';

window.app = {
	author : "javier.vargas@prodigious.com"
};

app.config = {
	urlCharacters : "http://gateway.marvel.com:80/v1/public/characters",
	idKey : "?apikey=81936413912824898eeca7e8cf419364&ts=",
	boxCharacters: "#characters",
	ts : new Date().getTime(),
	hash: function (){
		return md5(this.ts + "c14552138dc8a5e78d9d67dcc6cf10016d8ba4f281936413912824898eeca7e8cf419364");
	},
	complete: function () {
		return  this.urlCharacters + this.idKey + this.ts + "&hash=" + this.hash();
	},
	completeCall: function (value) {
		return this.complete() + "&nameStartsWith=" + value;
	}
};



