<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { type GraphDataResponse, type GraphNode } from '@/models/data.dto';
import transformHierarchy from "@/transformers/hierarchy";
import MoleculePopUp from "@/components/molecules/MoleculePopUp.vue";
import OrganismTreeGraph from "@/components/organisms/OrganismTreeGraph.vue";

const data = ref<GraphNode[]>([]);
const root = computed<GraphNode | undefined>(() => transformHierarchy(data.value));
const activeNode = ref();

window.addEventListener('active-node-changed', () => {
  const name = window.sessionStorage.getItem('active-node')
  activeNode.value = data.value.find((x) => x.name === name)
});

onMounted(async () => {
  const response: Response = await fetch('/api/data');
  const body: GraphDataResponse = await response.json();
  data.value = body.data;
});
</script>

<template>
  <main>
    <OrganismTreeGraph v-if="root" v-bind="root"/>    

    <MoleculePopUp v-if="activeNode">
      <p>{{ activeNode.name }}</p>
      <p>{{ activeNode.description }}</p>
    </MoleculePopUp>
  </main>
</template>

<style scoped>
</style>
