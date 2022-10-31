<script setup>
import sketchHTML from "../assets/sketches/osc-test/index.html?url";

defineProps({
  project: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="Project">
    <iframe :src="sketchHTML" width="100%" frameborder="0"> </iframe>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
