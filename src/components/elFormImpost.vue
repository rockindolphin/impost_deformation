<template>
    <form action="#" class="form form--impost" @submit.prevent="false">
        <div class="wrapper wrapper--web grid grid-cols-12">
            <fieldset class="fieldset fieldset--odd col-span-12 2xl:col-span-5">
                <h4 class="fieldset__title">
                    <strong>
                        01//
                    </strong>
                    {{ $t('steps[0]') }}
                </h4>
                <div class="fieldset__content">
                    <div class="wrapper--controls grid gap-7 grid-cols-12">
                        <div class="control col-span-12">
                            <label class="control__label">
                                {{ $t('input.windRegion') }}
                            </label>
                            <multiselect
                                class="control--multiselect"
                                v-model="form.windRegion"
                                :options="Object.keys(form.windRegions)"
                                :allow-empty="false"
                                :placeholder="$t('select_placeholder')"
                                :searchable="false"
                                >
                            </multiselect>
                        </div>
                        <div class="control col-span-12">
                            <label class="control__label">
                                {{ $t('input.terrainType') }}
                            </label>
                            <multiselect
                                class="control--multiselect"
                                v-model="form.terrainType"
                                :options="form.terrainTypes"
                                :allow-empty="false"
                                :placeholder="$t('select_placeholder')"
                                :searchable="false"
                                >
                            </multiselect>
                        </div>
                        <label class="block col-span-12" for="Tn">
                            <span class="control__label flex items-center">
                                {{ $t('input.Tn') }} ({{ $t('units.cels') }})
                                <icon-help-circle
                                    class="tippy ml-2"
                                    :content="$t('Tn_tippy')"
                                    v-tippy="{ trigger : 'mouseenter focus', arrow: true, interactive: true }"
                                    >
                                </icon-help-circle>
                            </span>
                            <input
                                id="Tn"
                                v-model="form.Tn"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>
                        <label class="col-span-12" for="Tref">
                            <span class="control__label">
                                {{ $t('input.Tref') }} ({{ $t('units.cels') }})
                            </span>
                            <input
                                id="Tref"
                                v-model="form.Tref"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>
                        <label class="col-span-12" for="Tv">
                            <span class="control__label flex items-center">
                                {{ $t('input.Tv') }} ({{ $t('units.cels') }})
                                <icon-help-circle
                                    class="tippy ml-2"
                                    :content="$t('Tv_tippy')"
                                    v-tippy="{ trigger : 'mouseenter focus', arrow: true, interactive: true }"
                                    >
                                </icon-help-circle>
                            </span>
                            <input
                                id="Tv"
                                v-model="form.Tv"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>
                    </div>
                </div>
            </fieldset>
            <fieldset class="fieldset fieldset--even col-span-12 2xl:col-span-7">
                <h4 class="fieldset__title">
                    <strong>
                        02//
                    </strong>
                    {{ $t('steps[1]') }}
                </h4>
                <div class="fieldset__content">
                    <div class="grid gap-7 grid-cols-12 items-start">
                        <div class="col-span-12 md:col-span-6 md:order-2 flex flex-col items-center justify-center">
                            <el-building />
                            <h5 class="text-2xl uppercase">
                                {{ $t(`windSides.${form.windSide}`) }}
                            </h5>
                        </div>
                        <div class="col-span-12 md:col-span-6 md:order-1">
                            <div class="wrapper--controls grid gap-7 grid-cols-12">
                                <label class="col-span-12" for="Bh">
                                    <span class="control__label">
                                        {{ $t('input.Bh') }} ({{ $t('units.m') }})
                                    </span>
                                    <input
                                        id="Bh"
                                        v-model.number="form.Bh"
                                        type="number"
                                        v-bind="buildingInputParams.Bh"
                                        class="control control--text"
                                        @input="onBuildingInputChange($event)"
                                    >
                                </label>

                                <label class="col-span-12" for="Bw">
                                    <span class="control__label">
                                        {{ $t('input.Bw') }} ({{ $t('units.m') }})
                                    </span>
                                    <input
                                        id="Bw"
                                        v-model.number="form.Bw"
                                        type="number"
                                        v-bind="buildingInputParams.Bw"
                                        class="control control--text"
                                        @input="onBuildingInputChange($event)"
                                    >
                                </label>

                                <label class="col-span-12" for="Bl">
                                    <span class="control__label">
                                        {{ $t('input.Bl') }} ({{ $t('units.m') }})
                                    </span>
                                    <input
                                        id="Bl"
                                        v-model.number="form.Bl"
                                        type="number"
                                        v-bind="buildingInputParams.Bl"
                                        class="control control--text"
                                        @input="onBuildingInputChange($event)"
                                    >
                                </label>

                                <label class="col-span-12" for="Wh">
                                    <span class="control__label">
                                        {{ $t('input.Wh') }} ({{ $t('units.m') }})
                                    </span>
                                    <input
                                        id="Wh"
                                        v-model.number="form.Wh"
                                        type="number"
                                        v-bind="buildingInputParams.Wh"
                                        class="control control--text"
                                        @input="onBuildingInputChange($event)"
                                    >
                                </label>

                                <div class="control col-span-12">
                                    <label class="control__label flex items-center">
                                        {{ $t('input.windSide') }}
                                        <icon-help-circle
                                            class="tippy ml-2"
                                            :content="$t('windSide_tippy')"
                                            v-tippy="{ trigger : 'mouseenter focus', arrow: true, interactive: true }"
                                            >
                                        </icon-help-circle>
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.windSide"
                                        :options="form.windSides"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`windSides.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`windSides.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <label
                                    v-if="form.isVisible.Wgap"
                                    class="col-span-12"
                                    for="Wgap"
                                    >
                                    <span class="control__label">
                                        {{ $t('input.Wgap') }} ({{ $t('units.m') }})
                                    </span>
                                    <input
                                        id="Wgap"
                                        v-model.number="form.Wgap"
                                        type="number"
                                        v-bind="buildingInputParams.Wgap"
                                        class="control control--text"
                                        @input="onBuildingInputChange($event)"
                                    >
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset class="fieldset fieldset--odd col-span-12 2xl:col-span-6">
                <h4 class="fieldset__title">
                    <strong>
                        03//
                    </strong>
                    {{ $t('steps[2]') }}
                </h4>
                <div class="fieldset__content">
                    <div class="grid gap-7 grid-cols-12 items-start">

                        <div class="col-span-12 md:col-span-6 md:order-2">
                            <el-window />
                        </div>

                        <div class="col-span-12 md:col-span-6 md:order-1">
                            <div class="wrapper--controls grid gap-7 grid-cols-12">
                                <label class="col-span-12" for="L">
                                    <span class="control__label">
                                        {{ $t('input.L') }} L ({{ $t('units.cm') }})
                                    </span>
                                    <input
                                        id="L"
                                        v-model.number="form.L"
                                        type="number"
                                        step="0.1"
                                        class="control control--text"
                                    >
                                </label>

                                <label class="col-span-12" for="a">
                                    <span class="control__label">
                                        {{ $t('input.a') }} ({{ $t('units.cm') }})
                                    </span>
                                    <input
                                        id="a"
                                        v-model.number="form.a"
                                        type="number"
                                        step="0.1"
                                        class="control control--text"
                                    >
                                </label>

                                <label class="col-span-12" for="b">
                                    <span class="control__label">
                                        {{ $t('input.b') }} ({{ $t('units.cm') }})
                                    </span>
                                    <input
                                        id="b"
                                        v-model.number="form.b"
                                        type="number"
                                        step="0.1"
                                        class="control control--text"
                                    >
                                </label>

                                <p class="col-span-12 font-medium">
                                    {{ $t('input.d') }} ({{ $t('units.cm') }}): {{ form.d.toFixed(2) }}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </fieldset>
            <fieldset class="fieldset fieldset--even col-span-12 2xl:col-span-6">
                <h4 class="fieldset__title">
                    <strong>
                        04//
                    </strong>
                    {{ $t('steps[3]') }}
                </h4>
                <div class="fieldset__content">
                    <div class="grid gap-7 grid-cols-12 items-start">
                        <div class="col-span-12 md:col-span-6 md:order-2 mb-7 md:mb-0">
                            <div class="wrapper wrapper--profile-pic">
                                <picture>
                                    <source :srcset="profilePic.webp" type="image/webp">
                                    <source :srcset="profilePic.png" type="image/png">
                                    <img
                                        :src="profilePic.png"
                                        :alt="form.profileType"
                                        loading="lazy"
                                        >
                                </picture>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-6 md:order-1">
                            <div class="wrapper--controls grid gap-7 grid-cols-12">
                                <div class="control col-span-12">
                                    <label class="control__label">
                                        {{ $t('input.profileType') }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.profileType"
                                        :options="Object.keys(form.profileTypes)"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`profileTypes.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`profileTypes.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <div class="control col-span-12">
                                    <label class="control__label">
                                        {{ $t('input.profileColor') }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.profileColor"
                                        :options="Object.keys(form.profileColors)"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`profileColors.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`profileColors.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <div class="control col-span-12">
                                    <label class="control__label">
                                        {{ $t('input.reinType') }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.reinType"
                                        :options="form.reinTypesOptions"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`reinTypes.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`reinTypes.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <div class="control col-span-12" v-if="form.isVisible.reinType_60_70">
                                    <label class="control__label">
                                        {{ $t('input.reinType_60_70') }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.reinType_60_70"
                                        :options="form.reinTypes_60_70_Options"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`reinTypes.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`reinTypes.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <div class="control col-span-12" v-if="form.isVisible.reinType_L68">
                                    <label class="control__label">
                                        {{ $t('input.reinType_L68') }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="form.reinType_L68"
                                        :options="form.reinTypes_L68_Options"
                                        :allow-empty="false"
                                        :placeholder="$t('select_placeholder')"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ $t(`reinTypes.${props.option}`) }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ $t(`reinTypes.${props.option}`) }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <p class="col-span-12 font-medium">
                                    <span>{{ $t('max_curve') }} ({{ $t('units.mm') }}):</span> {{ form.maxСurve.toFixed(3) }}
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </fieldset>
            <fieldset class="fieldset fieldset--odd fieldset--last col-span-12">
                <h4 class="fieldset__title">
                    {{ $t('steps[4]') }}
                </h4>
                <div class="fieldset__content grid grid-cols-12 gap-4">
                    <div
                        v-for="(item, index) in form.resultViews"
                        :key="`result_${item.key}`"
                        class="wrapper wrapper--result col-span-12 xl:col-span-6"
                        :class="{
                            'wrapper--active': item.key === form.selectedViewKey,
                            'xl:col-start-4': item.key === 'fake_impost' && index === (form.resultViews.length - 1)
                        }"
                        @click="selectView($event, item.key)"
                        >
                        <strong>
                            {{ item.title }}
                        </strong>
                        <template v-if="item.key === 'fake_impost'">
                            <div class="control mb-4">
                                <label class="control__label">
                                    {{ $t('input.fakeImpostProfileType') }}
                                </label>
                                <multiselect
                                    class="control--multiselect"
                                    v-model="form.fakeImpostProfileType"
                                    :options="form.fakeImpostProfileTypesOptions"
                                    :allow-empty="false"
                                    :placeholder="$t('select_placeholder')"
                                    :searchable="false"
                                    >
                                    <template #singleLabel="props">
                                        {{ $t(`fakeImpostProfileTypes.${props.option}`) }}
                                    </template>
                                    <template #option="props">
                                        <span>
                                            {{ $t(`fakeImpostProfileTypes.${props.option}`) }}
                                        </span>
                                    </template>
                                </multiselect>
                            </div>
                            <div class="control mb-4">
                                <label class="control__label">
                                    {{ $t('input.fakeImpostReinType') }}
                                </label>
                                <multiselect
                                    class="control--multiselect"
                                    v-model="form.fakeImpostReinType"
                                    :options="form.fakeImpostReinTypesOptions"
                                    :allow-empty="false"
                                    :placeholder="$t('select_placeholder')"
                                    :searchable="false"
                                    >
                                    <template #singleLabel="props">
                                        {{ $t(`fakeImpostReinTypes.${props.option}`) }}
                                    </template>
                                    <template #option="props">
                                        <span>
                                            {{ $t(`fakeImpostReinTypes.${props.option}`) }}
                                        </span>
                                    </template>
                                </multiselect>
                            </div>
                        </template>
                        <fake-impost
                            v-if="item.key === 'fake_impost'"
                            :pt="form.fakeImpostProfileType"
                            :rt="form.fakeImpostReinType"
                            >
                        </fake-impost>
                        <component
                            v-else
                            v-bind:is="`scheme_-${form.profileType}`"
                            :view="item.key"
                            :rt="form.getReinType(item.key)"
                            >
                        </component>
                        <p class="col-span-12 text">
                            <span class="block mb-1">
                                <span>{{ $t('estimate_curve') }} ({{ $t('units.mm') }}):</span> {{ item.result.value.toFixed(2) }}
                            </span>
                            <span class="block">
                                <span class="text--success" v-if="item.result.value <= form.maxСurve">
                                    {{ $t('result_valid') }}
                                </span>
                                <span class="text--warning" v-else>
                                    {{ $t('result_invalid') }}
                                </span>
                            </span>
                        </p>
                        <table
                            class="form__table"
                            v-for="(table, tbl_index) in item.tables"
                            :key="`table_${tbl_index}`"
                            >
                            <thead>
                                <tr>
                                    <th
                                        v-for="(th, th_index) in table.thead"
                                        :key="`th_${tbl_index}_${th_index}`"
                                        >
                                        {{ th }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(tr, tr_index) in table.tbody"
                                    :key="`tr_${tbl_index}_${tr_index}`"
                                    >
                                    <td
                                        v-for="(td, td_index) in tr"
                                        :key="`td_${tbl_index}_${tr_index}_${td_index}`"
                                        >
                                        {{ td }}
                                    </td>
                                </tr>
                                <!-- добавляем для следующих комбинаций пустые строки чтобы выровнять таблицы -->
                                <tr v-if="item.key === 'impost' || (item.key === 'connective3' && tbl_index === 1)">
                                    <td colspan="2" class="opacity-0">_</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="wrapper wrapper--print">
            <el-print />
        </div>
    </form>
</template>

<script>

    import { events } from '@/lib/events';
    import { defineAsyncComponent } from 'vue';
    import { useFormStore } from '@/stores/formStore';
    import Multiselect from 'vue-multiselect';
    import elBuilding from '@/components/elBuilding.vue';
    import elWindow from '@/components/elWindow.vue';
    import elPrint from '@/components/elPrint.vue';
    import iconHelpCircle from '@/components/icons/iconHelpCircle.vue';

    import pngPic60_4 from '@/assets/images/profiles/60_4.png';
    import webpPic60_4 from '@/assets/images/profiles/60_4.webp';
    import pngPic70_6 from '@/assets/images/profiles/70_6.png';
    import webpPic70_6 from '@/assets/images/profiles/70_6.webp';
    import pngPicAClass from '@/assets/images/profiles/ACLASS.png';
    import webpPicAClass from '@/assets/images/profiles/ACLASS.webp';
    import pngPicAero from '@/assets/images/profiles/AERO.png';
    import webpPicAero from '@/assets/images/profiles/AERO.webp';
    import pngPicSuperAero from '@/assets/images/profiles/SUPER_AERO.png';
    import webpPicSuperAero from '@/assets/images/profiles/SUPER_AERO.webp';
    import pngPicGlide from '@/assets/images/profiles/GLIDE.png';
    import webpPicGlide from '@/assets/images/profiles/GLIDE.webp';

    export default {
        name: 'elFormImpost',
        setup() {
            const form = useFormStore();
            form.$subscribe((mutation, state) => {
                if( mutation.events.key === 'profileType'){
                    form.onProfileTypeChange();
                }
                if( mutation.events.key === 'fakeImpostProfileType'){
                    form.onFakeImpostProfileTypeChange();
                }
            });
            return {
                form
            }
        },
        components: {
            Multiselect,
            elBuilding,
            elWindow,
            elPrint,
            iconHelpCircle,
            scheme_T78_AERO: defineAsyncComponent(() => import('@/components/schemas/T78_AERO.vue')),
            scheme_T80_AERO: defineAsyncComponent(() => import('@/components/schemas/T80_AERO.vue')),
            scheme_T78_SUPER_AERO: defineAsyncComponent(() => import('@/components/schemas/T78_SUPER_AERO.vue')),
            scheme_T80_SUPER_AERO: defineAsyncComponent(() => import('@/components/schemas/T80_SUPER_AERO.vue')),
            scheme_T78_ACLASS: defineAsyncComponent(() => import('@/components/schemas/T78_ACLASS.vue')),
            scheme_T78_ACLASS_L68: defineAsyncComponent(() => import('@/components/schemas/T78_ACLASS_L68.vue')),
            scheme_T86_60_4: defineAsyncComponent(() => import('@/components/schemas/T86_60_4.vue')),
            scheme_T86_70_6: defineAsyncComponent(() => import('@/components/schemas/T86_70_6.vue')),
            scheme_GLIDE: defineAsyncComponent(() => import('@/components/schemas/GLIDE.vue')),
            fakeImpost: defineAsyncComponent(() => import('@/components/schemas/fakeImpost.vue'))
        },
        data() {
            return {
                hasShareOpportunity: false
            }
        },
        watch:{

        },
        computed: {
            profilePic(){// ссылка на картинку в зависимости от типа профиля
                switch (this.form.profileType) {
                    case 'T78_AERO':
                    case 'T80_AERO':
                        return {
                            png: pngPicAero,
                            webp: webpPicAero
                        };
                    case 'T78_SUPER_AERO':
                    case 'T80_SUPER_AERO':
                        return {
                            png: pngPicSuperAero,
                            webp: webpPicSuperAero
                        };
                    case 'T78_ACLASS':
                    case 'T78_ACLASS_L68':
                        return {
                            png: pngPicAClass,
                            webp: webpPicAClass
                        };
                    case 'T86_60_4':
                        return {
                            png: pngPic60_4,
                            webp: webpPic60_4
                        };
                    case 'T86_70_6':
                        return {
                            png: pngPic70_6,
                            webp: webpPic70_6
                        };
                    case 'GLIDE':
                        return {
                            png: pngPicGlide,
                            webp: webpPicGlide
                        };
                }
            },
            buildingInputParams(){
                let window = {
                    w: (this.form.a + this.form.b)/100,
                    h: this.form.L/100
                }
                return {
                    Bh: {
                        step: 0.1,
                        min: 1,
                        max: 75
                    },
                    Bw: {
                        step: 0.1,
                        min: 1,
                        max: 75
                    },
                    Bl: {
                        step: 0.1,
                        min: 1,
                        max: 75
                    },
                    Wh: {
                        step: 0.1,
                        min: 0,
                        max: parseFloat( (this.form.Bh - window.h).toFixed(1) )
                    },
                    Wgap: {
                        step: 0.1,
                        min: 0,
                        max: parseFloat( (this.form.Bl - window.w).toFixed(1) )
                    }
                }
            }
        },
        methods: {
            onBuildingInputChange(){
                Object.keys(this.buildingInputParams).map( key => {
                    if( this.form[key] > this.buildingInputParams[key].max ){
                        this.form[key] = this.buildingInputParams[key].max;
                    }
                    if( this.form[key] < this.buildingInputParams[key].min ){
                        this.form[key] = this.buildingInputParams[key].min;
                    }
                });
            },
            generateUrlParams(){
                let params = new URLSearchParams();
                ['windRegion', 'terrainType', 'windSide', 'profileType', 'profileColor', 'reinType', 'reinType_60_70', 'reinType_L68', 'fakeImpostProfileType', 'fakeImpostReinType', 'Tn', 'Tref', 'Tv', 'Bh', 'Bw', 'Bl', 'Wh', 'Wgap', 'L', 'a','b', 'c', 'selectedViewKey'].map(key => {
                    params.set(key, this.form[key]);
                });
                return params.toString();
            },
            selectView(evt, viewKey){
                if( !evt.target.closest('.multiselect') ){// если не кликаем в выпадающий список
                    this.form.selectedViewKey = viewKey;
                }
            },
            checkSelectedView(){
                return new Promise( (resolve, reject) => {
                    if( this.form.selectedViewKey !== null ){
                        resolve()
                    }else{
                        alert( this.$t('error_view_required') );
                        reject();
                    }
                });
            },
            printForm(){
                this.checkSelectedView().then(() => {
                    this.form.printUuid++;
                    window.print();
                });
            },
            copyLink(){
                this.checkSelectedView().then(() => {
                    let link = `${document.location.host}?${this.generateUrlParams()}`;
                    navigator.clipboard.writeText(link).then(() => {
                        alert( this.$t('copy_link_alert') );
                    });
                });
            },
            shareLink(){
                this.checkSelectedView().then(() => {
                    navigator.share({
                        title: this.$t('form_title'),
                        text: this.$t('share_form_text'),
                        url: `?${this.generateUrlParams()}`
                    });
                });
            },
        },
        created(){

        },
        mounted() {
            this.hasShareOpportunity = typeof navigator.share === 'function';
            let params = new URLSearchParams(document.location.search);
            this.form.setParamsFromRoute(params);
            window.addEventListener(events.EV_APP_COPY_FORM_PARAMS, this.copyLink);
            window.addEventListener(events.EV_APP_SHARE_FORM_PARAMS, this.shareLink);
            window.addEventListener(events.EV_APP_PRINT_FORM_PARAMS, this.printForm);
        },
        beforeDestroy(){
            window.removeEventListener(events.EV_APP_COPY_FORM_PARAMS, this.copyLink);
            window.removeEventListener(events.EV_APP_SHARE_FORM_PARAMS, this.shareLink);
            window.removeEventListener(events.EV_APP_PRINT_FORM_PARAMS, this.printForm);
        }
    }

</script>