<script>
import sketchHTML from "../assets/sketches/osc-test/index.html?url";

export default {
  name: "ProjectVue",
  data() {
    return {
      sketch: false,
    };
  },
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const additional = await import("../assets/sketches/osc-test/index.html?url");
    console.log("additional: ", additional);
    this.sketch = additional;
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
    <iframe v-if="sketch" :src="sketch" width="100%" frameborder="0"></iframe>
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
