'use strict';

// ===========================================
// 初期設定
// ===========================================
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var postcss = require('gulp-postcss');
var htmlhint = require('gulp-htmlhint');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var ssi = require('browsersync-ssi');
var crLfReplace = require('gulp-cr-lf-replace');

var paths = {
    html: ['**/*.html', '!./node_modules/**/*.html', '!./common/**/*.html'],
    css: './common/css/',
    scss: ['./_scss/*scss', './_scss/**/*scss'],
    js: './common/js/**.js'
}

var browsers = [
    'last 2 versions',
    'ie >= 11',
    'Android >= 4.3',
    'ios_saf >= 9'
];

// ===========================================
// タスク
// ===========================================
/**
 * html構文チェック
 */
gulp.task('htmlhint', function() {
    return gulp.src(paths.html)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
});

// JavaScript構文チェック
gulp.task('eslint', function() {
    return gulp.src(paths.js)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/**
 * cssコンパイル
 */
gulp.task('sass', function() {
    gulp.src('./_scss/*scss')
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([
            require('autoprefixer')({browsers: browsers}),
            require('css-mqpacker')
        ]))
        .pipe(csscomb())
        .pipe(crLfReplace({changeCode: 'CR+LF'}))
        .pipe(gulp.dest(paths.css));
});

/**
 * ローカルサーバー
 */
gulp.task('bs',function(){
    browserSync.init({
        ghostMode: false,
        server: {
            baseDir: './',//ルートディレクトリ
            middleware: [
                ssi({
                    baseDir: __dirname,
                    ext: '.html'
                })
            ]
        }
    });
    //ファイル更新時にブラウザをリロード
    gulp.watch([paths.html, './common/css/index.css', './common/css/general.css', paths.js], function() {
        browserSync.reload();
    });
});

// ===========================================
// watch
// ===========================================
gulp.task('watch',function() {
    gulp.watch(paths.html, ['htmlhint']);
    gulp.watch(paths.js, ['eslint']);
    gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', ['bs', 'watch']);
