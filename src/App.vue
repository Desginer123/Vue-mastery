<template>
    <div class="app">
        <h1>Страница записей</h1>
        <my-button class="create-post-btn" @click="openModal">Создать запись</my-button>
        <my-modal v-model:show="modalVisible">
            <post-form @create="createPost"></post-form>
        </my-modal>
        <post-list :posts="posts" @remove="removePost"></post-list>
    </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
    components: {
        PostForm,
        PostList,
    },
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
            modalVisible: false,
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.modalVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter((item) => item.id !== post.id);
        },
        openModal() {
            this.modalVisible = true
        }
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.app {
    padding: 20px;
}
.create-post-btn {
    margin-bottom: 20px;
}
</style>
