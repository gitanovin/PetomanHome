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
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="InstallClose==true"
    >

      <div class="fixed inset-0 bg-white transition-opacity font-fas"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
  
          <div
            class="relative transform overflow-hidden rounded-2xl bg-gray-50/50 text-left border-dashed border border-gray-10 transition-all sm:my-8 w-full lg:max-w-lg hidden lg:block"
          >
            <div>
              <div class="border-b border-dashed py-10">
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-md  text-white "
                >
                 <img src="/logo192.png">
                </div>
                <div class="install text-center mt-6">
                  <h3
                    class="text-lg font-bold leading-6 text-gray-800 font-fas"
                    id="modal-title"
                  >
                    نصب نسخهٔ وب اپلیکیشن پتومن
                  </h3>
                </div>
              </div>

              <div class="text-right py-6 font-fas">
                <div class="mt-2 space-y-6  px-6">
                  <p class="text-sm  text-gray-800 font-medium">
                    <span>
                      ۱- در نوار بالای صفحه، سمت راست آدرس‌بار، روی دکمهٔ
                    </span>

                    <span
                      class="bg-gray-100 p-1 rounded-md inline-flex items-center justify-center text-xl mx-1"
                      ><i class="fa fa-display-arrow-down"></i
                    ></span>
                    <span>کلیک کنید.</span>
                  </p>

                  <p class="inline-flex  text-sm text-gray-800 font-medium items-center">۲- در دیالوگ باز شده روی دکمهٔ<div class="bg-gray-100 p-1 rounded-md inline-flex items-center justify-center text-sm mx-2 font-bold"><p>Add</p></div>کلیک کنید.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-0 block w-full max-w-lg">
            <button
          @click="InstallClose = false"
              type="button"
              class="inline-flex w-full justify-center rounded-2xl border border-orange-500 bg-white px-4 py-5 text-base font-medium text-orange-500 shadow-sm hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:ring-offset-2 sm:text-sm"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import HeaderDesktop from "@/components/Header/HeaderDesktop.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import Hero from "@/components/Hero/Hero.vue";
import Services from "@/components/Services/Services.vue";
import Slider from "@/components/Slider/slider.vue";
import About from "@/components/About/About.vue";
import News from "@/components/PetDanimApi/News.vue";
import Footer from "@/components/Footer/Footer.vue";

export default{
    components: {
    HeaderDesktop,HeaderMobile,Hero,Services,Slider,About,News,Footer
  },
 data() {
    return {
  
      InstallClose: true,
  
    };
  }
}
</script>
