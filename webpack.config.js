const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    mode: 'development',
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    query: {} //it fix: Module build failed: TypeError: Cannot read property 'doctype' of null
                },
                /*options: {
                    pretty: true
                }*/
            }
        ]
    }
};