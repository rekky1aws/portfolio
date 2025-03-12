import { createApp } from 'vue';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';

import { createMemoryHistory, createRouter } from 'vue-router';
import French from './components/French.vue';
import English from './components/English.vue';

import './style.css';

const routes = [
	{ path: '/fr', component: French },
	{ path: '/en', component: English },
  ];
  
  const router = createRouter({
	history: createMemoryHistory(),
	routes,
  })

const app = createApp(App);

app.use(MotionPlugin, {
	directives: {
		'roll-and-tilt': {
			initial: {
				opacity: 0,
				rotate: '90deg',
			},
			visible: {
				opacity: 0.8,
				rotate: '0deg',
			},
			hovered: {
				opacity: 1,
				scale: 1.05,
				rotate: '5deg',
			},
			leave: {
				opacity: 0,
				rotate: '90deg',
			}
		},
	}
});

app.use(router);

app.mount('#app');