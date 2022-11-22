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
  computed: {
    projectUrl() {
      return this.$route.params.projectname;
    },
  },
};
</script>

<template>
  <div class="ProjectView">
    <h1>{{ projectMetaData.title }}</h1>
    <p>{{ projectMetaData.description }}</p>
    <Project :project="projectUrl" />
  </div>
</template>

<style>
.ProjectView {
  margin: var(--gutter);
}

h1 {
  font-size: 20px;
  z-index: 10;
  position: relative;
}

p {
  z-index: 10;
  position: relative;
  font-size: 12px;
  max-width: 35em;
}
</style>
