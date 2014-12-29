define([
	"jquery",
	"underscore",
	"backbone"
], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {
		var appRouter = new AppRouter();

		appRouter.on('route:defaultAction', function() {

		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});