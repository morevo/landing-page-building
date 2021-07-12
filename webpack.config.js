const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  // First, let's define an entry point for webpack to start its crawling.
  mode: "development",
  entry: "./src/js/app.js",
  // Second, we define where the files webpack produce, are placed
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {  /* For images */
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.less$/, // .less and .css
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },

      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  // Add an instance of the MiniCssExtractPlugin to the plugins list
  // But remember - only for production!
  plugins: isProduction ? [new MiniCssExtractPlugin()] : [],
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};

module.exports = config;
