require.config({
  paths: {
    'photoeditorsdk': 'js/PhotoEditorSDK',
    'pesdk-react-ui': 'js/PhotoEditorReactUI',
    'react': 'vendor/react',
    'react-dom': 'vendor/react-dom'
  }
})

require(['pesdk-react-ui'], function (ReactUI) {
  window.editor = new ReactUI({
    container: document.querySelector('#container')
  })
})
