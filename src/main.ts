import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  license: import.meta.env.VITE_PRIMEVUE_LICENSE_KEY,
});

app.mount('#app');
