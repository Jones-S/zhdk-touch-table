<script>
import html from "../assets/sketches/geotiff-test/index.html?url";

export default {
  name: "GeotiffProject",
  computed: {
    html() {
      return html;
    },
  },
};
</script>

<template>
  <div class="GeotiffProject">
    <iframe :src="html" width="100%" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.GeotiffProject {
  min-height: 100vh;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
iframe {
  height: 100vh;
}
</style>
