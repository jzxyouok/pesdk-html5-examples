# Using Webpack 1 to include PhotoEditorSDK for HTML5 into your project

This example demonstrates how to include PhotoEditorSDK into your project, bundled using webpack.
PhotoEditorSDK is a NPM dependency of this project, which allows us to easily keep the SDK up-to-date
and include it using a simple `require()` call. We're also including PhotoEditorSDK's CSS files using
webpack's `style-loader`.

### Building this project

Please run the following commands to build the project:

```bash
$ npm install
; or, if you're running `yarn`, which is recommended
$ yarn

$ npm run build
; or, using `yarn`
$ yarn run build
```
