import axios from "axios";
import {ref, onMounted} from "vue";

export default function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostLoading = ref(true);
    const fetching = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    params: {
                        _page: 1,
                        _limit: limit,
                    },
                }
            );
            totalPages.value = Math.ceil(
                response.headers["x-total-count"] / limit
            );
            totalPages.value = 10;
            posts.value = response.data;
        } catch (error) {
            alert(error);
        } finally {
            isPostLoading.value = false;
        }
    };

    onMounted(() => {
        fetching();
    });

    return {
        posts,
        isPostLoading,
        totalPages,
    };
}
