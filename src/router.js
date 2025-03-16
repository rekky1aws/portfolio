import { createMemoryHistory, createRouter } from 'vue-router';

import French from './components/French.vue';
import English from './components/English.vue';
import PickLanguage from './components/PickLanguage.vue';

const routes = [
    { path: '/', component: PickLanguage },
	{ path: '/fr', component: French },
	{ path: '/en', component: English },
  ];
  
const router = createRouter({
history: createMemoryHistory(),
routes,
});

const routeLanguage = window.location.href.split('/').pop();

const userLanguage = navigator.language;

console.log(routeLanguage);

export default router;