<template>
  <section class="home flex flex-col items-center justify-center">
    <div class="img">
      <img src="../assets/imgs/logo.svg" alt="" />
    </div>
    <div class="info text-center flex flex-col items-star">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <button @click="$router.push('/analyze')" class="btn btn-info">
        explore now
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'home',
  };
</script>
