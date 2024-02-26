<template>
    <button type="button" class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: .5em .75em;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    color: #333;
    position: relative;
    top: 1px;
}

.btn.active {
    background: #000000;
    color: white;
}

.btn:hover {
    background: #e9453f;
    color: #fff;
    border: 1px solid #e9453f;
}
</style>