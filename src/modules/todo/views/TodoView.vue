<script setup lang="ts">
    import { useTodoStore } from "../stores/todo";

    import TodoItem from "@/modules/todo/components/TodoItem.vue";

    const todosStore = useTodoStore();
    const todos = todosStore.list;
</script>

<template>
    <div class="page">
        <div class="main">
            <TodoItem v-for="todo in todos" :key="todo.id" :item="todo" />
        </div>
    </div>
</template>

<style scoped>
    .page {
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        width: 100vw;
        min-height: 100vh;
        padding-top: 4rem;
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 60rem;
    }
</style>
