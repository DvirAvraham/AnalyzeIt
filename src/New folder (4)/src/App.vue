<template>
  <app-header />
  <router-view />
</template>

<script>
  import appHeader from './cmps/app-header.vue';

  export default {
    name: 'app',
    companyData() {
      return {
        companyData: null,
      };
    },
    async created() {
      await this.$store.dispatch({type: 'loadData'});
    },
    components: {
      appHeader,
    },
  };
</script>
