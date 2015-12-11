/*var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task('browserify', function(){
  return browserify('./js/app.js')
         .transform(babelify)
         .bundle()
         .pipe(source('bundle.js'))
         .pipe(gulp.dest('js'));
});

gulp.task('default',['browserify']) ;*/

/*const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
  return gulp.src('src/app.jsx')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});*/

var gulp = require('gulp');
var jsx = require('gulp-jsx');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');



gulp.task('browserify2', function() {  
  return browserify('./src/app.jsx')
    .bundle()
    /*.pipe(source('bundle.js')) */// gives streaming vinyl file object
    /*.pipe(buffer())*/ // <----- convert from streaming to buffered vinyl file object
    /*.pipe(uglify()) */// now gulp-uglify works 
    /*.pipe(rename('bundle.min.js'))*/
   /*.pipe(gulp.dest('./dist'))*/;
});



gulp.task('browserify', function() {  
  return browserify('./dist/app.js')
    .bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    /*.pipe(uglify()) */// now gulp-uglify works 
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./dist'));
});


 
gulp.task('build', function() {
  return gulp.src('./src/app.jsx')
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('default',['browserify']) ;