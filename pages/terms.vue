<template>
  <main class="font-iransans">
    <div class="Hero isolate relative">
      <HeaderDesktop />
      <HeaderMobile />
      <Terms />
    </div>

    <Footer />
  </main>
</template>
<script setup>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import Terms from "@/components/Pages/terms.vue";

import Footer from "@/components/Footer/Footer.vue";
</script>
