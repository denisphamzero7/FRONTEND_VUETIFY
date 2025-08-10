<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3 team-card">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="mb-3">
                <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading font-weight-bold">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat color="grey" @click="messagePerson(person)">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        { name: 'Hậu', role: 'Web Developer', avatar: '/sc.png' },
        { name: 'Phương', role: 'Graphic Designer', avatar: '/sc.png' },
        { name: 'Nam', role: 'Web Developer', avatar: '/sc.png' },
        { name: 'Quân', role: 'UI/UX Designer', avatar: '/sc.png' },
        { name: 'Khan', role: 'IT Support', avatar: '/sc.png' }
      ]
    }
  },
  methods: {
    messagePerson(person) {
      console.log(`Messaging ${person.name}...`);
      // Add messaging logic here
    }
  }
}
</script>

<style scoped>
.team {
  padding: 20px;
}

.team-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.v-avatar {
  border: 3px solid #f5f5f5;
}

.v-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.v-card-text {
  padding-bottom: 8px;
}

.v-card-actions {
  padding-top: 0;
}
</style>