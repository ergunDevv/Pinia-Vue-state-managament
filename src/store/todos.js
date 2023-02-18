import { defineStore } from "pinia";




export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "clean room",
        isFinished: false,
      },
    ],
  }),
  actions : {
    addTodo(text){
        if(!text) return;
        this.todos.push({
            id:Math.floor(Math.random() * 10000000),
            text,
            isFinished:false,
        })
    }
  }
});
