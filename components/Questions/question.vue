<template>
  <section>
    <Header />
  </section>
  <section
    class="relative py-16 bg-white/70 backdrop-blur-sm mt-8 rounded-t-3xl"
  >
    <div
      class="w-full max-w-screen-xl mx-auto text-xl font-semibold pb-6 text-black font-fa"
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
    <div class="w-full max-w-screen-xl mx-auto rounded-lg">
      <ul class="space-y-2">
        <li>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              @click="openSubMenu(1)"
              :class="submenuIndex == 1 ? 'rounded-t-lg' : 'rounded-lg'"
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-orange-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span>اپلیکیشن پتومن</span>
              <i
                class="fa fa-chevron-down w-3 h-3 rotate-180 shrink-0 text-orange-500"
                :class="submenuIndex == 1 ? 'fa-chevron-down' : 'rotate-0'"
              ></i>
            </button>
          </h2>
          <div class="question">
            <collapse-transition>
              <div
                v-if="submenuIndex == 1"
                class="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg"
              >
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  این متن تستی است و ادیتور قرار می گیرد
                </p>
              </div>
            </collapse-transition>
          </div>
        </li>
        <li>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              @click="openSubMenu(2)"
              :class="submenuIndex == 2 ? 'rounded-t-lg' : 'rounded-lg'"
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-orange-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span> سرویس های پتومن</span>
              <i
                class="fa fa-chevron-down w-3 h-3 rotate-180 shrink-0 text-orange-500"
                :class="submenuIndex == 2 ? 'fa-chevron-down' : 'rotate-0'"
              ></i>
            </button>
          </h2>
          <div class="question">
            <collapse-transition>
              <div
                v-if="submenuIndex == 2"
                class="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg"
              >
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  این متن تستی است و ادیتور قرار می گیرد
                </p>
              </div>
            </collapse-transition>
          </div>
        </li>

        <li>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              @click="openSubMenu(3)"
              :class="submenuIndex == 3 ? 'rounded-t-lg' : 'rounded-lg'"
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-orange-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span>عضویت در پتومن</span>
              <i
                class="fa fa-chevron-down w-3 h-3 rotate-180 shrink-0 text-orange-500"
                :class="submenuIndex == 3 ? 'fa-chevron-down' : 'rotate-0'"
              ></i>
            </button>
          </h2>
          <div class="question">
            <collapse-transition>
              <div
                v-if="submenuIndex == 3"
                class="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg"
              >
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  این متن تستی است و ادیتور قرار می گیرد
                </p>
              </div>
            </collapse-transition>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Header from "./Header/header.vue";
import CollapseTransition from "/plugins/CollapseTransition.vue";
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
