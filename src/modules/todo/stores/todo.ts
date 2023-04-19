import { ref } from "vue";
import { defineStore } from "pinia";

import type { ITodo } from "../interfaces/todo.interface";

export const useTodoStore = defineStore("todo", () => {
    const list = ref<ITodo[]>([
        {
            id: 1,
            name: "Test item",
            done: false
        }
    ]);
    const addTodo = (todo: ITodo) => {
        list.value.push(todo);
    };

    const toggleStatus = (id: number) => {
        list.value = list.value.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }

            return todo;
        });
    };

    return {
        list,
        addTodo,
        toggleStatus
    };
});
