const gulp = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', () => {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('build'));
});

// gulp 3
// gulp.task("default", ["copy-html"], bundle);

// 按照顺序执行
// gulp.task("default", gulp.series("copy-html", "bundle"));

// 并行执行
gulp.task(
  'default',
  gulp.parallel('typescript', (cb) => {
    gulp.watch('**/*.ts', gulp.series('typescript'));
    cb();
  }),
);
