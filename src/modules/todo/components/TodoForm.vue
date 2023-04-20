<script lang="ts" setup>
    import { ref } from "vue";
    import { useTodoStore } from "@/modules/todo/stores/todo";

    const todoStore = useTodoStore();
    const name = ref<string>("");

    const add = () => {
        if (name.value) {
            todoStore.add({
                name: name.value,
                done: false
            });
            name.value = "";
        }
    };
</script>

<template>
    <form class="form" @submit.prevent="add">
        <input v-model="name" placeholder="Add new item to list..." class="input" />
        <button class="button" type="button" @click="todoStore.clear()">Clear</button>
    </form>
</template>

<style scoped>
    .form {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .input {
        width: 100%;
        padding: 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 0.4rem;
        outline: none;
    }

    .button {
        padding: 1rem 2.4rem;
        border: none;
        border-radius: 0.4rem;
        background-color: #030303;
        color: #ffffff;
        cursor: pointer;
    }
</style>
