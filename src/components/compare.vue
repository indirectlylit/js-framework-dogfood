<template>
  <table>
    <thead>
      <tr>
        <th>Framework</th>
        <th colspan="{{metrics.length}}">Metrics</th>
      </tr>
      <tr class="metrics">
        <th></th>
        <th v-for="metric in metrics">{{metric}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="framework in frameworks">
        <th scope="row">{{framework}}</th>
        <td class="block" v-for="metric in metrics"></td>
      </tr>
    </tbody>
  </table>
</template>


<script>

  module.exports = {
    data: function () {
      return {
        metrics: [
          'simplicity',
          'composability',
          'performance',
          'docs',
          'tooling',
          'file size',
          'community',
          'ecosystem',
        ],
        frameworks: [
          'BB+Mn',
          'Riot',
          'Angular2',
          'React',
          'Vue.js',
        ]
      }
    }
  };

</script>


<style scoped>

  table {
    margin: auto;
  }

  table tbody th {
    text-align: left;
  }

  td, th {
    padding-left: 10px;
  }

  .metrics {
    font-size: smaller;
  }

  .block {
    width: 100px;
    height: 100px;
    background-color: pink;
  }

</style>
