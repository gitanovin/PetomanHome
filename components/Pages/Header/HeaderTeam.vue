<template>
  <section class="relative pt-16">
    <div
      class="w-full max-w-screen-xl mx-auto relative overflow-hidden flex items-center justify-center lg:justify-start py-8 px-8 rounded-lg mb-8"
    >
      <header
        class="text-3xl font-semibold flex-col items-center text-orange-500 justify-center text-center w-full"
      >
        <Heart class="max-w-28 w-full mx-auto block" />
        <h1>به تیم ما بپیوند</h1>
      </header>
    </div>
  </section>
</template>

<script>
import Heart from "@/components/Icons/Heart.vue";

export default {
  components: {
    Heart,
  },
};
</script>
