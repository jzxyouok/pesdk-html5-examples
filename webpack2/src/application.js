window.onload = function () {
  var ReactUI = require('photoeditorsdk/js/PhotoEditorReactUI')

  // Include css
  require('photoeditorsdk/css/PhotoEditorReactUI.css')

  // Run the UI
  window.editor = new ReactUI({
    container: document.querySelector('#container')
  })
}
