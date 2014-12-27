define([
	"githubApi"
], function() {
	var ghClient = new function() {
		this.baseUrl = function() {
			return 'https://github.com';
		};
	
		this.Github = new Github({}); 

		this.user = function() {
			return this.Github.getUser();
		};

		this.getUser = function(username, error, callback) {
			return this.user().show(username, function(err, user) {
				if (err) error(err);
				else callback(user);
			});
		};
	};
	return ghClient;
});