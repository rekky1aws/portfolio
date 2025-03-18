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

const userLanguage = navigator.language.split('-')[0];

// Choosing language automatically depending on user's prefered language
// switch (userLanguage) {
//   case 'en':
//     router.replace('/en');
//     break;

//   case 'fr':
//     router.replace('/fr');
//     break;

//   default:
//     router.replace('/');
// }

// DEBUG
// console.log("routeLanguage : ", routeLanguage);
// console.log("userLanguage : ", userLanguage);

export default router;