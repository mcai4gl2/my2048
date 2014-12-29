define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router) {
	return {
		initialize: function() {
			this.events = {};
			_.extend(this.events, Backbone.Events);

			Router.initialize();			
		}
	};
});