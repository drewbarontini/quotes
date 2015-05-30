// *************************************
//
//   Gulpfile
//
// *************************************

// -------------------------------------
//   Plugins
// -------------------------------------

var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');

// -------------------------------------
//   Task: Browserify
// -------------------------------------

gulp.task( 'browserify', function() {

  gulp.src( 'src/app.js' )
    .pipe( browserify( {
      debug: true,
      transform: [ 'reactify' ]
    } ) )
    .pipe( uglify() )
    .pipe( concat( 'bundle.js' ) )
    .pipe( gulp.dest( 'public/' ) );

} );

// -------------------------------------
//   Task: Default
// -------------------------------------

gulp.task( 'default', [ 'browserify' ] );

// -------------------------------------
//   Task: Watch
// -------------------------------------

gulp.task( 'watch', function() {
  gulp.watch( 'src/*.js', [ 'default' ] );
} );
