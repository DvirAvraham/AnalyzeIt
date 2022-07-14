<template>
  <div class="company-list border">
    <div class="header flex align-center">
      <div>No.</div>
      <div>Name</div>
    </div>
    <div class="container flex column">
      <companyPreview
        v-for="(companyData, idx) in companiesData"
        :companyData="companyData"
        :idx="idx"
      />
    </div>
  </div>
</template>

<script>
  import companyPreview from './company-preview.vue';
  export default {
    name: 'company-list',
    computed: {
      companiesData() {
        return this.$store.getters.data;
      },
    },
    components: {
      companyPreview,
    },
  };
</script>
