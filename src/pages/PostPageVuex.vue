<template>
    <div>
        <h1>Страница записей</h1>
        <my-input
            class="input"
            v-focus
            placeholder="Поиск"
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"></my-input>
        <div class="app-buttons">
            <my-button class="create-post-btn" @click="openModal"
                >Создать запись</my-button
            >
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="selectOptions"></my-select>
        </div>

        <my-modal v-model:show="modalVisible">
            <post-form @create="createPost"></post-form>
        </my-modal>
        <post-list
            v-if="!isPostLoading"
            :posts="sortAndSearchPost"
            @remove="removePost"></post-list>
        <h2 v-else>Загрузка</h2>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";
export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        ...mapMutations({
            setPage: "post/setPage",
            setSearchQuery: "post/setSearchQuery",
            setSelectedSort: "post/setSelectedSort",
        }),
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPosts: "post/fetchPosts",
        }),
        createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((item) => item.id !== post.id);
        },
        openModal() {
            this.modalVisible = true;
        },
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            isPostLoading: (state) => state.post.isPostLoading,
            selectedSort: (state) => state.post.selectedSort,
            selectOptions: (state) => state.post.selectOptions,
            searchQuery: (state) => state.post.searchQuery,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
        }),
        ...mapGetters({
            sortedPost: "post/sortedPost",
            sortAndSearchPost: "post/sortAndSearchPost",
        }),
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>

<style>
.create-post-btn {
    margin-bottom: 20px;
}
.app-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page__wrapper {
    display: flex;
    margin-top: 15px;
    gap: 15px;
}
.page-bullet {
    border: 2px solid black;
    padding: 10px;
    cursor: pointer;
}
.page-bullet.current-page {
    border: 2px solid teal;
}
</style>
