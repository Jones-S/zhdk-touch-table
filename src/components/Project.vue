<script>
import Vue from "vue";
import * as AsyncComputed from "vue3-async-computed";

const asyncComputed = AsyncComputed.createPlugin({ ref: Vue.ref });
Vue.use(asyncComputed);

export default {
  name: "ProjectVue",
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("hello project.vue");
  },
  asyncComputed: {
    sum() {
      const total = this.x + this.y;
      return new Promise((resolve) => setTimeout(() => resolve(total), 1000));
    },
  },
  // computed: {
  //   html() {
  //     const html = import(`../assets/sketches/${this.project}/index.html?url`);
  //     return html;
  //   },
  // },
};
</script>

<template>
  <div class="Project">
    SUMME{{ sum }}
    <!-- <iframe v-if="html" :src="html" width="100%" frameborder="0"> </iframe> -->
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
