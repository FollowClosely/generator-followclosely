var gulp       = require('gulp'),
    browserify = require('browserify'),
    gutil      = require('gulp-util'),
    livereload = require('gulp-livereload'),
    nodemon    = require('gulp-nodemon'),
    plumber    = require('gulp-plumber'),
    sass       = require('gulp-ruby-sass'),
    source     = require('vinyl-source-stream');

var config = {
  css: './public/css/',
  js: './public/js/',
  lib: './public/lib/'
};

gulp.task('sass', function () {
  return sass(config.css + '**/*.scss')
    .pipe(gulp.dest(config.css))
    .pipe(livereload());
});

gulp.task('bundle', function(){
  return browserify('./public/js/scripts.js')
    .bundle()
    .on('error', function(e) {
      gutil.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.js));
});

gulp.task('watch', function() {
  gulp.watch(config.css + '*.scss', ['sass']);
  gulp.watch(config.js + '**/*.js', ['bundle']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js jade',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'bundle',
  'watch'
]);
