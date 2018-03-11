const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');

const PATHS = {
    source: path.join(__dirname, 'src'),
    //build: path.join(__dirname, 'dist') //default
};

const commonConf = merge([
    {
        //entry: PATHS.src + '/index.js', //default
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js'
        },
        /*output: { //default
            path: PATHS.build,
            filename: '[name].js'
        },*/
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog'],
                template: PATHS.source + '/pages/blog/blog.pug'
            })
        ]
    },
    pug()
]);

module.exports = function(env){
    console.log(env);
    return merge([
        commonConf,
        devserver()
    ])
};
