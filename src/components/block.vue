<template>
  <div class="block"
    :style="styles"
    :class="{'selected':selected}">
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
      'selected'
    ],
    computed: {
      styles: function() {
        var width = this.selected ? '5px' : '0';
        return {
          border: width + " solid white",
          backgroundColor: color(this.score)
        };
      },
    },
  };

</script>


<style scoped>

  .block {
    width: 60px;
    height: 60px;
    display: flex;
    cursor: pointer;
    transition: border 0.05s;
  }

</style>
