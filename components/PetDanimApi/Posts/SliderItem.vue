<template>
  <SplideSlide class="rounded-lg relative">
    <article
      class="splide__slide bg-white rounded-md shadow-md shadow-gray-300/40 group overflow-hidden relative h-[250px] lg:h-[450px] before:bg-gradient-to-t before:from-black before:to-black/10 before:absolute before:bottom-0 before:w-full before:h-44 before:z-0"
      aria-label="18 / 20"
    >
      <Image />
      <div
        class="z-10 absolute w-full bg-black/20 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block"
      >
        <div class="flex justify-between items-center py-2 px-4 text-sm w-full">
          <PostReadmore />
          <Social />
        </div>
      </div>

      <div
        class="absolute w-full bottom-0 opacity-100 transition-all duration-300"
      >
        <div class="caption p-6">
          <PostTitle />
          <Auther />
          <Description />
        </div>

        <div
          class="justify-between items-center border-t border-gray-50/10 py-2 px-4 text-sm group-hover:bottom-0 group-hover:opacity-0 text-white hidden lg:flex w-full"
        >
          <PostReadmore />
          <View />
        </div>

        <div
          class="flex justify-between items-center mt-3 lg:hidden mb-0 px-4 bg-black/60 w-full py-3"
        >
          <span
            class="inline-flex lg:hidden items-center text-sm leading-none text-gray-400 cursor-pointer shared"
          >
            <i class="fa fa-share text-white"></i
          ></span>
        </div>
      </div>
    </article>
  </SplideSlide>
</template>

<script setup>
import PostTitle from "./Title.vue";
import Image from "./Image.vue";
import Description from "./Description.vue";
import PostReadmore from "./Readmore.vue";
import Auther from "./Auther.vue";
import Social from "./Share/Social.vue";
</script>
