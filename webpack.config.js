'use strict';
var webpack = require('webpack');

var config = {
    context: __dirname + '/src', // `__dirname` is root of project and `src` is source
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist', // `dist` is the destination
        filename: 'bundle.js',
        publicPath: "/assets"
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Check for all js files
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }, {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.json$/,
                loader: "json-loader" //JSON loader
            }
        ]
    },
    //To run development server
    devServer: {
        contentBase: __dirname + '/src'
    },

    devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
    config.devtool = "source-map";
}

module.exports = config;
