<script setup>
import {useTodosStore} from './store/todos'
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

// import counterComponent from './components/counterComponent.vue'

const todosStore = useTodosStore();
const {filteredTodos} = storeToRefs(todosStore);
const {addTodo,toggleTodo,changeFilter} = todosStore;
const valueInput =ref("");

//Destructiring the pinia addTodo function
const addNewTodo = (text) =>{
  addTodo(text);
valueInput.value=""
}

</script>


<template>
  <main>
    <div>
      <button @click="changeFilter('all')">all</button>
      <button @click="changeFilter('finished')">finished</button>
      <button @click="changeFilter('unfinished')">unfinished</button>
    </div>
    <input type="text" v-model="valueInput" />
    <button @click="()=>addNewTodo(valueInput)">Add</button>

    <div v-for="todo in filteredTodos" :key="todo.id" style="display: flex">
      <h1 :style="todo.isFinished && {textDecoration:'line-through'} ">{{ todo.text }}</h1>
      <button @click="toggleTodo(todo.id)">{{todo.isFinished}} = Todo is Done</button>
    </div>
    <!-- <counterComponent/> -->
  </main>
</template>
  
