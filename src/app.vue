<template>
  <div id="app">
    <h3>Comparison of front-end JS frameworks</h3>
    <p>An unscientific overview for Kolibri</p>
    <compare></compare>
  </div>
</template>


<script>

  module.exports = {
    components: {
      compare: require('./components/compare'),
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

  h3, p {
    text-align: center;
  }

</style>
