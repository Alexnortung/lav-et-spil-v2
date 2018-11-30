const gulp = require('gulp');
const concat = require('gulp-concat');
const watch = require("gulp-concat");


gulp.task("concatJS", () => {

  gulp.src(["src/js/lib/*.js","src/js/*.js"])
  .pipe(concat("app.js"))
  .pipe(gulp.dest("build/"))
});

gulp.task("default", () => {
  gulp.watch("src/js/*.js", ["concatJS"]);
});
