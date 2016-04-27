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
        <td v-for="metric in framework.metrics">
          <block :metric="metric"></block>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>

  module.exports = {
    components: {
      block: require('./block'),
    },
    data: function () {
      return {
        metrics: [
          {
            id: 'simplicity',
            display: "Simplicity",
            notes: "",
          },
          {
            id: 'composability',
            display: "Composability",
            notes: "",
          },
          {
            id: 'performance',
            display: "Performance",
            notes: "",
          },
          {
            id: 'documentation',
            display: "Documentation",
            notes: "",
          },
          {
            id: 'tooling',
            display: "Tooling",
            notes: "",
          },
          {
            id: 'size',
            display: "File Size",
            notes: "",
          },
          {
            id: 'community',
            display: "Community",
            notes: "",
          },
          {
            id: 'extensibility',
            display: "Extensibility",
            notes: "",
          },
        ],
        frameworks: [
          {
            id: 'bbmn',
            display: 'BB+Mn',
            metrics: {
              simplicity: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              composability: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              performance: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              documentation: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              tooling: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              size: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              community: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              ecosystem: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
            }
          },
          {
            id: 'riot',
            display: 'Riot',
            metrics: {
              simplicity: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              composability: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              performance: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              documentation: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              tooling: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              size: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              community: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              ecosystem: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
            }
          },
          {
            id: 'angular2',
            display: 'Angular2',
            metrics: {
              simplicity: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              composability: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              performance: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              documentation: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              tooling: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              size: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              community: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              ecosystem: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
            }
          },
          {
            id: 'react',
            display: 'React',
            metrics: {
              simplicity: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              composability: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              performance: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              documentation: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              tooling: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              size: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              community: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              ecosystem: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
            }
          },
          {
            id: 'vue',
            display: 'Vue.js',
            metrics: {
              simplicity: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              composability: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              performance: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              documentation: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              tooling: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              size: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              community: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
              ecosystem: {
                score: Math.round(Math.random()*5),
                notes: "",
              },
            }
          },
        ]
      }
    }
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
