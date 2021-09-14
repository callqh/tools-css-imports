const gulp = require('gulp');
const cleanDir = require('gulp-clean-dir');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

// ts打包配置
const tsconfig = ts.createProject('./tsconfig.json');

/**
 * 清除dist打包文件
 **/
const clean_dir = () => {
	return gulp.src('/').pipe(cleanDir('./dist')).pipe(gulp.dest('./dist'));
};

/**
 * 编译ts文件
 **/
const ts_compile = () => {
	return gulp
		.src('src/*.ts')
		.pipe(tsconfig()) // 编译ts
		.pipe(gulp.dest('./dist'));
};

/**
 * 压缩编译后的js文件
 **/
const uglify_file = () => {
	return gulp.src('dist/*.js').pipe(uglify()).pipe(gulp.dest('./dist'));
};

const watch = () => {
	return gulp.watch('src/*.ts', gulp.parallel(ts_compile));
};

exports.build = gulp.series(clean_dir, ts_compile, uglify_file);
exports.default = watch;
