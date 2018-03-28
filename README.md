
#SIMPLEST WEBPACK 4 SETUP

###Created March 2018

This is a simple, functional boilerplate project centered around Webpack 4. It is configured to bundle javascript by webpack-default (no specials js loaders used), and HTML bundling via html-loader and html-webpack-plugin.


###INSTRUCTIONS:
Get both html and js live-reloading for development by running:
```
**npm run start**
```



This is how the project was created:

1.
TERMINAL COMMANDS:

```
$	mkdir <project> && cd $_

$	npm init -y

$ 	npm i webpack webpack-cli webpack-dev-server html-loader html-webpack-plugin --save-dev

$	mkdir src

$	touch src/index.js

$	touch src/index.html
```


2.
add html5 boilerplate code inside index.html



3.
Add to package.json the new Webpack 4 npm scripts:

"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}



4.
Add webpack.config.js to the root of the folder.



7.
Added this config code, which gets Webpack to bundle and live-reload the js (by default), and the html (which needs both html-loader and html-wepack-plugin):


const HtmlWebPackPlugin = require("html-webpack-plugin");

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
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
```


8
Get both html and js live-reloading for development by running:
```
npm run start
```





