const gulp = require('gulp');
const concat = require('gulp-concat');
const watch = require("gulp-concat");
const sourcemaps = require('gulp-sourcemaps');


gulp.task("concatCSS", ()=> {
  gulp.src("src/css/*.css")
  .pipe(sourcemaps.init())
  .pipe(concat("app.css"))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("build/"))
})

gulp.task("concatJS", () => {

  gulp.src(["src/js/lib/*.js","src/js/first/*.js","src/js/*.js"])
  .pipe(sourcemaps.init())
  .pipe(concat("app.js"))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("build/"))
});

gulp.task("default", ["concatJS", "concatCSS"], () => {
  gulp.watch("src/js/*.js", ["concatJS"]);
  gulp.watch("src/css/*.css", ["concatCSS"]);
});
