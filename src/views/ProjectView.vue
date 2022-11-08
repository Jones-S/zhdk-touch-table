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
    <h1>OSC Projekt</h1>
    <Project :project="projectUrl" />
  </div>
</template>

<style></style>
