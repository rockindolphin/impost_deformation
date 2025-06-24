<template>
    <footer class="footer page__footer">
        <div class="page__wrapper">
            <div class="footer__copy">
                © {{ year }} {{ $t('form_title') }}
            </div>
        </div>
        <div class="footer__company">
            <picture>
                <source srcset="../assets/images/footer/footer_pic_back_sm.webp" type="image/webp" :media="media.xs">
                <source srcset="../assets/images/footer/footer_pic_back_sm.png" type="image/png" :media="media.xs">
                <source srcset="../assets/images/footer/footer_pic_back_md.webp" type="image/webp" :media="media.sm">
                <source srcset="../assets/images/footer/footer_pic_back_md.png" type="image/png" :media="media.sm">
                <source srcset="../assets/images/footer/footer_pic_back_lg.webp" type="image/webp" :media="media.md">
                <source srcset="../assets/images/footer/footer_pic_back_lg.png" type="image/png" :media="media.md">
                <source srcset="../assets/images/footer/footer_pic_back_xl.webp" type="image/webp" :media="media.lg">
                <source srcset="../assets/images/footer/footer_pic_back_xl.png" type="image/png" :media="media.lg">
                <source srcset="../assets/images/footer/footer_pic_back_2xl.webp" type="image/webp" :media="media.xl">
                <source srcset="../assets/images/footer/footer_pic_back_2xl.png" type="image/png" :media="media.xl">
                <img
                    src="@/assets/images/footer/footer_pic_back_2xl.png"
                    alt="brusbox"
                    loading="lazy"
                    v-bg-image
                    >
            </picture>
            <div class="page__wrapper">
                <icon-company-name />
                <div class="wrapper">
                    <picture>
                        <source srcset="../assets/images/footer/footer_pic_front_sm.webp" type="image/webp" :media="media.xs">
                        <source srcset="../assets/images/footer/footer_pic_front_sm.png" type="image/png" :media="media.xs">
                        <source srcset="../assets/images/footer/footer_pic_front_md.webp" type="image/webp" :media="media.sm">
                        <source srcset="../assets/images/footer/footer_pic_front_md.png" type="image/png" :media="media.sm">
                        <source srcset="../assets/images/footer/footer_pic_front_lg.webp" type="image/webp" :media="media.md">
                        <source srcset="../assets/images/footer/footer_pic_front_lg.png" type="image/png" :media="media.md">
                        <source srcset="../assets/images/footer/footer_pic_front_xl.webp" type="image/webp" :media="media.lg">
                        <source srcset="../assets/images/footer/footer_pic_front_xl.png" type="image/png" :media="media.lg">
                        <source srcset="../assets/images/footer/footer_pic_front_2xl.webp" type="image/webp" :media="media.xl">
                        <source srcset="../assets/images/footer/footer_pic_front_2xl.png" type="image/png" :media="media.xl">
                        <img
                            src="@/assets/images/footer/footer_pic_front_2xl.png"
                            alt="brusbox"
                            loading="lazy"
                            v-bg-image
                            >
                    </picture>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

    import mixinBreakpoints from '@/mixins/mixinBreakpoints.js';
    import backgroundImage from '@/directives/backgroundImage.js';
    import iconCompanyName from '@/components/icons/iconCompanyName.vue';

    export default {
        name: 'elFooter',
        directives: {
            bgImage: backgroundImage
        },
        mixins: [
            mixinBreakpoints
        ],
        components: {
            iconCompanyName
        },
        data() {
            return {
                year: new Date().getFullYear(),
            }
        }
    }

</script>