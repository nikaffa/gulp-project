const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

const generateCSS = (cb) => {
  src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets'));
  cb();
};

exports.css = generateCSS;

const watchFiles = (cb) => {
  watch('styles/*.scss', generateCSS);
};

exports.watch = watchFiles;