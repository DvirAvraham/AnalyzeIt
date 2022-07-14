<template>
  <section class="sort" v-if="sortBys">
    <div class="container flex items-center main-layout">
      <div v-for="sortBy in sortBys" class="category">
        {{ sortBy }} (All)
        <span class="sort-arrow"><i class="fa fa-caret-down"></i></span>
      </div>
      <div class="btn-container flex items-center">
        <div class="btn">Year</div>
        <div class="btn">Month</div>
      </div>
      <div class="flex items-center">
        <div>
          <div class="data-desc">All Data</div>
          <div class="data-date">June 01 , 2020 - Future</div>
        </div>
        <div class="data-sort"><i class="fa fa-caret-down"></i></div>
        <div class="calender"><i class="fa fa-calendar-o"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'analytics-filter',
    data() {
      return {
        sortBys: ['Companies', 'Topics', 'Verticals', 'Audiences', 'Regions'],
      };
    },
  };
</script>
