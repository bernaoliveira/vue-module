<script setup lang="ts">
    import { useTodoStore } from "../stores/todo";

    import TodoItem from "@/modules/todo/components/TodoItem.vue";
    import TodoForm from "@/modules/todo/components/TodoForm.vue";

    const todosStore = useTodoStore();
</script>

<template>
    <div class="page">
        <div class="main">
            <TodoForm class="form" />
            <TodoItem v-for="todo in todosStore.list" :key="todo.id" :item="todo" class="item" />
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

    .form {
        margin-bottom: 2.4rem;
    }

    .item {
        margin-bottom: 1.2rem;
    }
</style>
