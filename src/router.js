define([
	"jquery",
	"underscore",
	"backbone",
	"views/navbar/NavbarView"
], function($, _, Backbone, NavbarView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {
		var appRouter = new AppRouter();

		var navbarView = new NavbarView();
		navbarView.render();

		appRouter.on('route:defaultAction', function() {

		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});