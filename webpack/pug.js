module.exports = function() {
    return {
        module: {
            rules: [
                {//--module-bind pug=pug-loader
                    test: /\.pug$/,
                    //use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                    //}
                }
            ]
        }
    };
};