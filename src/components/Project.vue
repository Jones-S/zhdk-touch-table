<script>
import oscHTML from "../assets/sketches/osc-test/index.html?url";
import p5HTML from "../assets/sketches/p5-test/index.html?url";
import sphereHTML from "../assets/sketches/3d-sphere/index.html?url";

export default {
  name: "ProjectVue",
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  computed: {
    htmlMap() {
      return {
        "3d-sphere": sphereHTML,
        "osc-test": oscHTML,
        "p5-test": p5HTML,
      };
    },
    html() {
      return this.htmlMap[this.project];
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
