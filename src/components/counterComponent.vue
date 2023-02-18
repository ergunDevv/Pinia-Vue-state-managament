<script setup>
import {useTodosStore} from '../store/todos'

const {todos} = useTodosStore();

</script>


<template>
  <main>
    <input type="text" />
    <button>Add</button>

    <div v-for="todo in todos" :key="todo.id" style="display: flex">
      <h1>{{ todo.text }}</h1>
      <button>Todo is Done</button>
    </div>
  </main>
</template>
  
