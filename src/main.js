import { createApp } from 'vue';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';

import './style.css';

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
app.mount('#app');