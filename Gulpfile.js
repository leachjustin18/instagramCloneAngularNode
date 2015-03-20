/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gulp = require('gulp'); 
var sass = require('gulp-sass'); 
var server = require('gulp-server-livereload');


//Gulp sass
gulp.task('sass', function() {
    gulp.src('app/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'));
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
    gulp.watch('app/sass/*.scss', ['sass']);
});

gulp.task('serve', ['sass', 'webserver', 'watch'])

// Default Task
gulp.task('default', []);