(function() {
	QUnit.config.autostart = false;

	require.config({
		paths: {
			jquery: "../../bower_components/jquery/dist/jquery",
			underscore: "../../bower_components/underscore/underscore",
			qunit: "../../bower_components/qunit/qunit/qunit",
			tile: "../../src/tile",
			gh: "../../src/gh-client"
		}
	});

	require(['github_test', 'tile_test', QUnit.start]);
})();