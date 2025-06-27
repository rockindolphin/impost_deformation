// src/i18n.js
import { createI18n } from 'vue-i18n';
import { ru } from '@/i18n/ru';

export default createI18n({
    legacy: false, // Работа в режиме Composition API
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        ru: ru
    }
});