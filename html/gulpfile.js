const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    purgecss = require('gulp-purgecss'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')(require('sass')),
    // autoprefixer = require('gulp-autoprefixer'),
    wrap = require('gulp-wrap'),
    fileinclude = require('gulp-file-include'),
    index = require('gulp-index');
var fs = require('fs');
function css() {
    return gulp.src('./src/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))

        .pipe(gulp.dest('./public/assets/css/'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/*.html')
        .pipe(wrap({ src: 'src/layout/_layout.html' }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./public/'));

}


function serve() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
}
// Build Index Demo
function buildIndex() {
    return gulp
        .src('public/*.html')
        .pipe(
            index({
                'prepend-to-output': () =>
                    fs.readFileSync('./_app/index-partials/index-front-matter.html'),
                'append-to-output': () =>
                    fs.readFileSync('./_app/index-partials/index-end-matter.html'),
                title: 'Pages List',
                pathDepth: 1,
                'relativePath': './',
                'outputFile': './index.html',
                'section-template': (sectionContent) => `<section class="index__section">
          ${sectionContent}</section>
          `,
                'section-heading-template': (heading) => `<h2 class="index__section-heading">${heading}</h2>
          `,
                'list-template': (listContent) => `<ul class="index__list">
          ${listContent}</ul>
          `,
                'item-template': (
                    filepath,
                    filename
                ) => `<li class="index__item"><a class="index__item-link" target="_blank" href="${filepath}/${filename}">${filename}</a></li>
                      `
            })
        )
        .pipe(gulp.dest('./'));
};
gulp.watch('./src/assets/css/**/*.scss', css);
gulp.watch('./src/*.html', html).on('change', browserSync.reload);
gulp.task('watch', function () {
    watch('./src/*.html', gulp.series(gulp.task('html')))
});
exports.default = gulp.parallel(html, css, serve, buildIndex);