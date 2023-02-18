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
    filter:"unfinished",

  }),
  getters:{
    filteredTodos(){
        if(this.filter === "finished"){
            return this.todos.filter(todo=>todo.isFinished)
        }else if(this.filter==="unfinished"){
            return this.todos.filter(todo=>!todo.isFinished)            
        }
        return this.todos;
    }
  },
  actions : {
    addTodo(text){
        if(!text) return;
        this.todos.push({
            id:Math.floor(Math.random() * 10000000),
            text,
            isFinished:false,
        })
    },
    toggleTodo(id){
        const index = this.todos.findIndex((todo)=>todo.id===id);
        this.todos[index].isFinished=!this.todos[index].isFinished;
    },
    changeFilter(filterText){
        this.filter=filterText;
    }
  }
});
