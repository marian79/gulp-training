var gulp = require('gulp');

// Excercise 1 - Sass
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Excercise 2 - Concatenate & Minify JS
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Excercise 3 - JS Lint
var jshint = require('gulp-jshint');
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Excercise 4 - Imagemin
imagemin = require('gulp-imagemin');
gulp.task('imagemin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// Excercise 5 - Watch
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/images/*.png', ['imagemin']);
});

// Excercise 6 - Copy index.html
gulp.task('copy', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

// Excercise 7 - Clean
var clean = require('gulp-clean');
gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

// Serve
var serve = require('gulp-serve');
gulp.task('serve', serve({
  root: ['dist'],
  port: 8765
}));

gulp.task('default', ['lint', 'sass', 'scripts', 'imagemin', 'copy', 'watch', 'serve']);
