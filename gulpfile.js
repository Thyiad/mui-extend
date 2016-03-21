var gulp = require('gulp'),
	jshint = require("gulp-jshint"),
	uglify= require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');

gulp.task('jsLint',function(){
	gulp.src(['src/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter());
});

gulp.task('dist',function(){
	gulp.src(['src/core.js','src/*.js'])
		.pipe(concat('mui-extend.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('mui-extend.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});