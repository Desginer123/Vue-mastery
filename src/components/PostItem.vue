<template>
    <div class="post">
        <div class="">
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div>Описание: {{ post.body }}</div>
        </div>
        <div class="post-buttons">
            <my-button
                v-show="post.id !== ''"
                class="open"
                @click="$router.push(`/posts/${post.id}`)"
                >Открыть</my-button
            >

            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post:first-child {
    margin-top: 10px;
}
.post-buttons {
    display: flex;
    gap: 10px;
}
.open {
    background-color: #fff;
    color: teal;
}
</style>
