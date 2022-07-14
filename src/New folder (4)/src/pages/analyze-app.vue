<template>
  <section class="">
    <analytics-filter @filter="filter" />
    <div
      class="main-content-container flex reverse justify-between main-layout"
    >
      <company-size-chart />
      <company-list />
      <!-- **Deliverables[3]** <router-view /> will contain *<company-list />* + *<company-size-chart />* 
     with dynamic data which will be provided from the params -->
    </div>
  </section>
</template>

<script>
  import analyticsFilter from '../cmps/analytics-filter.vue';
  import CompanySizeChart from '../cmps/company-size-chart.vue';
  import companyList from '../cmps/company-list.vue';
  export default {
    name: 'analyze-app',
    methods: {
      filter(filterBy) {
        this.$store.dispatch({type: 'filter', filterBy});
      },
    },
    components: {
      analyticsFilter,
      CompanySizeChart,
      companyList,
    },
  };
</script>
