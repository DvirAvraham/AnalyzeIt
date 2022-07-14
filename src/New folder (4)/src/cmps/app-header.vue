<template>
  <header class="main-header main-layout flex items-center justify-between">
    <div class="top-header flex align-center">
      <div class="container flex items-center justify-between">
        <div class="logo">
          <!-- <img src="../assets/imgs/logo.svg" alt="Logo" /> -->
          .brew
          <span class="logo-arrow"
            ><i class="fa-solid fa-caret-right"></i
          ></span>
        </div>
        <div>
          <router-link class="link" to="/">Home </router-link>
        </div>
        <div>
          <router-link class="link" to="/analyze">Analytics</router-link>
        </div>
      </div>
      <img
        class="circle-ellipsis"
        src="../assets/imgs/circle-ellipsis.png"
        alt=""
      />
    </div>
    <div class="info flex justify-center">i</div>
  </header>
</template>
