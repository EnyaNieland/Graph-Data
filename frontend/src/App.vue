<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { type GraphDataResponse, type GraphNode } from '@/models/data.dto';
import transformHierarchy from "@/transformers/hierarchy";
import OrganismTreeGraph from "@/components/organisms/OrganismTreeGraph.vue";

const data = ref<GraphNode[]>([]);
const root = computed<GraphNode | undefined>(() => transformHierarchy(data.value));
// const treeData = computed(() => {
//   const findNodeByName = (name: string) => data.value.find(node => node.name === name);

//   data.value.forEach(node => {
//     if (node.parent !== "") {
//       const parentNode = findNodeByName(node.parent);
//       if (parentNode) {
//         parentNode.children = parentNode.children || [];
//         parentNode.children.push(node);
//       }
//     }
//   });

//   return data.filter(node => node.parent === "");
// })
// console.log("treeData:", treeData.value);
// const hierarchyTree = computed(() => hierarchy(root.value));
// console.log("Tree:", hierarchyTree.value?.children);

onMounted(async () => {
  // const response: Response = await fetch('/api/data');
  // const body: GraphDataResponse = await response.json();
  data.value = [
    {
      "name": "A",
      "description": "This is a description of A",
      "parent": ""
    },
    {
      "name": "B",
      "description": "This is a description of B",
      "parent": "A"
    },
    {
      "name": "C",
      "description": "This is a description of C",
      "parent": "A"
    },
    {
      "name": "D",
      "description": "This is a description of D",
      "parent": "A"
    },
    {
      "name": "B-1",
      "description": "This is a description of B-1",
      "parent": "B"
    },
    {
      "name": "B-2",
      "description": "This is a description of B-2",
      "parent": "B"
    },
    {
      "name": "B-3",
      "description": "This is a description of B-3",
      "parent": "B"
    }
  ];
});
</script>

<template>
  <main>
    <OrganismTreeGraph v-if="root" v-bind="root"/>
    <!-- <ul>
      <li v-for="node in root?.children" :key="node.name">Name:{{ node.name }}; Parent: {{ node.parent }}; Children: {{ node.children }}</li>
    </ul> -->
  </main>
</template>

<style scoped>
</style>
