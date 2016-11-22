window.onload = function () {
  var ReactUI = require('photoeditorsdk/js/PhotoEditorReactUI')

  window.editor = new ReactUI({
    container: document.querySelector('#container'),
    assets: {
      baseUrl: '/build/assets'
    }
  })
}
