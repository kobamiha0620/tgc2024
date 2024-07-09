// gulpプラグインを読み込みます
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const sassGlob = require('gulp-sass-glob');

/**
 * Sassをコンパイルするタスクです
 */


function bsInit(done) {
  browserSync.init({
    index : "./dest/index.html",
    server: true,
  });
  done();
}

function bsReload(done) {
  browserSync.reload();
  done();
}

function ejsmode(done){
  src(["./src/ejs/**/*.ejs", "!" + "./src/ejs/**/_*.ejs"])
  .pipe(plumber())
  .pipe(ejs({}, {}, { ext: '.html' }))
  .pipe(rename({ extname: ".html" })) //拡張子をhtmlに
  .pipe(gulp.dest("./dest/")); //出力先

  done();

}

function compileSass(done){  // style.scssファイルを取得
src("./src/sass/**/*.scss")
.pipe(plumber())                   // watch中にエラーが発生してもwatchが止まらないようにする
.pipe(sassGlob())                  // glob機能を使って@useや@forwardを省略する
.pipe(sass())                      // sassのコンパイルをする
.pipe(dest("./dest/css/"));

done();
}
   

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchTask = (done) => {
	watch(["./**", "!./dest/index.html","!./dest/**"], series(ejsmode, compileSass, bsReload));

	done();
};


// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.bs = series(bsInit, bsReload, watchTask); 