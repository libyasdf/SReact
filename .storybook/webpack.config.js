const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
// cwd是指当前node命令执行时所在的文件夹目录
// __dirname是指被执行js文件所在的文件夹目录
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }, {
          test: /\.html$/,
          use: [{
            loader: 'html-loader'
          }]
        }, {
          test: /\.jsx$/,
          exclude: /^node_modules$/, // 过滤node_modules目录
          use: [{
            loader: 'babel-loader'
          }],
          include: [APP_PATH] // 只匹配
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] // 注意：loader是从又往左开始加载处理的，所以先执行css-loader
        }, {
          test: /.less$/,
          use: [
            'style-loader', // 将css以<style>标签插入至dom中
            'css-loader', // 解释css文件内的 @import 和 url()
            'less-loader' // 一个模块文件需要转化多次，需要多个loader——自下而上
          ]
        }, {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          use:[{
            loader: 'url-loader'
          }]
        }]
      },
    resolve: {
        extensions: ['.js', '.jsx', 'less', '.css'],
        alias: {
          '@': resolveApp('src')
          // Presentational: path.resolve(APP_PATH, 'js/components/presentational')            
        }
    }
    // stories: ['../src/**/*.stories.[tj]s'],
};

