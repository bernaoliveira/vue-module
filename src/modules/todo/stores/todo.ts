import { ref } from "vue";
import { defineStore } from "pinia";

import type { ITodo } from "../interfaces/todo.interface";
import type { ITodoDto } from "../interfaces/todo.dto.interface";

export const useTodoStore = defineStore("todo", () => {
    const list = ref<ITodo[]>([
        {
            id: 1,
            name: "Test item",
            done: false
        }
    ]);

    const add = (todo: ITodoDto) => {
        list.value.push({
            id: Math.random(),
            ...todo
        });
    };

    const toggle = (id: number) => {
        list.value = list.value.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }

            return todo;
        });
    };

    const clear = () => {
        list.value = [];
    };

    return {
        list,
        add,
        toggle,
        clear
    };
});
