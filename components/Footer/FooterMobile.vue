<template>
  <div
    class="mx-auto max-w-screen-xl px-4 block lg:hidden border-t border-gray-100"
  >
    <div class="theme-widgetarea theme-widgetarea-full font-fa">
      <div class="bg-white rounded-lg mb-8 relative widget_blogmotive_mobile">
        <div class="widget-content">
          <div class="theme-about-widget style_1">
            <div
              class="about-image flex justify-center items-center text-orange-500 py-6 text-4xl font-semibold"
            >
              PETOMAN
            </div>
            <div class="about-details">
              <div class="about-desc text-center font-fas">
                <p>
                  © هر گونه کپی&zwnj;برداری جزئی یا کلی از مطالب پتومن بدون کسب
                  مجوز مکتوب ممنوع است. حقوق این سایت به پتومن تعلق دارد.
                </p>
              </div>

              <div
                class="about-social mt-8 flex gap-x-4 text-orange-500 justify-center items-center"
              >
                <ul class="flex items-center gap-4 text-2xl">
                  <li><i class="fa-brands fa-instagram"></i></li>
                  <li><i class="fa-brands fa-telegram"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="mobile-side block hidden">
    <div class="h-screen w-full fixed right-0 top-0 z-20">
      <div class="backdrop bg-gray-100/50 w-full h-screen"></div>
      <div class="close absolute left-2 top-4">
        <i class="fa fa-times text-2xl bg-white p-2 rounded-lg"></i>
      </div>
      <div
        class="bg-white opacity-90 absolute z-50 w-64 right-0 top-0 h-screen"
      >
        <div class="logo w-full border-b">
          <p class="max-w-20 mx-auto">PETOMAN</p>
        </div>
        <ul class="flex flex-col space-y-6 p-4 font-semibold text-gray-700">
          <li class="flex items-center"><nuxt-link to="/">خانه</nuxt-link></li>

          <li class="flex items-center">
            <nuxt-link to="/">همکاری با پتومن</nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/blog">بلاگ</nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/question">سوالات متداول</nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/about-us">درباره ما</nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/contact-us">تماس با ما</nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/terms">شرایط و ضوابط</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
