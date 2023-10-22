import {createWebHistory, createRouter} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostPageVuex from "@/pages/PostPageVuex.vue";
import PostPageComposition from "@/pages/PostPageComposition.vue";

import AboutPage from "@/pages/AboutPage.vue";
import SinglePost from "@/pages/SinglePost.vue";
const routes = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/posts",
        component: PostPage,
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/posts/:id",
        component: SinglePost,
    },
    {
        path: "/vuex",
        component: PostPageVuex,
    },
    {
        path: "/composition",
        component: PostPageComposition,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
