<template>
  <table>
    <thead>
      <tr>
        <th
          @click="reset()"
          class="corner label"
          :class="{'is-unsorted': isUnsorted}">
          ↓ {{ isUnsorted ? 'sort' : 'reset' }} →
        </th>
        <th
          v-for="metric in sortedMetrics"
          class="top-header"
          transition="shuffle">
          <div
            class="top-header label"
            @click="sortRows(metric.id)"
            :title="metric.notes"
            :class="{'selected': rowsort === metric.id}"
            >
            {{metric.display}}
          </div>
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
          @click="sortCols(framework.id)"
          :class="{'selected': colsort === framework.id}"
          >
          <span class="label">{{framework.display}}</span>
        </th>
        <td
          v-for="metric in sortedMetrics"
          transition="shuffle">
          <block
            :score="framework.scores[metric.id]"
            :selected="isSelected(framework.id, metric.id)"
            @click="clickBox(framework.id, metric.id)">
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
      'frameworks',
      'metrics',
      'selected',
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
        this.rowsort = this.rowsort === id ? null : id;
      },
      sortCols: function(id) {
        this.colsort = this.colsort === id ? null : id;
      },
      reset: function() {
        this.rowsort = null;
        this.colsort = null;
      },
      clickBox: function(framework_id, metric_id) {
        this.$emit('clickbox', framework_id, metric_id);
      },
      isSelected: function(framework_id, metric_id) {
        var selected = this.selected.framework_id == framework_id && this.selected.metric_id == metric_id;
        return selected;
      },
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

  th {
    font-size: smaller;
    color: grey;
    position: relative;
  }

  th.top-header {
    height: 120px;
  }

  div.top-header {
    transform: rotate(-60deg);
    display: block;
    position: absolute;
    text-align: left;
    width: 100px;
  }

  .label {
    cursor: pointer;
  }

  .row-label {
    text-align: right;
    padding-right: 5px;
    min-width: 100px;
  }

  .selected {
    color: black;
    text-decoration: underline;
  }

  .shuffle-move {
    transition: transform .5s cubic-bezier(.55,0,.1,1);
  }

  .corner {
    text-align: right;
  }

  .is-unsorted {
    cursor: auto;
  }

  .selectedblock {
    border: 10px solid white;
  }


</style>
