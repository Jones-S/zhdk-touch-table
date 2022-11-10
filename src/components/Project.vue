<script>
import sketchHTML from "../assets/sketches/osc-test/index.html?url";

export default {
  name: "ProjectVue",
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  computed: {
    html() {
      return sketchHTML;
    },
  },
};
</script>

<template>
  <div class="Project">
    <iframe :src="html" width="100%" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
iframe {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: -1;
}
</style>
