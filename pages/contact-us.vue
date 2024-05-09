<template>
  <main class="font-iransans">
    <div class="isolate relative">
      <HeaderDesktop />
      <HeaderMobile />
      <ContactUs />
    </div>

    <Footer />
  </main>
</template>
<script setup>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import ContactUs from "@/components/Pages/contact.vue";

import Footer from "@/components/Footer/Footer.vue";
</script>
