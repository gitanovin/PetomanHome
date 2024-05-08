<template>
  <section>
    <Header />
  </section>
  <section class="relative py-16">
    <div
      class="w-full max-w-screen-xl mx-auto text-xl font-semibold pb-16 text-black font-fa"
    >
      <div
        class="relative w-full transform lg:px-0 px-4 transition-all opacity-100 scale-100"
      >
        <div class="overflow-hidden rounded-lg bg-white border">
          <div class="relative">
            <input
              class="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border-0"
              placeholder="کلید واژه"
              aria-label="Search components"
              role="combobox"
              type="text"
              value=""
            /><i
              class="fa fa-search pointer-events-none absolute top-4 right-4 h-6 w-6 text-slate-400"
            >
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-screen-xl lg:mx-auto p-6 rounded-lg">
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
        <div
          class="relative rounded-2xl bg-white px-6 py-6 shadow-md shadow-slate-100 flex-1 justify-center text-center"
        >
          <a
            href=""
            class="focus:outline-none flex-col justify-center text-center"
          >
            <p class="text-lg font-bold text-gray-900">حامیان</p>
            <p class="text-xs text-gray-500 pt-2">
              روزهای مهربانی،کمک به حیوانات...
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "./Header/header.vue";
</script>
