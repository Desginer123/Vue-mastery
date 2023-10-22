<template>
    <div v-if="posts.length > 0">
        <h2>Список записей</h2>
        <post-item
            v-for="post in posts"
            :post="post"
            @remove="$emit('remove', post)"
            key="post.id"></post-item>
    </div>
    <h2 class="empty" v-else>Список записей пуст</h2>
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
h2.empty {
    color: red;
}
</style>
