import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';

import AnimateOnScroll from 'primevue/animateonscroll';
import './style.css';

const app = createApp(App).mount('#app');
app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);