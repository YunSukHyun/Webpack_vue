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
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules\/(?!axios)/ axios를 제외한 다른 node_modules는 변환하지 않겠다.
        exclude: /node_modules/,
        use: "babel-loader",
      },
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
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
            @use "sass:color";
            @use "sass:list";
            @use "sass:map";
            @use "sass:math";
            @use "sass:meta";
            @use "sass:selector";
            @use "sass:string";
            @use "~/scss/_variables" as *;`,
            },
          },
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
  devServer: {
    historyApiFallback: true,
  },
};
