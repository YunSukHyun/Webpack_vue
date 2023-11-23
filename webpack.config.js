const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".vue", ".js"], // vue, js 확장자를 생략하겠다.
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // .vue로 끝나는 확장자만
        use: "vue-loader", // 해석 도움
      },
      {
        test: /\.s?css$/,
        use: [
          // 순서가 중요 먼저 로드가 되야하는 걸 뒤에
          "vue-style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: "./src/index.html" }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
};
