const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const dist = path.join(__dirname, 'dist/');

// Build
gulp.task('build', () => {
  return gulp.src([ 'lib/*.js' ])
    .pipe(concat('iso639.js'))
    .pipe(babel({ presets: [ '@babel/env' ] }))
    .pipe(gulp.dest(dist));
});

// Minify
gulp.task('minify', gulp.series('build', () => {
  return gulp.src([ 'dist/*.js', '!dist/*.min.js' ])
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(dist));
}));

// Default task
gulp.task('default', gulp.series('build', 'minify'));
