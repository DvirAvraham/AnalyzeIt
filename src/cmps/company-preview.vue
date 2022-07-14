<template>
  <div class="company-preview">
    <div class="container flex items-center justify-between">
      <div class="flex items-center">
        <div class="preview-idx">{{ idx + 1 }}</div>
        <div class="img"></div>
        <div>{{ companyData.name }}</div>
      </div>
      <div class="links"><img src="../assets/imgs/links.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'company-list',
    props: {
      companyData: Object,
      idx: Number,
    },
  };
</script>
