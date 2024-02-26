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
    </li>
</template>