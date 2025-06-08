<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
        <component
            v-bind:is="`scheme_-${pt}`"
            :rt="rt"
            >
        </component>
    </svg>
</template>

<script>

    import scheme_AERO_Z60 from '@/components/schemas/fake_impost/AERO_Z60.vue';
    import scheme_SUPER_AERO_Z60 from '@/components/schemas/fake_impost/SUPER_AERO_Z60.vue';
    import scheme_SUPER_AERO_Z77 from '@/components/schemas/fake_impost/SUPER_AERO_Z77.vue';
    import scheme_ACLASS_Z60 from '@/components/schemas/fake_impost/ACLASS_Z60.vue';
    import scheme_ACLASS_T118 from '@/components/schemas/fake_impost/ACLASS_T118.vue';
    import scheme_ACLASS_Z118 from '@/components/schemas/fake_impost/ACLASS_Z118.vue';
    import scheme_ACLASS_T94 from '@/components/schemas/fake_impost/ACLASS_T94.vue';
    import scheme_ACLASS_Z94 from '@/components/schemas/fake_impost/ACLASS_Z94.vue';
    import scheme_Z_60_4 from '@/components/schemas/fake_impost/Z_60_4.vue';
    import scheme_Z_70_6 from '@/components/schemas/fake_impost/Z_70_6.vue';
    import scheme_T118_70_6 from '@/components/schemas/fake_impost/T118_70_6.vue';

    export default {
        name: 'fakeImpost',
        props: {
            pt: {
                type: String,
                default: 'AERO_Z60'
            },
            rt: {
                type: String,
                default: 'rt_35x28x1_5'
            }
        },
        components: {
            scheme_AERO_Z60,
            scheme_SUPER_AERO_Z60,
            scheme_SUPER_AERO_Z77,
            scheme_ACLASS_Z60,
            scheme_ACLASS_T118,
            scheme_ACLASS_Z118,
            scheme_ACLASS_T94,
            scheme_ACLASS_Z94,
            scheme_Z_60_4,
            scheme_Z_70_6,
            scheme_T118_70_6
        }
	}

</script>
