<template>
  <div class="menu-nav flex items-center font-fa">
    <nav class="flex items-center">
      <ul class="flex gap-4 items-center font-semibold">
        <li class="flex items-center"><nuxt-link to="/">خانه</nuxt-link></li>

        <li class="flex items-center">
          <nuxt-link to="/team">همکاری با پتومن</nuxt-link>
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
    </nav>
  </div>
</template>
