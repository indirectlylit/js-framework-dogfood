<template>
  <div>
    <div v-if="show">
      <h3>
        {{frameworkName}} {{metricName}}
      </h3>
      <div>
        {{{ notes }}}
      </div>
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
    }
  };

</script>


<style scoped>

  h3 {
    position: relative;
  }

</style>
