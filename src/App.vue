<script setup>
import { createMemoryHistory, createRouter } from 'vue-router';

import French from './components/French.vue';
import English from './components/English.vue';

// import Header from './components/Header.vue'
// import Main from './components/Main.vue'
// import Banner from './components/Banner.vue'

const routes = [
  { path: '/fr', component: French },
  { path: '/en', component: English },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
</script>

<template>
  <Header></Header>
  <Banner></Banner>
  <Main></Main>
</template>

<style scoped>
</style>
