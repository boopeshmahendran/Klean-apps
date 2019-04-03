const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const customProperties = require("postcss-custom-properties");
const CSS_CONSTANTS = require("./src/css-constants");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  customProperties({
                    variables: CSS_CONSTANTS
                  }),
                  // Safari and Internet Explorer don't auto-update and so are listed
                  // here explicitly. Firefox and Chrome are handled by including all
                  // browsers which have > 1% market share.
                  autoprefixer({
                    browsers: ["safari >= 7", "explorer >= 9", "> 1%"]
                  })
                ];
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 3000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};