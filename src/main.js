import '@/styles/tailwind.css';
import '@/styles/vendors/multiselect.css';
import '@/styles/vendors/tippy.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { ru } from '@/i18n/ru';
import VueTippy from 'vue-tippy';
import App from './App.vue';

const pinia = createPinia();
const i18n = createI18n({
    locale: 'ru',
    messages: {
        ru: ru
    }
});
const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(VueTippy);
app.mount('#app');
