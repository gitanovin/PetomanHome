<template>
  <main class="font-iransans">
    <div class="Hero isolate relative">
      <HeaderDesktop />
      <HeaderMobile />
      <Questions />
    </div>

    <Footer />
  </main>
</template>
<script setup>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import Questions from "@/components/Questions/question.vue";

import Footer from "@/components/Footer/Footer.vue";
</script>
