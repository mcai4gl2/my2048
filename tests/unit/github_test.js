define([
	"gh"
], function(ghClient) {
	QUnit.module("Github API Integration");

	QUnit.test('gh-client initialization', function() {
		QUnit.ok(ghClient.baseUrl, "baseUrl function is defined");
	});

	QUnit.test('Read user details', function() {
		var github = ghClient.Github;
		var user = github.getUser();

		console.log(user);

		QUnit.ok(user, "User shall not be undefined");

		QUnit.stop();

		var start = function() {
			QUnit.start();
		};

		ghClient.getUser("mcai4gl2",  start, function(user) {
			console.log(user);
			QUnit.equal("mcai4gl2", user.login, "Login shall match what we searching");
			QUnit.start();
		});
	});
});