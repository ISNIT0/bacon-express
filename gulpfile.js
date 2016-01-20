var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', ['js', 'html']);

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch(['src/**/*.js'], ['js']);
    gulp.watch(['src/**/*.html'], ['html']);
});