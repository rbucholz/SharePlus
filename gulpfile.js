var gulp = require('gulp');
var gutil  = require('gulp-util');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('default', function() {
    // TODO: decide what the default behavior should be - probably build, etc.
});

gulp.task('clean', function(done) {
    log('cleaning launchpad');
    del('./dist/*.web.zip', done);
});

gulp.task('zip-rename', ['clean'], function() {
    return gulp.src('Pharmagistics Sales/**')
        .pipe(zip('launchpad.web.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('**/*.js', ['zip-rename'])
        .on('change', function(changeevent){
            log(changeevent);
        });
    gulp.watch('**/*.css', ['zip-rename'])
        .on('change', function(changeevent){
            log(changeevent);
        });
    gulp.watch('**/*.html', ['zip-rename'])
        .on('change', function(changeevent){
            log(changeevent);
        });
});

// TODO
gulp.task('deploy', function(){
  	
    //var client = new SP.RestService('https://sctrainingmr3.sharepoint.com/sites/mr');

    //client.signin('user@mysite.onmicrosoft.com', 'password', function(err,data) {
    //
    //    // check for errors during login, e.g. invalid credentials
    //    if (err) {
    //        log(err);
    //        return;
    //    }
    //
    //    // start to do authenticated requests here....
    //
    //})
});

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                gutil.log(gutil.colors.blue(msg[item]));
            }
        }
    } else {
        gutil.log(gutil.colors.blue(msg));
    }
}
