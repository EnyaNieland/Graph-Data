<script setup lang="ts">
import { defineProps, ref } from "vue";
import { type GraphNode } from "@/models/data.dto";
import AtomButton from "@/components/atoms/AtomButton.vue";

const props = defineProps<GraphNode>();
const active = ref(false);
</script>

<template>
    <li>
        <AtomButton 
            :class="{ active }"
            @click="active = !active">
            {{ props.name }}
        </AtomButton>
        <ul v-if="props.children?.length">
            <MoleculeTreeNode v-for="child of props.children" :key="child.name" v-bind="child" />
        </ul>
        <div class="pop-up" v-if="active">
            <p>{{ props.name }}</p>
            <p>{{ props.description }}</p>
            <AtomButton @click="active = false">X</AtomButton>
        </div>
    </li>
</template>

<style scoped>
.pop-up {
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e9453f;
    color: #fff;
    border: 1px solid #e9453f;
    padding: 30px;
}

::v-deep(.pop-up .btn) {
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>