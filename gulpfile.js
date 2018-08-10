var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
    

gulp.task('sass', function(){
  gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
    .pipe(gulp.dest('app/assets'))
    .pipe(connect.reload())
});

gulp.task('concat-css', function(){
  gulp.src('app/assets/**/*.css')
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('app/css'));
});

gulp.task('html', function (){
  gulp.src('app/index.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/**/*.css', ['concat-css']);
  gulp.watch('app/index.html', ['html']);
});

//default
gulp.task('default', ['connect', 'html', 'watch']);