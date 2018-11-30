const gulp = require('gulp');
const concat = require('gulp-concat');
const watch = require("gulp-concat");
const sourcemaps = require('gulp-sourcemaps');


gulp.task("concatJS", () => {

  gulp.src(["src/js/lib/*.js","src/js/*.js"])
  .pipe(sourcemaps.init())
  .pipe(concat("app.js"))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("build/"))
});

gulp.task("default", ["concatJS"], () => {
  gulp.watch("src/js/*.js", ["concatJS"]);
});
