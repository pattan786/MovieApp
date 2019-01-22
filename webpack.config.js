const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
path: __dirname + '/dist',
filename: 'bundle.js'
},
devtool: "cheap-eval-source-map",
module: {
rules: [
{ test: /\.js$/, use: 'babel-loader', exclude: "/node_modules/" },
{ test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'], exclude: "/node_modules/" },
{ test: /\.css$/, use: ['style-loader','css-loader'], exclude: "/node_modules/" },
]
},
plugins: [
new HtmlWebpackPlugin({template: __dirname+ '/src/index.html'})
]
}; 