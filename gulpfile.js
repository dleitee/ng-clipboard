var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rimraf = require("gulp-rimraf");
var iife = require("gulp-iife");
var wrap = require("gulp-wrap");

gulp.task("js", ["clear"], function() {
	return gulp.src([
			"./src/module.js",
			"./src/**/*.js"
		])
		.pipe(concat("ng-clipboard.js"))	
		.pipe(wrap({ src: "./gulp/umd-template.js" }))
		.pipe(babel())
		.pipe(iife({ useStrict: false }))
		.pipe(uglify())
		.pipe(gulp.dest("./dist"));
});

gulp.task("clear", function() {
	return gulp.src("./dist/*", { read: false })
		.pipe(rimraf({ force : true }));
});