<template>
  <section class="relative pt-16">
    <div
      class="w-full max-w-screen-xl mx-auto relative overflow-hidden flex items-center justify-center lg:justify-start lg:py-26 py-26 px-8"
    >
      <div class="grid lg:grid-cols-12 gap-6 relative z-10 overflow-hidden">
        <div class="col-span-12 lg:col-span-8 text-center lg:text-right">
          <Title />
          <SubTitle />
          <Buttons />
        </div>

        <Image />
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "./Title.vue";
import SubTitle from "./SubTitle.vue";
import Buttons from "./Buttons.vue";
import Image from "./Image.vue";
</script>
