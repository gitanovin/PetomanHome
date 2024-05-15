<template>
  <main class="font-iransans">
    <div class="Hero isolate opacity-40"></div>
    <div class="relative">
      <HeaderDesktop />
      <HeaderMobile />
   
   
         <Landing />
    </div>

      <Footer />
  
  </main>
</template>
<script setup>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import Landing from "@/components/Services/PetMarket/landing.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
