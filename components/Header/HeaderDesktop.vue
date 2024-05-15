<template>
  <div class="w-full max-w-screen-xl mx-auto  z-50  sticky top-1  my-4">
    <div
      class="bg-gradient-to-b from-white/50 via-white/50 to-white/70 backdrop-blur-md w-full shadow-lg shadow-gray-200/10 rounded-xl"
    >
      <header class="w-full max-w-screen-xl mx-auto hidden lg:block ">
        <div class="top-header flex items-center justify-between p-6">
          <Menu />
          <Logo />
        </div>
      </header>
    </div>
  </div>
</template>
<script setup>
import Menu from "@/components/Header/Menu/Menu.vue";
import Logo from "@/components/Header/Logo/logo.vue";
</script>
