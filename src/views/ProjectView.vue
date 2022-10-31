<script setup>
import Project from "@/components/Project.vue";
</script>

<template>
  <div class="project">
    <h1>This is an project page</h1>
    <Project :project="'my-project-url'" />
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
