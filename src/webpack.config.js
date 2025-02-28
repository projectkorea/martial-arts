const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

module.exports = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    filename: "main.js",
    path: OUTPUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: MODE === "development"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  devtool: MODE === "development" ? "eval-source-map" : "source-map",
  target: ["web", "es5"],
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all"
    }
  }
};
