define(function() {
  require.config({
    baseUrl: './js',
    paths: {
      'jquery': 'lib/jquery-3.3.1.min',
      'Vue': 'lib/vue.min',
      'bootstrap': 'lib/bootstrap.min',
      'promise': 'api/promise',

      'home': '../view/home'
    },
    shim: {
      bootstrap: {
        deps: [
          'jquery',
          'css!../css/bootstrap.min.css'
        ]
      }
    },
    map: {
      '*': {
        css: 'lib/css.min'
      }
    }
  })
})