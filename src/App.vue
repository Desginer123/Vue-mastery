<template>
    <div class="app">
        <h4>Создание поста</h4>
        <form @submit.prevent action="">
            <input
                v-bind:value="title"
                @input="title = $event.target.value"
                class="input"
                type="text"
                placeholder="Название" />
            <input
                v-bind:value="body"
                @input="body = $event.target.value"
                class="input"
                type="text"
                placeholder="Описание" />
            <button @click="createPost" class="btn" type="submit">
                Создать
            </button>
        </form>
        <div class="post" v-for="post in posts" key="post.id">
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div>Описание: {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "javasciprt",
                    body: "javascript is langauge",
                },
                {
                    id: 2,
                    title: "javasciprt2",
                    body: "javascript2 is langauge",
                },
                {
                    id: 3,
                    title: "javasciprt3",
                    body: "javascript3 is langauge",
                },
                {
                    id: 4,
                    title: "javasciprt4",
                    body: "javascript4 is langauge",
                },
            ],
        };
    },
    methods: {
        createPost(e) {
            console.log(document.querySelector("input").value);
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            };
            this.posts.push(newPost);
            this.title = "";
            this.body = "";
        },
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
.post:first-child {
    margin-top: 10px;
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
