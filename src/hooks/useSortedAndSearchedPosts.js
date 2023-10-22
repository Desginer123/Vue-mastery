import {ref, computed} from "vue";

export default function useSortedAndSearchedPosts(sortedPosts) {
    let sortedAndSearchedPosts, searchQuery;
    searchQuery = ref("");
    sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    return {
        searchQuery,
        sortedAndSearchedPosts,
    };
}
