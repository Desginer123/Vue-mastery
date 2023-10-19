<template>
    <h4>Создание поста</h4>

    <form @submit.prevent action="">
        <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Название" />
        <input
            v-model="post.body"
            class="input"
            type="text"
            placeholder="Описание" />
        <button @click="createPost" class="btn" type="submit">Создать</button>
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
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 10px;
}
.input:focus {
    outline: none;
}
.input::placeholder {
    transition: opacity 0.3s ease-in-out;
}
.input:focus::placeholder {
    opacity: 0;
}
.btn {
    max-width: 280px;
    align-self: flex-end;
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
    background-color: teal;
    font-size: 18px;
    font-weight: 600;
    border: none;
    outline: none;
    margin-top: 10px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
}
.btn:hover {
    background-color: turquoise;
}
</style>
