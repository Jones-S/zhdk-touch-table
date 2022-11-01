<script setup>
import { onMounted, toRefs } from "vue";
import Project from "@/components/Project.vue";

const props = defineProps({
  projectUrl: {
    type: String,
    required: true,
  },
});

const { projectUrl } = toRefs(props);

onMounted(() => {
  console.log("projecturl from router: ", projectUrl.value);
});
</script>

<template>
  <div class="project">
    <h1>This is an project page</h1>
    <Project :project="projectUrl" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
