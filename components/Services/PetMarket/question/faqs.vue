<template>

  <section
    class="relative py-16 bg-gray-50 lg:px-0 px-4"
  >
    <div
      class="w-full max-w-screen-xl mx-auto relative overflow-hidden flex items-center justify-center lg:justify-start lg:py-8  rounded-lg"
    >
      <header class="text-3xl font-semibold flex items-center text-blue-500">
        <!-- <i class="fa fa-question pl-2"></i> -->
        <h1>اجازه بدهید به سوالات متداول شما پاسخ بدهیم!</h1>
      </header>
    </div>

    <div class="w-full max-w-screen-xl mx-auto rounded-lg lg:pt-0 pt-8">
      <ul class="space-y-2">
        <li>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              @click="openSubMenu(1)"
              :class="submenuIndex == 1 ? 'rounded-t-lg' : 'rounded-lg'"
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span>اپلیکیشن پتومن</span>
              <i
                class="fa w-3 h-3 rotate-180 shrink-0 text-blue-500"
                :class="submenuIndex == 1 ? 'fa-chevron-down' : 'fa-chevron-up'"
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
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span> سرویس های پتومن</span>
              <i
                class="fa w-3 h-3 rotate-180 shrink-0 text-blue-500"
                :class="submenuIndex == 2 ? 'fa-chevron-down' : 'fa-chevron-up'"
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
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-500 border border-gray-200 focus:ring-0 focus:ring-gray-200 gap-3 bg-white"
            >
              <span>عضویت در پتومن</span>
              <i
                class="fa w-3 h-3 rotate-180 shrink-0 text-blue-500"
                :class="submenuIndex == 3 ? 'fa-chevron-down' : 'fa-chevron-up'"
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
import CollapseTransition from "/Module/CollapseTransition.vue";
export default {
  components: {
    CollapseTransition,
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
