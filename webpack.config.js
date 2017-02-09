const HtmlWebpackPlugin = require('html-webpack-plugin');
const AudioSpritePlugin = require('webpack-audio-sprite-plugin');
const path = require('path');
const _source = path.resolve(__dirname, "source");
const _build = path.resolve(__dirname, "build");

module.exports = {
    entry: path.resolve(_source, "app.js"),
    output: {
        filename: "app.bundle.js",
        path: _build,
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude:/node_modules/, loaders: ["babel-loader"] },
          { test: /\.s?css$/, exclude:/node_modules/, loaders: ["style-loader", "css-loader", "sass-loader"] },
          // { test: /\.(mp3|ogg)$/, exclude:/node_modules/, loader: AudioSpritePlugin.loader() },
          // { test: /\.(mp3|ogg|json)$/, exclude:/node_modules/, loader: ["file-loader", "url-loader"] }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(_source, "index.html"),
            filename: "index.html",
            inject: "body",
        }),
        new AudioSpritePlugin()
    ],
};

//           { test: /\.js$/, exclude:/node_modules/, loaders: ["babel-loader", "eslint-loader"] },

