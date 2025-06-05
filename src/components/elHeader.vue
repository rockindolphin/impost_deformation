<template>
    <header class="header page__header">
        <div class="page__wrapper">
            <icon-logo class="header__logo"/>
            <h1 class="header__title">
                Расчет прогиба оконного профиля
            </h1>
            <div class="header__actions">
                <button
                    class="btn btn--action"
                    title="Меню"
                    >
                    <icon-dots />
                </button>
            </div>
        </div>
    </header>
</template>

<script>

    import iconLogo from '@/components/icons/iconLogo.vue';
    import iconDots from '@/components/icons/iconDots.vue';

    export default {
        name: 'elHeader',
        components: {
            iconLogo,
            iconDots
        },
        data() {
            return {

            }
        }
    }

</script>