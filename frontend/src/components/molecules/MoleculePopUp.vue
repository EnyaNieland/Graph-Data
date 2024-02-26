<script setup lang="ts">
import AtomButton from "@/components/atoms/AtomButton.vue";

const event = new Event('active-node-changed');

function close() {
    window.sessionStorage.removeItem('active-node');
    window.dispatchEvent(event);
}
</script>

<template>
    <div class="pop-up">
        <AtomButton @click="close">X</AtomButton>
        <slot></slot>
    </div>
</template>

<style scoped>
.pop-up {
    z-index: 100;
    position: absolute;
    top: 10px;
    left: 10px;
    background: #e9453f;
    color: #fff;
    border: 1px solid #e9453f;
    padding: 30px;
    width: 400px;
    height: 300px;
}

::v-deep(.btn) {
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>