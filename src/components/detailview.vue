<template>
  <div>
    <div v-if="show">
      <h3>
        {{frameworkName}} {{metricName}}
      </h3>
      <div v-on:click="clicked">
        {{{ notes }}}
      </div>
    </div>
    <div v-else>
      <div class="help">← click the blocks for details</div>
    </div>
  </div>
</template>


<script>


  module.exports = {
    props: [
      'frameworks',
      'metrics',
      'selected',
    ],
    computed: {
      show: function() {
        return this.selected.metric_id && this.selected.framework_id
      },
      frameworkName: function() {
        var vm = this;
        return vm.frameworks.find(function(framework) {
          return framework.id === vm.selected.framework_id;
        }).display;
      },
      metricName: function() {
        var vm = this;
        return vm.metrics.find(function(metric) {
          return metric.id === vm.selected.metric_id;
        }).display;
      },
      notes: function() {
        var vm = this;
        var notes = vm.frameworks.find(function(framework) {
          return framework.id === vm.selected.framework_id;
        }).notes[vm.selected.metric_id];
        return notes
      }
    },
    methods: {
      clicked: function(event) {
        // open links in a new tab
        if (event.target.href) {
          var win = window.open(event.target.href, '_blank');
          win.focus();
          event.preventDefault();
        }
      }
    }
  };

</script>


<style scoped>

  h3 {
    position: relative;
  }

  .help {
    font-size: smaller;
    font-weight: bold;
    color: grey;
    position: relative;
    top: 350px;
  }

</style>
