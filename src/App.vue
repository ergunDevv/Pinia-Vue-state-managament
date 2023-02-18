<script setup>
const todos = [
  {
    id:1,
    text:"clean room",
    isFinished:false,
  }];
</script>


<template>
  <main>
    <input type="text" />
    <button>Add</button>
    <h1>{{todos[0].text}}</h1>
  </main>
</template>
  
