const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sync = require("browser-sync").create();
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const eslint = require("gulp-eslint");

const generateCSS = (cb) => {
  src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets'))
    .pipe(sync.stream());
  cb();
};
exports.css = generateCSS;


const generateHTML = (cb) => {
  src("views/index.ejs")
    .pipe(ejs({
      title: "Hello Cyper",
    }))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(dest("public"));
  cb();
};
exports.html = generateHTML;


const runLinter = (cb) => {
  return src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('end', function() {
      cb();
    });
};
exports.lint = runLinter;


const browserSync = (cb) => {
  sync.init({
    server: {
      baseDir: "./public"
    }
  });
  watch('views/**.ejs', generateHTML);
  watch('styles/*.scss', generateCSS);
  watch("public/**.html").on('change', sync.reload);
};
exports.sync = browserSync;
