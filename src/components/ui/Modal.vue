<template>
    <div class="modal" v-if="show" @click="hideDialog">
        <div @click.stop class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "my-modal",
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
};
</script>
<style scoped>
.modal {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: #fff;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 40px;
}
</style>
