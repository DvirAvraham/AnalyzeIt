<template>
  <section class="analytics-filter">
    <div class="nav flex main-layout">
      <div class="activ">Market Analysis</div>
      <div>Copetitive Analysis</div>
      <button class="add flex items-center justify-center">+</button>
    </div>
    <sort-by />
    <filterBy @filter="filter" />
  </section>
</template>

<script>
  import sortBy from '../cmps/sort-by.vue';
  import filterBy from '../cmps/filter-by.vue';
  export default {
    name: 'analytics-filter',
    methods: {
      filter(filter) {
        this.$emit('filter', filter);
      },
    },

    components: {
      sortBy,
      filterBy,
    },
  };
</script>
