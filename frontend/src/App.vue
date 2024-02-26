<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { type GraphDataResponse } from '@/models/data.dto';

const response: Response = await fetch('/api/data')
console.log("This is the response:", response);
const { data }: GraphDataResponse = await response.json();
console.log("This is the body data:", data);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <ul>
      <li v-for="node in data" :key="node.name">Name:{{ node.name }}; Parent: {{ node.parent }}</li>
    </ul>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
