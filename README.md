
# SIMPLE WEBPACK 4 BOILERPLATE
## HTML and JS bundling via Webpack 4. HTML and JS live-reloading via webpack-dev-server.


This is a simple, functional boilerplate project centered around Webpack 4. It is configured to bundle javascript by webpack's default config (no specials js loaders used), and HTML bundling via html-loader and html-webpack-plugin.


### INSTRUCTIONS:
Experience both HTML and JS live-reloading in development by running:

```
npm run start
```




### Further information
This is how the project was created:

1. TERMINAL COMMANDS:

```
$	mkdir <project> && cd $_

$	npm init -y

$ npm i webpack webpack-cli webpack-dev-server html-loader html-webpack-plugin --save-dev

$	mkdir src

$	touch src/index.js

$	touch src/index.html
```


2. Added html5 boilerplate code inside index.html



3. Added to package.json the new Webpack 4 npm scripts:

```
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
```


4. Added webpack.config.js to the root of the folder.



5. Added this config code, which gets Webpack to bundle and live-reload the js (by default), and the html (which needs both html-loader and html-wepack-plugin):


```
const HtmlWebPackPlugin = require("html-webpack-plugin");

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


8. The boilerplate is complete. To experience both html and js live-reloading in development, run:

```
npm run start
```


Thank you and good luck.

a





