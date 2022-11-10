<script>
import Project from "@/components/Project.vue";

export default {
  name: "ProjectView",
  data() {
    return {
      projectMetaData: false,
    };
  },
  components: {
    Project,
  },
  created() {
    this.fetchProjectData();
  },
  watch: {
    "$route.params.projectname": {
      handler: function () {
        this.fetchProjectData();
      },
    },
  },
  methods: {
    async fetchProjectData() {
      console.log("this.$route.params.projectname: ", this.$route.params.projectname);
      const json = await import(`@/assets/content/${this.$route.params.projectname}.json`)
        .then((module) => {
          return module.default;
        })
        .catch((error) => {
          console.error("error: ", error);
        });
      this.projectMetaData = json;
    },
  },
};
</script>

<template>
  <div class="ProjectView">
    <h1>{{ projectMetaData.title }}</h1>
    <p>{{ projectMetaData.description }}</p>
    <Project :project="'projectUrl'" />
  </div>
</template>

<style>
.ProjectView {
  margin: var(--gutter);
  pointer-events: none;
}

h1 {
  font-size: 20px;
}

p {
  font-size: 12px;
  max-width: 35em;
}
</style>
