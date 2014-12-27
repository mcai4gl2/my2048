define([
	"jquery",
	"underscore"
], function($, _) {
	var ghClient = {
		baseUrl : function() {
			return 'http:s//github.com';
		}
	}

	return ghClient;
});