<template>
  <section class="filter-by flex justify-between main-layout">
    <div class="options flex">
      <div v-for="option in options" :class="{active: option === options[0]}">
        {{ option }}
      </div>
    </div>
    <div class="search-icon-container flex align-center">
      <span class="upload"><i class="fa fa-file-o"></i></span>
      <i class="fa fa-search search" aria-hidden="true"></i>

      <input type="text" placeholder="Search" @input="filter" />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'filter-by',
    data() {
      return {
        options: [
          'lorem ipsum',
          'dolor sit',
          'amet consectetur',
          'adipisicing',
        ],
      };
    },
    methods: {
      filter(ev) {
        const filterBy = {
          name: ev.target.value,
        };
        this.$emit('filter', {...filterBy});
      },
    },
  };
</script>
