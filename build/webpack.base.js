const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "../dist")
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(jpg|svg|png|jpeg|gif)$/, loader: "file-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../static/index.html")
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: resolve(__dirname, "../static"),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    open: true
  }
};