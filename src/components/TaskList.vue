<template>
  <div class="task-list">
    <h2>Lista de Tarefas</h2>

    <form @submit.prevent="addTask">
      <input v-model.trim.lazy="newTask" placeholder="Nova tarefa" required />
      <button type="submit">Adicionar</button>
    </form>

    <button @click="trocarFiltro">
      {{ completed ? 'Mostrar todas' : 'Mostrar concluídas' }}
    </button>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <span :class="{ 'completed': task.completed }">{{ task.name }}</span>
        <button @click="marcarTask(task)">
          {{ task.completed ? 'Desmarcar' : 'Concluir' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    Tasks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tasks: this.Tasks,
      newTask: '',
      completed: false
    }
  },
  computed: {
    filteredTasks() {
      if (this.completed) {
        return this.tasks.filter(task => task.completed)
      }
      return this.tasks
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        const newTask = {
          id: Date.now(),
          name: this.newTask,
          completed: false
        }
        this.tasks.push(newTask)
        this.newTask = ''
        this.$emit('task-added', newTask)
      }
    },
    marcarTask(task) {
      task.completed = !task.completed
      this.$emit('task-marcada', task)
    },
    trocarFiltro() {
      this.completed = !this.completed
    }
  }
}
</script>

<style scoped>

input {
  padding   : 10px;
  width     : 200px;
  margin    : 0 5px 10px;
}

li > button {
  padding : 10px;
  margin  : 0 0 0 100px;
}

.task-list {
  max-width : 900px;
  min-width : 400px;
  margin    : 30px auto;
}

ul {
  list-style-type : none;
  padding         : 0;
}

li {
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding         : 20px 10px;
  border-bottom   : 1px solid #e3e3e3;
}

.completed {
  text-decoration : line-through;
  color           : rgba(0, 0, 0, 0.4);
}

</style>