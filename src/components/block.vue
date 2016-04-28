<template>
  <div class="block" v-bind:style="scaledColor">
    <div>{{{notes}}}</div>
  </div>
</template>


<script>

  var d3_scale = require('d3-scale');

  var color = d3_scale.scaleLinear()
    .domain([0, 5])
    .range(["brown", "steelblue"]);

  module.exports = {
    props: [
      'score',
      'notes'
    ],
    computed: {
      scaledColor: function() {
        return {
          backgroundColor: color(this.score)
        };
      }
    },
  };

</script>


<style scoped>

  .block {
    width: 60px;
    height: 60px;
    display: flex;
  }

</style>
