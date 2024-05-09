<template>
  <section class="relative overflow-hidden pt-4">
    <div class="w-full h-[800px] relative overflow-hidden">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[32.4207423, 53.6830157]"
        class="w-full h-[800px] absolute top-0 right-0 z-0"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const zoom = ref(6);
</script>

<style>
.leaflet-control-attribution {
  display: none;
}
</style>
