var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./node_modules/backstopjs/gulp/tasks');

gulp.task('default', ['scripts', 'sass'], function () {
    gulp.watch('node_modules/backstopjs/gulp/tasks/*.js', ['scripts']);
    gulp.watch('node_modules/backstopjs/gulp/tasks/*.{sass,scss}', ['sass']);
});
