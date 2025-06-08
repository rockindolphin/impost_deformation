<template>
    <header class="header page__header">
        <div class="page__wrapper">
            <icon-logo class="header__logo"/>
            <h1 class="header__title">
                Расчет прогиба оконного профиля
            </h1>
            <nav class="header__nav" v-click-outside="hideMenu">
                <button
                    class="btn btn--action header__nav-toggle"
                    title="Меню"
                    @click="toggleMenu()"
                    >
                    <icon-dots />
                </button>
                <ul
                    class="list"
                    :class="{'list--active': isOpen}"
                    >
                    <li
                        class="list__item"
                        role="button"
                        title="Распечатать"
                        @click="onMenuItemClick('EV_APP_PRINT_FORM_PARAMS')"
                        >
                        <span class="text">
                            Распечатать
                        </span>
                        <icon-print />
                    </li>
                    <li
                        class="list__item"
                        role="button"
                        title="Скопировать ссылку"
                        @click="onMenuItemClick('EV_APP_COPY_FORM_PARAMS')"
                        >
                        <span class="text">
                            Скопировать ссылку
                        </span>
                        <icon-copy />
                    </li>
                    <li
                        class="list__item"
                        role="button"
                        title="Поделиться формой"
                        @click="onMenuItemClick('EV_APP_SHARE_FORM_PARAMS')"
                        >
                        <span class="text">
                            Поделиться формой
                        </span>
                        <icon-share />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

    import vClickOutside from 'click-outside-vue3';
    import { events } from '@/lib/events';
    import iconLogo from '@/components/icons/iconLogo.vue';
    import iconDots from '@/components/icons/iconDots.vue';
    import iconPrint from '@/components/icons/iconPrint.vue';
    import iconCopy from '@/components/icons/iconCopy.vue';
    import iconShare from '@/components/icons/iconShare.vue';

    export default {
        name: 'elHeader',
        directives: {
            clickOutside: vClickOutside.directive
        },
        components: {
            iconLogo,
            iconDots,
            iconPrint,
            iconCopy,
            iconShare
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggleMenu(){
                this.isOpen = !this.isOpen;
            },
            hideMenu(evt){
                this.isOpen = false;
            },
            onMenuItemClick(evtKey){
                window.dispatchEvent(new CustomEvent(events[evtKey], {} ));
                this.hideMenu();
            }
        }
    }

</script>