var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    concatCss =     require('gulp-concat-css'),
    cssnano =       require('gulp-cssnano'),
    concat =        require('gulp-concat'),
    autoprefixer =  require('gulp-autoprefixer'),
    notify =        require('gulp-notify'),
    livereload =    require('gulp-livereload'),
    uglify =        require('gulp-uglify'),
    connect =       require('gulp-connect'),
    del =           require('del'),
    imagemin =      require('gulp-imagemin'),
    pngquant =      require('imagemin-pngquant');

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

gulp.task('img', function(){
  return gulp.src('app/images/*.*')
  .pipe(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/**/*.css', ['concat-css']);
  gulp.watch('app/index.html', ['html']);
});

//default
gulp.task('default', ['connect', 'html', 'watch']);

//build

gulp.task('scripts', function(){
  return gulp.src(['app/js/jquery-3.3.1.min.js', 'app/js/bootstrap.js', 'app/js/owl.carousel.min.js',])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('css-nano', function() {
  return gulp.src('app/css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function(){
  return del.sync('dist');
});

gulp.task('build', ['clean', 'img','sass', 'concat-css','scripts', 'css-nano'], function(){
  gulp.src(['app/js/main.js', 'app/js/libs.min.js'])
      .pipe(gulp.dest('dist/js'));

  gulp.src('app/fonts/*.*')
      .pipe(gulp.dest('dist/fonts'));
  
  gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
});

