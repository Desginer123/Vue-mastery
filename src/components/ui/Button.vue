<template>
    <button class="btn" type="submit"><slot></slot></button>
</template>
<script>
export default {
    name: "my-button",
};
</script>
<style scoped>
.btn {
    max-width: 280px;
    align-self: flex-end;
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
    background-color: teal;
    font-size: 18px;
    font-weight: 600;
    border: none;
    outline: none;
    margin-top: 10px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
}
.btn:hover {
    background-color: turquoise;
}
</style>
