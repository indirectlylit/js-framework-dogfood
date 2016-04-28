<template>
  <div>
    <div class="header">
      <h3>Comparison of front-end JS frameworks</h3>
      <p>An unscientific overview for Kolibri</p>
    </div>
    <div class="wrapper">
      <compare
        :metrics="metrics"
        :frameworks="frameworks"
        :selected="selected"
        @clickbox="select">
      </compare>
      <detailview
        class="details"
        :metrics="metrics"
        :frameworks="frameworks"
        :selected="selected"
        >
      </detailview>
    <div>
  </div>
</template>


<script>

  module.exports = {
    components: {
      compare: require('./components/compare'),
      detailview: require('./components/detailview'),
    },
    data: function() {
      return {
        frameworks: null,
        metrics: null,
        selected: {metric_id: null, framework_id: null}
      };
    },
    methods: {
      select: function(framework_id, metric_id) {
        if (this.selected.metric_id === metric_id && this.selected.framework_id === framework_id) {
          this.selected.metric_id = null;
          this.selected.framework_id = null;
        } else {
          this.selected.metric_id = metric_id;
          this.selected.framework_id = framework_id;
        }
      }
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
    color: #AF8402;
    text-decoration: none;
  }

  .header h3, .header p {
    text-align: center;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    min-width: 850px
  }

  .details {
    padding-left: 50px;
    min-width: 250px;
    margin-top: 100px;
  }

</style>
