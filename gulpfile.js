var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	react = require('gulp-react'),
  util = require('gulp-util'),
  livereload = require('gulp-livereload'),
	qunit = require('gulp-qunit');

var styles = 'src/*.scss';
var scripts = 'src/**/*.js';
var htmls = '*.html';
var unitTests = 'tests/unit/*.js';

var onError = function(err) {
  util.log(util.colors.green(err));
};

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulp.dest('built'))
    .pipe(livereload());
});

gulp.task('jsx', function () {
  return gulp.src(scripts)
    .pipe(react())
    .pipe(gulp.dest('built'));
});

gulp.task('watch', function () {
  livereload.listen();
  
  gulp.watch(styles, ['styles']);
  gulp.watch(scripts, ['test', 'jsx']);
  gulp.watch(htmls, ['html']);
  gulp.watch(unitTests, ['test']);
});

gulp.task('html', function() {
  return gulp.src([htmls])
    .pipe(livereload());
});

gulp.task('test', function() {
	return gulp.src('./tests/unit/*.html')
		.pipe(qunit())
    // TODO: this is not good as even if the test failed, the rest of the package still runs
    // But this is good so don't need to rerun gulp test from command line when adding more tests
    .on("error", onError)
    .pipe(livereload());
});

gulp.task('default', ['test', 'styles', 'jsx', 'html', 'watch']);

gulp.task('build', ['test', 'styles', 'jsx']);
