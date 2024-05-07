<template>
  <main class="font-iransans">
    <div class="Hero isolate relative">
      <HeaderDesktop />
      <HeaderMobile />
      <Hero />
      <Services />
    </div>
    <Slider />
    <About />
    <News />
    <Footer />
  </main>
</template>
<script setup>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import Hero from "@/components/Hero/Hero.vue";
import Services from "@/components/Services/Services.vue";
import Slider from "@/components/Slider/slider.vue";
import About from "@/components/About/About.vue";
import News from "@/components/PetDanimApi/News.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
