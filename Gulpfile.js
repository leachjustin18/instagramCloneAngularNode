/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gulp = require('gulp'); 
var sass = require('gulp-sass'); 
var server = require('gulp-server-livereload');
var watchify = require('gulp-watchify');

var bundlePaths = {
    srcJS: [
        'app/js/**/*.js'
    ],
    destJS:'app/dist/js/', 
    srcSASS: 'app/sass/*.scss', 
    destSASS: 'app/css'
};

// Hack to enable configurable watchify watching
var watching = false;

gulp.task('enable-watch-mode', function() { watching = true });

// Browserify and copy js files
gulp.task('browserify', watchify(function(watchify) {
    return gulp.src(bundlePaths.srcJS)
        .pipe(watchify({
            watch:watching
        }))
        .pipe(gulp.dest(bundlePaths.destJS))
}));

gulp.task('watchify', ['enable-watch-mode', 'browserify']);

//Gulp sass
gulp.task('sass', function() {
    gulp.src(bundlePaths.srcSASS)
            .pipe(sass())
            .pipe(gulp.dest(bundlePaths.destSASS));
});

// Node server 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      port: 9000,
      open: true
    }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(bundlePaths.srcSASS, ['sass']);
});


//Livereload, server, sass, browersify watch
gulp.task('serve', ['sass', 'webserver', 'watchify', 'watch']);

// Default Task
gulp.task('default', []);