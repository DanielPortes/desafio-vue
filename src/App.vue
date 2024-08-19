<template>
  <div id="app">
    <img src="@/assets/logo.svg" alt="Logo" width="30"/>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="mt-5">
            <v-card-text>
              <TaskList :Tasks="initialTasks" @task-added="onTaskAdded" @task-trocada="onTaskTrocada"/>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
  },
  data() {
    return {
      initialTasks: [
        {id: 1, name: 'Criar um CRUD para este site', completed: true},
        {id: 2, name: 'Concluir este desafio', completed: true},
        {id: 3, name: 'Estudar Vue.js', completed: false},
      ]
    }
  },
  methods: {
    onTaskAdded(task) {
      console.log('Nova tarefa adicionada:', task)
    },
    onTaskTrocada(task) {
      console.log('Tarefa alterada:', task)
    }
  }
}
</script>

<style>
#app {
  font-family : "Montserrat", "Roboto Light ", sans-serif;
  font-size   : 18px;
  margin-top  : 20px;
  overflow    : hidden;
  min-width   : 500px;
}
</style>