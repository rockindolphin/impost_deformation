import '@/styles/tailwind.css';
import '@/styles/vendors/multiselect.css';
import '@/styles/vendors/tippy.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from './i18n';
import VueTippy from 'vue-tippy';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(VueTippy);
app.mount('#app');
