<template>
    <div class="navbar">
        <RouterLink to="/" class="title">BirdHouse</RouterLink>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Записи</my-button>
            <my-button @click="$router.push('/about')">О нас</my-button>
            <my-button @click="$router.push('/vuex')">Vuex</my-button>
            <my-button @click="$router.push('/composition')">Composition API</my-button>


        </div>
    </div>
</template>
<script>
export default {
    name: "navbar",
}
</script>
<style scoped>
.title {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-decoration: none;
    margin: 0;
}
.navbar {
    background: gray;
    box-shadow: 0, 2px, 4px, gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}
.navbar__btns {
    gap: 20px;
    display: flex;
}
</style>