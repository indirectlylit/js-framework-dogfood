<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th colspan="{{metrics.length}}">Metrics</th>
      </tr>
      <tr>
        <th></th>
        <th class="metrics" v-for="metric in metrics">{{metric.display}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="framework in frameworks">
        <th scope="row" class="row-label">{{framework.display}}</th>
        <td v-for="metric in metrics">
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

  module.exports = {
    props: [
      'metrics',
      'frameworks'
    ],
    components: {
      block: require('./block'),
    },
  };

</script>


<style scoped>

  table {
    margin: auto;
  }

  .row-label {
    text-align: right;
    padding-right: 5px;
  }

  .metrics {
    font-size: smaller;
  }

</style>
