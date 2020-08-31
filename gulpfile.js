const {src,dest,series,watch} = require('gulp') 
const del = require('del');
const plugins = require('gulp-load-plugins')();
function js(cb){
    src('js/*.js')
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'));
    cb()
}

exports.scripts = js;
exports.default = function(){
    console.log('gulp start')
}