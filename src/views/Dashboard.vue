<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row justify-start class="mb-3" wrap>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small flat color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-sort-alphabetical-ascending</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small flat color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-account-multiple</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small flat color="grey" @click="sortBy('due')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By due date</span>
            </v-btn>
          </template>
          <span>Sort by due date</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="project in projects" :key="project.title" class="mb-3">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div class="project-title">
              <v-icon small left class="mr-2">{{ getProjectIcon(project.title) }}</v-icon>
              {{ project.title }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>
              <v-icon small left class="mr-1">mdi-account</v-icon>
              {{ project.person }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>
              <v-icon small left class="mr-1">mdi-calendar-clock</v-icon>
              {{ project.due }}
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`">
                <v-icon small left>{{ getStatusIcon(project.status) }}</v-icon>
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '../fb'

export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
       
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    getProjectIcon(title) {
      const lowerTitle = title.toLowerCase()
      if (lowerTitle.includes('web') || lowerTitle.includes('tạo')) return 'mdi-web'
      if (lowerTitle.includes('code') || lowerTitle.includes('ở đây')) return 'mdi-code-braces'
      if (lowerTitle.includes('thiết kế') || lowerTitle.includes('design')) return 'mdi-palette'
      if (lowerTitle.includes('forum') || lowerTitle.includes('community')) return 'mdi-forum'
      return 'mdi-folder'
    },
    getStatusIcon(status) {
      switch(status) {
        case 'complete':
        case 'hoàn-thành':
          return 'mdi-check-circle'
        case 'ongoing':
          return 'mdi-progress-clock'
        case 'overdue':
          return 'mdi-alert-circle'
        default:
          return 'mdi-information'
      }
    }
  },
  created(){
    db.collection('projects').onSnapshot(res=>{
      const  changes =res.docChanges()
      changes.forEach(change=>{
        if(change.type ==='added'){
          this.projects.push({
            ...change.doc.data(),
            id:change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.project-title {
  font-weight: 500;
  color: #424242;
  display: flex;
  align-items: center;
}

.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid #ffaa2c;
}

.project.overdue {
  border-left: 4px solid #f83e70;
}

.project.hoàn-thành {
  border-left: 4px solid #4caf50;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}

.v-chip.overdue {
  background: #f83e70 !important;
}

.v-chip.hoàn-thành {
  background: #4caf50 !important;
}

.v-card {
  margin-bottom: 16px;
  border-radius: 8px;
}

.v-layout.project {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.v-layout.project:hover {
  background-color: #f5f5f5;
}

.v-icon {
  color: #666;
}
</style>