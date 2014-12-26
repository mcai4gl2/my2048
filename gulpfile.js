var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	react = require('gulp-react'),
	qunit = require('gulp-qunit');

var styles = 'src/*.scss';
var scripts = 'src/*.js';

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulp.dest('built'));
});

gulp.task('jsx', function () {
  return gulp.src(scripts)
    .pipe(react())
    .pipe(gulp.dest('built'));
});

gulp.task('watch', function () {
  gulp.watch(styles, ['styles']);
  gulp.watch(scripts, ['jsx']);
});

gulp.task('test', function() {
	return gulp.src('./tests/unit/tile.html')
		.pipe(qunit());
});

gulp.task('default', ['test', 'watch', 'styles', 'jsx']);

gulp.task('build', ['test', 'styles', 'jsx']);
