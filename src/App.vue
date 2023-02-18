<script setup>
import {useTodosStore} from './store/todos'
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

// import counterComponent from './components/counterComponent.vue'

const todosStore = useTodosStore();
const {todos} = storeToRefs(todosStore);
const {addTodo} = todosStore;
const valueInput =ref("");

//Destructiring the pinia addTodo function
const addNewTodo = (text) =>{
  addTodo(text);
valueInput.value=""
}

</script>


<template>
  <main>
    <input type="text" v-model="valueInput" />
    <button @click="()=>addNewTodo(valueInput)">Add</button>

    <div v-for="todo in todos" :key="todo.id" style="display: flex">
      <h1>{{ todo.text }}</h1>
      <button>Todo is Done</button>
    </div>
    <!-- <counterComponent/> -->
  </main>
</template>
  
