<template>
  <div class="border flex column">
    <BubbleChart :chartData="testData" class="chart flex-1" />
    <div class="chart-desc">
      <div>Company Size</div>
      <div>
        ⚫ <span class="medium-bubble">⚫</span
        ><span class="large-bubble">⚫</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {BubbleChart} from 'vue-chart-3';
  import {Chart, registerables} from 'chart.js';

  Chart.register(...registerables);

  export default {
    name: 'Home',

    created() {
      this.testData.datasets[0].data = this.adjustData(
        this.$store.getters.data
      );
    },
    data() {
      return {
        dataLength: 60,
        testData: {
          datasets: [
            {
              label: '',
              data: [],
              backgroundColor: 'rgb(74 74 74 / 59%)',
            },
          ],
        },
      };
    },
    methods: {
      adjustData(companyData) {
        const data = [];
        for (let i = 0; i < companyData?.length; i++) {
          data.push(companyData[i].size);
        }
        return data;
      },
    },

    components: {BubbleChart},
  };
</script>
