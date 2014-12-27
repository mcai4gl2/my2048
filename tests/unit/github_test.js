define([
	"gh"
], function(ghClient) {
	QUnit.module("Github API Integration");

	QUnit.test('gh-client initialization', function() {
		QUnit.ok(ghClient.baseUrl, "baseUrl function is defined");
	});

	QUnit.test('Another dummy test', function() {
		QUnit.ok(true);
	});
});