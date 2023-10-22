<template>
    <div>
        <h2 v-if="isLoading === true">Загрузка записи...</h2>
        <div v-else class="">
            <h1 class="post-title">{{ this.title }}</h1>
            <p class="post-text">{{ this.body }}</p>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            isLoading: true,
            title: "",
            body: "",
        };
    },
    methods: {
        async getPost() {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
                );
                this.title = response.data.title;
                this.body = response.data.body;
            } catch (error) {
                alert(error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getPost();
    },
};
</script>
<style>
.post-title {
    font-size: 48px;
}
.post-text {
    margin-top: 15px;
    display: block;
}
</style>
