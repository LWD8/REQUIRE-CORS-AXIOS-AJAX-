require(['config'], function() {
  require(['Vue', 'home', 'bootstrap', 'promise', 'script/ajax'], function(Vue, Home, bootstrap, promise) {
    Vue.component('home', Home)
    new Vue({
      el: '#app',
      data: {
        aa: 123
      },
      methods: {
        async getData() {
          const res = await promise.REQ_login2({ admin: 'lwd_123', password: '123456' })
          console.log(res)
        },
        async getGetData() {
          const res = await promise.REQ_getToken2()
          console.log(res)
        }
      }
    })
  })
})