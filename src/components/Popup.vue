<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn flat class="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title class="grey lighten-4">
        <h2>Add a New Project</h2>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pt-4">
        <v-form class="px-3" ref="form">
          <v-text-field 
            v-model="title" 
            label="Project Title" 
            prepend-icon="mdi-folder"
            :rules="titleRules"
            required
          ></v-text-field>
          
          <v-textarea 
            v-model="content" 
            label="Project Description" 
            prepend-icon="mdi-edit"
            :rules="contentRules"
            required
          ></v-textarea>

          <v-menu 
            v-model="menu" 
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field 
                :value="formattedDate" 
                label="Due Date" 
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="dateRules"
                required
                clearable
                @click:clear="due = null"
              ></v-text-field>
            </template>
            <v-date-picker 
              v-model="due" 
              @change="menu = false"
              :min="new Date().toISOString().substr(0, 10)"
            ></v-date-picker>
          </v-menu>

          <v-select
            v-model="status"
            :items="statusOptions"
            label="Project Status"
            prepend-icon="mdi-flag"
            required
          ></v-select>

          <v-text-field 
            v-model="person" 
            label="Assigned Person" 
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-card-actions class="pa-0 mt-4">
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog" class="mr-2">Cancel</v-btn>
            <v-btn 
              color="success" 
              @click="submit" 
              :loading="loading"
              :disabled="!isFormValid"
            >
              Add Project
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '../fb'


export default {
  name: 'Popup',
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      due: null,
      person: '',
      status: 'ongoing',
      menu: false,
      loading: false,
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length >= 3 || 'Title must be at least 3 characters'
      ],
      contentRules: [
        v => !!v || 'Description is required',
        v => v.length >= 10 || 'Description must be at least 10 characters'
      ],
      dateRules: [
        v => !!v || 'Due date is required'
      ],
      statusOptions: [
        { text: 'Ongoing', value: 'ongoing' },
        { text: 'Complete', value: 'complete' },
        { text: 'Overdue', value: 'overdue' },
        { text: 'Hoàn thành', value: 'hoàn-thành' }
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        

        const projects = {
            title: this.title,
            content: this.content,
            due: this.due,
            person: this.person,
            status: this.status
        }
        
        // Add to Firebase
        db.collection('projects').add(projects)
          .then(() => {
            console.log('Project added to Firebase successfully!')
            this.resetForm()
            this.closeDialog()
            this.loading = false
            this.$emit('addProject')
          })
          .catch((error) => {
            console.error('Error adding project to Firebase:', error)
            this.loading = false
           
          })
      }
    },
    closeDialog() {
      this.dialog = false
      this.resetForm()
    },
    resetForm() {
      this.title = ''
      this.content = ''
      this.due = null
      this.person = ''
      this.status = 'ongoing'
      this.$refs.form.resetValidation()
    }
  },
  computed: {
    formattedDate() {
      if (!this.due) return ''
      // Format the date as YYYY-MM-DD if it's a Date object, otherwise return as is
      if (this.due instanceof Date) {
        const year = this.due.getFullYear()
        const month = String(this.due.getMonth() + 1).padStart(2, '0')
        const day = String(this.due.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
      return this.due
    },
    isFormValid() {
      return !!this.title && !!this.content && !!this.due && !!this.person
    }
  }
}
</script>

<style scoped>
.v-card-title h2 {
  color: #424242;
  font-weight: 500;
}

.v-card-actions {
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
}
</style>