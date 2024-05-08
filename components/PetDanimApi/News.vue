<template>
  <section class="w-full lg:max-w-screen-xl lg:mx-auto relative mb-16">
    <div class="relative overflow-hidden my-6 lg:px-0">
      <header class="flex items-center justify-between">
        <Title />
        <ReadMore />
      </header>

      <div class="News" id="blog">
        <Splide
          :options="{
            perMove: 1,
            type: 'loop',
            direction: 'rtl',
            gap: '2rem',
            perPage: 3,
            breakpoints: {
              400: {
                perPage: 1,
                padding: '3rem',
                gap: '3rem',
              },

              640: {
                perPage: 1,
                padding: '3rem',
                gap: '1rem',
              },
              768: {
                perPage: 1,
                gap: '2rem',
                padding: '3rem',
              },
              1024: {
                perPage: 2,
                gap: '2rem',
                padding: '6rem',
              },
            },
          }"
        >
          <SliderItem />
        </Splide>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "./Header/Title.vue";
import ReadMore from "./Header/ReadMore.vue";
import SliderItem from "./Posts/SliderItem.vue";
</script>
