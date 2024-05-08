<template>
  <div
    class="buttons flex gap-4 items-center lg:justify-start justify-center xs:gap-y-6 space-y-0 mt-8"
  >
    <button
      type="button"
      class="text-orange-500 bg-white shadow-lg shadow-white/50 py-3 px-5 rounded-lg w-auto font-semibold"
    >
      ورود به پتومن
    </button>
    <nuxt-link to="/auth/sign-up">
      <button
        type="button"
        class="text-white bg-orange-500 py-3 px-5 rounded-lg w-auto shadow-lg shadow-orange-500/40 font-semibold"
      >
        ثبت نام در پتومن
      </button>
    </nuxt-link>
  </div>
</template>
