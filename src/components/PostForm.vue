<template>
    <h4>Создание поста</h4>

    <form @submit.prevent action="">
        <my-input
            class="input"
            placeholder="Название"
            type="text"
            v-model="post.title" />
        <my-input
            class="input"
            placeholder="Описание"
            type="text"
            v-model="post.body" />

        <my-button @click="createPost" class="btn" type="submit"
            >Создать</my-button
        >
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                id: null,
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createPost(e) {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>
<style scoped>
h4 {
    font-size: 28px;
    font-family: sans-serif;
}
form {
    display: flex;
    flex-direction: column;
}
</style>
