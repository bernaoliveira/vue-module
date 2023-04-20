<script lang="ts" setup>
    import { useTodoStore } from "@/modules/todo/stores/todo";

    import type { ITodo } from "@/modules/todo/interfaces/todo.interface";

    defineProps<{
        item: ITodo;
    }>();

    const todosStore = useTodoStore();
</script>

<template>
    <div :class="['item', { done: item.done }]" @click="todosStore.toggle(item.id)">
        <div class="name">
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped>
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0.4rem;
        transition: 0.3s background-color;
        cursor: pointer;
        user-select: none;
    }

    .item:hover {
        background-color: #f0f0f0;
    }

    .item.done {
        background-color: #e0e0e0;
        text-decoration: line-through;
    }
</style>
