<template>
  <div id="app">
    <h3>Comparison of front-end JS frameworks</h3>
    <compare></compare>
  </div>
</template>

<script>
var compare = require('./components/compare');

module.exports = {
  components: {
    compare: compare,
  },
};
</script>

<style>
html {
  height: 100%;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  height: 100%;
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

a {
  color: #42b983;
  text-decoration: none;
}

</style>
