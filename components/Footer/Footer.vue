<template>
  <footer class="w-full max-w-screen-xl mx-auto font-fa">
    <div class="footer-desktop items-center justify-between p-6 hidden lg:flex">
      <Menu />
      <Social />
    </div>
    <FooterMobile />
  </footer>
</template>
<script setup>
import Menu from "./Menu.vue";
import Social from "./Social.vue";
import FooterMobile from "./FooterMobile.vue";
</script>
