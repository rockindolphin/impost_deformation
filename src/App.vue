<template>
    <div class="page__body">
        <el-header />
        <main class="main page__main">
            <div class="page__wrapper">
                <el-form-impost />
            </div>
        </main>
        <el-footer />
    </div>
</template>

<script>

    import elHeader from '@/components/elHeader.vue';
    import elFormImpost from '@/components/elFormImpost.vue';
    import elFooter from '@/components/elFooter.vue';

    export default {
        name: 'App',
        components: {
            elHeader,
            elFormImpost,
            elFooter
        },
        data() {
            return {

            }
        }
    }

</script>
