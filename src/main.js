var Vue = require('vue');

// turn `body` into the root vue instance and register the `app` component
new Vue({
  el: 'body',
  components: {
    app: require('./app')
  }
});
