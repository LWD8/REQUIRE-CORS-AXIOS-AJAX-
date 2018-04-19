define(['Vue'], function(Vue) {
  return Vue.extend({
    data() {
      return {
        msg: 'aaaaaaaaa'
      }
    },
    template: `
    <h3>{{msg}}</h3>
    `
  });
})