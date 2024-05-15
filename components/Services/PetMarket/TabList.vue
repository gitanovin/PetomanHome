<template>
  <ul class="flex flex-col space-y-4 text-center">
    <li
      @click.prevent="selectTab(1)"
      :class="
        activateTab == 1
          ? 'text-white bg-blue-500  shadow-md shadow-blue-500/30'
          : ''
      "
      class="p-2 rounded-lg py-3 bg-gray-100 cursor-pointer"
    >
      خرید
    </li>
    <li
      @click.prevent="selectTab(2)"
      :class="
        activateTab == 1
          ? 'text-white bg-blue-500  shadow-md shadow-blue-500/30'
          : ''
      "
      class="p-2 bg-gray-100 rounded-lg py-3 cursor-pointer"
    >
      انتخاب
    </li>
    <li
      @click.prevent="selectTab(3)"
      :class="
        activateTab == 1
          ? 'text-white bg-blue-500  shadow-md shadow-blue-500/30'
          : ''
      "
      class="p-2 bg-gray-100 rounded-lg py-3 cursor-pointer"
    >
      ضمانت
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    activateTab: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectTab(number) {
      this.$emit("set_active_tab", number);
    },
  },
};
</script>
