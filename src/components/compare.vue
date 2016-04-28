<template>
  <table>
    <thead>
      <tr>
        <th
          v-on:click="reset()"
          :class="{'disabled': isUnsorted}">
          ↓ {{ isUnsorted ? 'sort' : 'reset' }} →
        </th>
        <th
          class="metrics"
          v-on:click="sortRows(metric.id)"
          v-for="metric in sortedMetrics"
          transition="shuffle"
          :title="metric.notes"
          :class="{'disabled': rowsort === metric.id}">
          {{metric.display}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="framework in sortedFrameworks"
        transition="shuffle"
        >
        <th
          scope="row"
          class="row-label"
          v-on:click="sortCols(framework.id)"
          :class="{'disabled': colsort === framework.id}"
          >
          {{framework.display}}
        </th>
        <td
          v-for="metric in sortedMetrics"
          transition="shuffle">
          <block
            :score="framework.scores[metric.id]"
            :notes="framework.notes[metric.id]">
          </block>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>

  var Vue = require('vue');
  Vue.use(require('vue-animated-list'));

  module.exports = {
    components: {
      block: require('./block'),
    },
    props: [
      'metrics',
      'frameworks'
    ],
    data: function() {
      return {
        rowsort: null,
        colsort: null,
        frameworkDict: {},
      }
    },
    computed: {
      isUnsorted: function() {
        return !(this.rowsort || this.colsort);
      },
      sortedMetrics: function() {
        var vm = this;
        var temp = vm.metrics.slice(0); // copy
        if (vm.colsort) {
          temp.sort(function(metric_a, metric_b) {
            var a = vm.frameworkDict[vm.colsort].scores[metric_a.id];
            var b = vm.frameworkDict[vm.colsort].scores[metric_b.id];
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
        }
        else {
          temp.sort(function(metric_a, metric_b) {
            var a = vm.frameworks.reduce(function(accumulator, framework){
              return accumulator + framework.scores[metric_a.id];
            }, 0);
            var b = vm.frameworks.reduce(function(accumulator, framework){
              return accumulator + framework.scores[metric_b.id];
            }, 0);
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
        }
        return temp;
      },
      sortedFrameworks: function() {
        var vm = this;
        var temp = vm.frameworks.slice(0); // copy
        if (vm.rowsort) {
          temp.sort(function(framework_a, framework_b) {
            var a = framework_a.scores[vm.rowsort];
            var b = framework_b.scores[vm.rowsort];
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
        }
        else {
          temp.sort(function(framework_a, framework_b) {
            var a = vm.metrics.reduce(function(accumulator, metric) {
              return accumulator + framework_a.scores[metric.id];
            }, 0);
            var b = vm.metrics.reduce(function(accumulator, metric) {
              return accumulator + framework_b.scores[metric.id];
            }, 0);
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
        }
        return temp;
      },
    },
    methods: {
      sortRows: function(id) {
        this.rowsort = id;
      },
      sortCols: function(id) {
        this.colsort = id;
      },
      reset: function() {
        this.rowsort = null;
        this.colsort = null;
      }
    },
    created: function() {
      var vm = this;
      vm.frameworks.forEach(function(framework) {
        vm.frameworkDict[framework.id] = framework;
      });
    }
  };

</script>


<style scoped>

  table {
    margin: auto;
  }

  th {
    font-size: smaller;
    cursor: pointer;
  }

  .row-label {
    text-align: right;
    padding-right: 5px;
  }

  .disabled {
    color: #ADADAD;
    cursor: auto;
  }

  .shuffle-move {
    transition: transform .5s cubic-bezier(.55,0,.1,1);
  }


</style>
