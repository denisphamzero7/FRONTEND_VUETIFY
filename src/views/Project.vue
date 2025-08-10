<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="py-1">
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      projects: [
        { title: 'thiết kế web', person: 'hậu', due: '1st Jan 2014', status: 'ongoing', content: 'rất vui khi gặp abnj'},
        { title: 'xóa home page', person: 'phương', due: '10th Jan 2035', status: 'complete', content: 'rất vui khi gặp abnj'},
        { title: 'thiết kế giao diẹn', person: 'Ryu', due: '20th Dec 2056', status: 'complete', content: 'rất vui khi gặp abnj!'},
        { title: 'kết nối user', person: 'loan', due: '20th Oct 2014', status: 'overdue', content: 'rất vui khi gặp abnj'},
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.status !== 'complete'
      })
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 20px;
}
</style>