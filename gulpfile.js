var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webserver =require('gulp-webserver');

//test
gulp.task('test', function(){
  console.log('test works!');
});

//js minification
gulp.task('minifyjs', function(){
  return gulp.src('src/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

//webserver
gulp.task('webserver', function(){
  return gulp.src('app')
  .pipe(webserver({
    port: '4000',
    livereload: true,
    open: true
  }));
});

//watch files
gulp.task('watch', function(){
  gulp.watch('src/*.js', ['minifyjs']);
});


//default task
gulp.task('default', ['minifyjs', 'watch', 'webserver']);
