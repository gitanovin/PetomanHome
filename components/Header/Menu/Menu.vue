<template>
  <div class="menu-nav flex items-center">
    <nav class="flex items-center">
      <ul class="flex gap-4 items-center font-semibold">
        <li class="flex items-center">
          <nuxt-link
            to="/"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-home"></i
            ><span class="pr-2">خانه</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/team"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-handshake"></i
            ><span class="pr-2">همکاری با پتومن</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/question"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-question"></i
            ><span class="pr-2">سوالات متداول</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/blog"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-blog"></i
            ><span class="pr-2">بلاگ</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/about-us"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-people-group"></i
            ><span class="pr-2">درباره ما</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/contact-us"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-phone"></i
            ><span class="pr-2">تماس با ما</span></nuxt-link
          >
        </li>
        <li class="flex items-center">
          <nuxt-link
            to="/terms"
            class="hover:text-orange-500 transition-all duration-300 cursor-pointer"
            ><i class="fa-light fa-file-shield"></i
            ><span class="pr-2">شرایط و قوانین</span></nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
