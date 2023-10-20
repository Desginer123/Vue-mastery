<template>
    <div v-if="posts.length > 0">
        <h3>Список записей</h3>
        <post-item
            v-for="post in posts"
            :post="post"
            @remove="$emit('remove', post)"
            key="post.id"></post-item>
    </div>
    <h2 v-else>Список записей пуст</h2>
</template>
<script>
import PostItem from "./PostItem.vue";
export default {
    components: {PostItem},

    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped>
h2 {
    color: red;
}
</style>
