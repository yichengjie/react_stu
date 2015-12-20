'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var del = require('del');  // Deletes files.


var curAppName = "app3" ;

// Define some paths.
var paths = {
    css: ['src/css/**/*.styl'],
    app_js: ['./src/js/'+curAppName+'/app.js'],
    js: ['src/js/'+curAppName+'/*.js']
};


gulp.task('clean', function(done) {
    del(['build'], done);
});

gulp.task('js', function () {
    console.info('js task run.....') ;
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: paths.app_js,
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [reactify]
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        /*.pipe(uglify())*/
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
    console.info('watch file change ......') ;
    //gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['js']);
});


gulp.task('default',['watch','js']) ;