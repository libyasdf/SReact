const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', 'less', '.css'],
        alias: {
            Presentational: path.resolve(APP_PATH, 'js/components/presentational')
        }
    }
    // stories: ['../src/**/*.stories.[tj]s'],
};

