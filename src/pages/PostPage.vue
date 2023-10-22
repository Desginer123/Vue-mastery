<template>
    <div>
        <h1>Страница записей</h1>
        <my-input
            class="input"
            v-focus
            placeholder="Поиск"
            v-model="searchQuery"></my-input>
        <div class="app-buttons">
            <my-button class="create-post-btn" @click="openModal"
                >Создать запись</my-button
            >
            <my-select
                v-model="selectedSort"
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
        <!-- <div class="page__wrapper">
            <div
                class="page-bullet"
                v-for="pageNumber in totalPages"
                :class="{'current-page': page == pageNumber ? true : false}"
                :key="pageNumber"
                @click="changePage(pageNumber)">
                {{ pageNumber }}
            </div>
        </div> -->
    </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            modalVisible: false,
            isPostLoading: true,
            selectedSort: "Выберите сортировку",
            selectOptions: [
                {name: "По названию", value: "title"},
                {name: "По описанию", value: "body"},
            ],
            searchQuery: "",
            page: 1,
            limit: 10,
            totalPages: 0,
        };
    },
    methods: {
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

        async fetchPosts() {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.limit
                );
                this.posts = response.data;
            } catch (error) {
                alert(error);
            } finally {
                this.isPostLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.limit
                );
                this.posts = [...this.posts, ...response.data];
            } catch (error) {
                alert(error);
            }
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPost() {
            return [...this.posts].sort((a, b) => {
                return a[this.selectedSort]?.localeCompare(
                    b[this.selectedSort]
                );
            });
        },
        sortAndSearchPost() {
            return this.sortedPost.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
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
