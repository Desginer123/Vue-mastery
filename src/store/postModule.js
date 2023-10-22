import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortedPost(state) {
            return [...state.posts].sort((a, b) => {
                return a[state.selectedSort]?.localeCompare(
                    b[state.selectedSort]
                );
            });
        },
        sortAndSearchPost(state, getters) {
            return getters.sortedPost.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, loading) {
            state.isPostLoading = loading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setPage(state, page) {
            state.page = page;
        },
        setLimit(state, limit) {
            state.limit = limit;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setSelectOptions(state, selectOptions) {
            state.selectOptions = selectOptions;
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit("setPosts", response.data);
            } catch (error) {
                alert(error);
            } finally {
                commit("setLoading", false);
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1)
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (error) {
                alert(error);
            }
        },
    },
    namespaced: true
};
