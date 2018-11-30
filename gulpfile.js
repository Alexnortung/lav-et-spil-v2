const gulp = require('gulp');
const concat = require('gulp-concat');
const watch = require("gulp-concat");


gulp.task("default", () => {

  gulp.src("src/js/*.js")
  .pipe(concat("app.js"))
  .pipe(gulp.dest("build/"))
});
