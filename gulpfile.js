const { src, dest, watch, parallel, series } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const eslint = require("gulp-eslint");
const sync = require("browser-sync").create();

const generateCSS = (cb) => {
  src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets'))
    .pipe(sync.stream());
  cb();
};

const generateHTML = (cb) => {
  src("views/*.ejs")
    .pipe(ejs({
      title: "Hello Cyper",
    }))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(dest("public"));
  cb();
};

const runLinter = (cb) => {
  return src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('end', function() {
      cb();
    });
};

const watchFiles = (cb) => {
  watch('views/**.ejs', generateHTML);
  watch('styles/**.scss', generateCSS);
};

const browserSync = (cb) => {
  sync.init({
    server: {
      baseDir: "./public"
    }
  });
  watch('views/**.ejs', generateHTML);
  watch('styles/*.scss', generateCSS);
  watch("public/**.html").on('change', sync.reload);
  cb();
};

exports.css = generateCSS;
exports.html = generateHTML;
exports.lint = runLinter;
exports.watch = watchFiles;
exports.sync = browserSync;

exports.default = series(runLinter,parallel(generateCSS,generateHTML));