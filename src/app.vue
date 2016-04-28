<template>
  <div id="app">
    <h3>Comparison of front-end JS frameworks</h3>
    <p>An unscientific overview for Kolibri</p>
    <compare
      :metrics="metrics"
      :frameworks="frameworks">
    </compare>
  </div>
</template>


<script>

  module.exports = {
    components: {
      compare: require('./components/compare'),
    },
    data: function() {
      return {
        frameworks: null,
        metrics: null
      };
    },
    created: function () {
      // creates a context for dynamic loading
      var req = require.context("./data", true);

      // load the high-level meta-data
      var frameworks = req('./frameworks.json');
      var metrics = req('./metrics.json');

      // load the markdown files
      frameworks.forEach(function(framework) {
        framework.notes = {};
        metrics.forEach(function(metric) {
          var notesFile = './'+framework.id+'/'+metric.id+'.md';
          framework.notes[metric.id] = req(notesFile);
        });
      });

      // save to state
      this.$data.frameworks = frameworks;
      this.$data.metrics = metrics;
    }
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
