const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

const generateCSS = (cb) => {
  src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets'));
  cb();
};

exports.css = generateCSS;