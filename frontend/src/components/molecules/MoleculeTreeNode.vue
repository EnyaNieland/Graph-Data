<script setup lang="ts">
import { defineProps, ref } from "vue";
import { type GraphNode } from "@/models/data.dto";
import AtomButton from "@/components/atoms/AtomButton.vue";

const props = defineProps<GraphNode>();
const active = ref(false);

const event = new Event('active-node-changed');

function onClick() {
    active.value = !active.value

    if(active.value) window.sessionStorage.setItem('active-node', props.name);
    else window.sessionStorage.removeItem('active-node');
    window.dispatchEvent(event);
}

window.addEventListener('active-node-changed', () => {
    const name = window.sessionStorage.getItem('active-node');
    if(name !== props.name) active.value = false;
});
</script>

<template>
    <li>
        <AtomButton 
            :class="{ active }"
            @click="onClick">
            {{ props.name }}
        </AtomButton>
        <ul v-if="props.children?.length">
            <MoleculeTreeNode v-for="child of props.children" :key="child.name" v-bind="child" />
        </ul>
    </li>
</template>