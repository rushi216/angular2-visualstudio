/// <binding AfterBuild='default' />

/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function (done) {
    gulp.src([
      'node_modules/systemjs/dist/system.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/upgrade.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/es6-promise/dist/es6-promise.js',
      'node_modules/rxjs/bundles/Rx.js'
    ]).pipe(gulp.dest('./wwwroot/lib/'));
});