<template>
  <section class="relative overflow-auto">
    <Header />
  </section>
  <section class="pb-16 z-10 -mt-44 relative">
    <div
      class="w-full max-w-screen-xl mx-auto text-xl font-semibold pb-6 text-black font-fa"
    >
      <div class="grid grid-cols-12 gap-4">
        <article class="lg:col-span-8 col-span-12">
          <div
            class="bg-white border border-gray-100 w-full text-gray-700 rounded-lg py-6"
          >
            <div
              class="relative w-full transform transition-all opacity-100 scale-100 border-b border-dashed pb-6 px-6"
            >
              <div class="overflow-hidden rounded-lg bg-white border">
                <div class="relative">
                  <input
                    class="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border-0"
                    placeholder="جستجوی نام شهر"
                    aria-label="Search components"
                    role="combobox"
                    type="text"
                    value=""
                  /><i
                    class="fa fa-search pointer-events-none absolute top-4 right-4 h-6 w-6 text-slate-400"
                  ></i>
                </div>
              </div>
            </div>

            <div class="p-6 space-y-4">
              <div class="mb-lg">
                <h2><span class="font-bold">دفتر مرکزی</span></h2>
                <section class="text-sm font-medium font-fas space-y-2">
                  <div class="mt-4">
                    <a
                      href="https://www.google.com/maps/dir/Current+Location/35.803652716799235,51.41993214127801"
                      class="hover-primary"
                      >آدرس: تهران - زعفرانیه - خیابان شهید فلاحی - تقاطع خیابان
                      مقدس اردبیلی - پلاک 2</a
                    >
                  </div>
                  <p class="text-sm">کد پستی: 1987913151</p>
                </section>
              </div>

              <div class="mb-lg">
                <h2><span class="font-bold"> تبریز</span></h2>
                <section class="text-sm font-medium font-fas space-y-2">
                  <div class="mt-4">
                    <a
                      href="https://www.google.com/maps/dir/Current+Location/35.803652716799235,51.41993214127801"
                      class="hover-primary"
                      >آدرس: تهران - زعفرانیه - خیابان شهید فلاحی - تقاطع خیابان
                      مقدس اردبیلی - پلاک 2</a
                    >
                  </div>
                  <p class="text-sm">کد پستی: 1987913151</p>
                </section>
              </div>

              <div class="mb-lg">
                <h2><span class="font-bold"> ارومیه</span></h2>
                <section class="text-sm font-medium font-fas space-y-2">
                  <div class="mt-4">
                    <a
                      href="https://www.google.com/maps/dir/Current+Location/35.803652716799235,51.41993214127801"
                      class="hover-primary"
                      >آدرس: تهران - زعفرانیه - خیابان شهید فلاحی - تقاطع خیابان
                      مقدس اردبیلی - پلاک 2</a
                    >
                  </div>
                  <p class="text-sm">کد پستی: 1987913151</p>
                </section>
              </div>
            </div>
          </div>
        </article>
        <aside class="lg:col-span-4 col-span-12">
          <div
            class="bg-white border border-gray-100 w-full text-gray-700 rounded-lg pb-6"
          >
            <h1
              class="p-6 py-10 flex justify-center items-center border-b border-dashed"
            >
              تماس با ما
            </h1>
            <section class="p-6 space-y-6">
              <p class="text-sm">
                تلفن پشتیبانی:<span class="font-fas">044363577786</span>
              </p>
              <p class="text-sm">
                فکس:<span class="font-fas">044363577786</span>
              </p>
              <p class="text-sm">
                پست الکترونیک:<span class="font-fas">044363577786</span>
              </p>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "./Header/header.vue";
import CollapseTransition from "/Module/CollapseTransition.vue";
export default {
  components: {
    CollapseTransition,
    Header,
  },

  data() {
    return {
      submenuIndex: null,
    };
  },

  methods: {
    openSubMenu(index) {
      if (this.submenuIndex == index) {
        this.submenuIndex = null;
      } else {
        this.submenuIndex = index;
      }
    },
  },
};
</script>
