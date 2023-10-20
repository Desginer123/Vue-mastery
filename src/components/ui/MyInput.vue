<template>
    <input :value="modelValue" @input="updateInput" type="text" />
</template>
<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e) {
            console.log('test')
            this.$emit("update:modelValue", e.target.value);
        },
    },
};
</script>
<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 10px;
}
.input:focus {
    outline: none;
}
.input::placeholder {
    transition: opacity 0.3s ease-in-out;
}
.input:focus::placeholder {
    opacity: 0;
}
</style>
