<template>
    <form action="#" class="form form--impost" @submit.prevent="false">
        <div class="wrapper wrapper--web">

            <div class="wrapper 2xl:grid grid-cols-12">
                <fieldset class="fieldset fieldset--odd pb-3 2xl:col-span-5 2xl:pb-0">
                    <h4 class="fieldset__title">
                        <strong>
                            01//
                        </strong>
                        {{ i18n.step_1 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="wrapper--controls grid gap-7 grid-cols-12">
                            <div class="control col-span-12">
                                <label class="control__label">
                                    {{ i18n.windRegion }}
                                </label>
                                <multiselect
                                    class="control--multiselect"
                                    v-model="windRegion"
                                    :options="Object.keys(windRegions)"
                                    :allow-empty="false"
                                    :placeholder="i18n.select_placeholder"
                                    :searchable="false"
                                    >
                                </multiselect>
                            </div>
                            <div class="control col-span-12">
                                <label class="control__label">
                                    {{ i18n.terrainType }}
                                </label>
                                <multiselect
                                    class="control--multiselect"
                                    v-model="terrainType"
                                    :options="terrainTypes"
                                    :allow-empty="false"
                                    :placeholder="i18n.select_placeholder"
                                    :searchable="false"
                                    >
                                </multiselect>
                            </div>
                            <label class="block col-span-12" for="Tn">
                                <span class="control__label">
                                    {{ i18n.Tn }}
                                </span>
                                <input
                                    id="Tn"
                                    v-model="Tn"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>
                            <label class="col-span-12" for="Tref">
                                <span class="control__label">
                                    {{ i18n.Tref }}
                                </span>
                                <input
                                    id="Tref"
                                    v-model="Tref"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="fieldset fieldset--even 2xl:col-span-7">
                    <h4 class="fieldset__title">
                        <strong>
                            02//
                        </strong>
                        {{ i18n.step_2 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="grid gap-7 grid-cols-12 items-start">
                            <div class="col-span-12 md:col-span-6 md:order-2 flex flex-col items-center justify-center">
                                <el-building
                                    :wind-side="windSide"
                                    :a="a"
                                    :b="b"
                                    :L="L"
                                    :Wgap="Wgap"
                                    :Bl="Bl"
                                    :Bw="Bw"
                                    :Bh="Bh"
                                    :Wh="Wh"
                                    >
                                </el-building>
                                <h5 class="uppercase">
                                    {{ i18n.windSideViews[windSide] }}
                                </h5>
                            </div>
                            <div class="col-span-12 md:col-span-6 md:order-1">
                                <div class="wrapper--controls grid gap-7 grid-cols-12">
                                    <label class="col-span-12" for="Bh">
                                        <span class="control__label">
                                            {{ i18n.Bh }}
                                        </span>
                                        <input
                                            id="Bh"
                                            v-model.number="Bh"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="Bw">
                                        <span class="control__label">
                                            {{ i18n.Bw }}
                                        </span>
                                        <input
                                            id="Bw"
                                            v-model.number="Bw"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="Bl">
                                        <span class="control__label">
                                            {{ i18n.Bl }}
                                        </span>
                                        <input
                                            id="Bl"
                                            v-model.number="Bl"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="Wh">
                                        <span class="control__label">
                                            {{ i18n.Wh }}
                                        </span>
                                        <input
                                            id="Wh"
                                            v-model.number="Wh"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <div class="control col-span-12">
                                        <label class="control__label">
                                            {{ i18n.windSide }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="windSide"
                                            :options="Object.keys(windSides)"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                            <template #singleLabel="props">
                                                {{ windSides[props.option].i18n }}
                                            </template>
                                            <template #option="props">
                                                <span>
                                                    {{ windSides[props.option].i18n }}
                                                </span>
                                            </template>
                                        </multiselect>
                                    </div>

                                    <label
                                        v-if="isVisible.Wgap"
                                        class="col-span-12"
                                        for="Wgap"
                                        >
                                        <span class="control__label">
                                            {{ i18n.Wgap }}:
                                        </span>
                                        <input
                                            id="Wgap"
                                            v-model.number="Wgap"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="wrapper 2xl:grid grid-cols-12">
                <fieldset class="fieldset fieldset--odd 2xl:col-span-6">
                    <h4 class="fieldset__title">
                        <strong>
                            03//
                        </strong>
                        {{ i18n.step_3 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="grid gap-7 grid-cols-12 items-start">

                            <div class="col-span-12 md:col-span-6 md:order-2">
                                <el-window
                                    :a="a"
                                    :b="b"
                                    :c="c"
                                    :d="d"
                                    :L="L"
                                    >
                                </el-window>
                            </div>

                            <div class="col-span-12 md:col-span-6 md:order-1">
                                <div class="wrapper--controls grid gap-7 grid-cols-12">
                                    <label class="col-span-12" for="L">
                                        <span class="control__label">
                                            {{ i18n.L }}
                                        </span>
                                        <input
                                            id="L"
                                            v-model.number="L"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="a">
                                        <span class="control__label">
                                            {{ i18n.a }}
                                        </span>
                                        <input
                                            id="a"
                                            v-model.number="a"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="b">
                                        <span class="control__label">
                                            {{ i18n.b }}
                                        </span>
                                        <input
                                            id="b"
                                            v-model.number="b"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <label class="col-span-12" for="c">
                                        <span class="control__label">
                                            {{ i18n.c }}
                                        </span>
                                        <input
                                            id="c"
                                            v-model.number="c"
                                            type="number"
                                            step="0.1"
                                            class="control control--text"
                                        >
                                    </label>

                                    <p class="col-span-12 font-bold">
                                        {{ i18n.d }}: {{ d.toFixed(2) }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>
                <fieldset class="fieldset fieldset--even 2xl:col-span-6">
                    <h4 class="fieldset__title">
                        <strong>
                            04//
                        </strong>
                        {{ i18n.step_4 }}
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
                                            :alt="profileType"
                                            loading="lazy"
                                            >
                                    </picture>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-span-6 md:order-1">
                                <div class="wrapper--controls grid gap-7 grid-cols-12">
                                    <div class="control col-span-12">
                                        <label class="control__label">
                                            {{ i18n.profileType }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="profileType"
                                            :options="Object.keys(profileTypes)"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                        </multiselect>
                                    </div>

                                    <div class="control col-span-12">
                                        <label class="control__label">
                                            {{ i18n.profileColor }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="profileColor"
                                            :options="Object.keys(profileColors)"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                            <template #singleLabel="props">
                                                {{ profileColors[props.option].i18n }}
                                            </template>
                                            <template #option="props">
                                                <span>
                                                    {{ profileColors[props.option].i18n }}
                                                </span>
                                            </template>
                                        </multiselect>
                                    </div>

                                    <div class="control col-span-12">
                                        <label class="control__label">
                                            {{ i18n.reinType }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="reinType"
                                            :options="reinTypesOptions"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                            <template #singleLabel="props">
                                                {{ reinTypes[props.option].i18n }}
                                            </template>
                                            <template #option="props">
                                                <span>
                                                    {{ reinTypes[props.option].i18n }}
                                                </span>
                                            </template>
                                        </multiselect>
                                    </div>

                                    <div class="control col-span-12" v-if="isVisible.reinType_60_70">
                                        <label class="control__label">
                                            {{ i18n.reinType_60_70 }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="reinType_60_70"
                                            :options="reinTypes_60_70_Options"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                            <template #singleLabel="props">
                                                {{ reinTypes[props.option].i18n }}
                                            </template>
                                            <template #option="props">
                                                <span>
                                                    {{ reinTypes[props.option].i18n }}
                                                </span>
                                            </template>
                                        </multiselect>
                                    </div>

                                    <div class="control col-span-12" v-if="isVisible.reinType_L68">
                                        <label class="control__label">
                                            {{ i18n.reinType_L68 }}
                                        </label>
                                        <multiselect
                                            class="control--multiselect"
                                            v-model="reinType_L68"
                                            :options="reinTypes_L68_Options"
                                            :allow-empty="false"
                                            :placeholder="i18n.select_placeholder"
                                            :searchable="false"
                                            >
                                            <template #singleLabel="props">
                                                {{ reinTypes[props.option].i18n }}
                                            </template>
                                            <template #option="props">
                                                <span>
                                                    {{ reinTypes[props.option].i18n }}
                                                </span>
                                            </template>
                                        </multiselect>
                                    </div>

                                    <p class="col-span-12">
                                        <span>{{ i18n.maxСurve }}:</span> {{ maxСurve.toFixed(3) }}
                                    </p>

                                    <div class="bg-yellow-300 col-span-12 text-right" v-if="showDebug">
                                        <div
                                            v-for="item in resultViews"
                                            :key="`result_${item.key}`"
                                            >
                                            {{ item.result.toFixed(2) }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="wrapper">
                <fieldset class="fieldset fieldset--odd fieldset--last">
                    <h4 class="fieldset__title">
                        {{ i18n.step_5 }}
                    </h4>
                    <div class="fieldset__content 2xl:grid grid-cols-12">
                        <div
                            v-for="(item, index) in resultViews"
                            :key="`result_${item.key}`"
                            class="col-span-12 wrapper wrapper--result 2xl:col-span-3"
                            :class="{
                                'mb-0': index === resultViews.length - 1,
                            }"
                            >
                            <strong>
                                {{ item.title }}
                            </strong>
                            <template v-if="item.key === 'fake_impost'">
                                <div class="control mb-4">
                                    <label class="control__label">
                                        {{ i18n.fakeImpostProfileType }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="fakeImpostProfileType"
                                        :options="Object.keys(fakeImpostProfileTypes)"
                                        :allow-empty="false"
                                        :placeholder="i18n.select_placeholder"
                                        :searchable="false"
                                        >
                                    </multiselect>
                                </div>
                                <div class="control mb-4">
                                    <label class="control__label">
                                        {{ i18n.fakeImpostReinType }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="fakeImpostReinType"
                                        :options="fakeImpostReinTypesOptions"
                                        :allow-empty="false"
                                        :placeholder="i18n.select_placeholder"
                                        :searchable="false"
                                        >
                                        <template #singleLabel="props">
                                            {{ fakeImpostReinTypes[props.option].i18n }}
                                        </template>
                                        <template #option="props">
                                            <span>
                                                {{ fakeImpostReinTypes[props.option].i18n }}
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>
                            </template>
                            <fake-impost
                                v-if="item.key === 'fake_impost'"
                                :pt="fakeImpostProfileType"
                                :rt="fakeImpostReinType"
                                >
                            </fake-impost>
                            <component
                                v-else
                                v-bind:is="`scheme_-${profileType}`"
                                :view="item.key"
                                :rt="getReinType(item.key)"
                                >
                            </component>
                            <p class="col-span-12 text">
                                <span class="block mb-2">
                                    <span>Расчётный прогиб, мм:</span> {{ item.result.toFixed(2) }}
                                </span>
                                <span class="block">
                                    <span class="text--success" v-if="item.result <= maxСurve">
                                        Удовлетворяет условию прочности!
                                    </span>
                                    <span class="text--warning" v-else>
                                        Не удовлетворяет условию прочности!
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
        <div class="wrapper wrapper--print">
            <fieldset class="fieldset grid grid-cols-12 gap-7">
                <div class="wrapper col-span-8">
                    <h4 class="fieldset__title">
                        {{ i18n.step_1_2 }}
                    </h4>
                    <table
                        class="form__table"
                        v-for="(group, g_index) in printParams"
                        :key="`table_${g_index}`"
                        >
                        <tbody>
                            <tr
                                v-for="(param, p_index) in group"
                                :key="`tr_${p_index}`"
                                >
                                <td>
                                    {{ param.title }}
                                </td>
                                <td class="text-right">
                                    {{ param.value }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text text--accented">
                        <span>{{ i18n.maxСurve }}:</span> {{ maxСurve.toFixed(3) }}
                    </p>
                </div>
                <div class="wrapper col-span-4">
                    <el-window
                        class="mb-4"
                        :a="a"
                        :b="b"
                        :c="c"
                        :d="d"
                        :L="L"
                        >
                    </el-window>
                    <div class="wrapper wrapper--profile-pic">
                        <picture>
                            <source :srcset="profilePic.webp" type="image/webp">
                            <source :srcset="profilePic.png" type="image/png">
                            <img
                                :src="profilePic.png"
                                :alt="profileType"
                                loading="lazy"
                                >
                        </picture>
                    </div>
                </div>
            </fieldset>
            <fieldset class="fieldset">
                <h4 class="fieldset__title">
                    {{ i18n.step_5 }}
                </h4>
                <div class="grid grid-cols-12 gap-7">
                    <div
                        v-for="(item, index) in resultViews"
                        :key="`result_${item.key}`"
                        class="col-span-6 wrapper wrapper--result"
                        >
                        <fake-impost
                            v-if="item.key === 'fake_impost'"
                            :pt="fakeImpostProfileType"
                            :rt="fakeImpostReinType"
                            >
                        </fake-impost>
                        <component
                            v-else
                            v-bind:is="`scheme_-${profileType}`"
                            :view="item.key"
                            :rt="getReinType(item.key)"
                            >
                        </component>
                        <div class="wrapper">
                            <strong>
                                {{ item.title }}
                            </strong>
                            <template v-if="item.key === 'fake_impost'">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {{ i18n.fakeImpostProfileType }}
                                            </td>
                                            <td class="text-right">
                                                {{ fakeImpostProfileType }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {{ i18n.fakeImpostReinType }}
                                            </td>
                                            <td class="text-right">
                                                {{ fakeImpostReinTypes[fakeImpostReinType].i18n }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </template>
                            <p class="col-span-12 text">
                                <span class="block mb-0">
                                    <span>Расчётный прогиб, мм:</span> {{ item.result.toFixed(2) }}
                                </span>
                                <span class="block">
                                    <span v-if="item.result <= maxСurve">
                                        Удовлетворяет условию прочности!
                                    </span>
                                    <span v-else>
                                        Не удовлетворяет условию прочности!
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>

    </form>
</template>

<script>

    import { defineAsyncComponent } from 'vue';
    import { events } from '@/lib/events';
    import Multiselect from 'vue-multiselect';

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

    import elWindow from '@/components/elWindow.vue';
    import elBuilding from '@/components/elBuilding.vue';

    import { specsData } from '@/specsData.js';

    let EP = 3400000000, //Модули упругости (ПВХ, Па) [[F230]]
        ES = 210000000000, //Модули упругости (Материала  вкладыша, Па) [[F231]]
        CSA = 3400000, //Площади поперечного сечения (Константа,принимаемая) [[F257]]
        MRI = 0.00001, //Коэффициенты линейного температурного расширения (Материал усилительного вкладыша,К-1) [[F264]]
        AP = 0.00008, // Коэффициенты линейного температурного расширения (Материал ПВХ, К-1) [[F265]]
        R0 = 0.76, //Термическое сопротивление профиля импоста оконной конструкции,Вт/(м²∙℃) [[F269]]
        AH = 23, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F273]]
        AB = 8, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F274]]
        YC = 1.4; //Коэффициент надежности по нагрузке для основной и пиковой ветровых нагрузок [[[F224]]]

    export default {
        name: 'elFormImpost',
        components: {
            Multiselect,
            scheme_T78_AERO: defineAsyncComponent(() => import('@/components/schemas/T78_AERO.vue')),
            scheme_T80_AERO: defineAsyncComponent(() => import('@/components/schemas/T80_AERO.vue')),
            scheme_T78_SUPER_AERO: defineAsyncComponent(() => import('@/components/schemas/T78_SUPER_AERO.vue')),
            scheme_T80_SUPER_AERO: defineAsyncComponent(() => import('@/components/schemas/T80_SUPER_AERO.vue')),
            scheme_T78_ACLASS: defineAsyncComponent(() => import('@/components/schemas/T78_ACLASS.vue')),
            scheme_T78_ACLASS_L68: defineAsyncComponent(() => import('@/components/schemas/T78_ACLASS_L68.vue')),
            scheme_T86_60_4: defineAsyncComponent(() => import('@/components/schemas/T86_60_4.vue')),
            scheme_T86_70_6: defineAsyncComponent(() => import('@/components/schemas/T86_70_6.vue')),
            scheme_GLIDE: defineAsyncComponent(() => import('@/components/schemas/GLIDE.vue')),
            fakeImpost: defineAsyncComponent(() => import('@/components/schemas/fakeImpost.vue')),
            elWindow,
            elBuilding
        },
        data() {
            return {

                //Шаг 1
                windRegions: {
                    'Ia': {
                        w0: 170, // Нормативное значение ветрового давления, Па
                    },
                    'I': {
                        w0: 230,
                    },
                    'II': {
                        w0: 300,
                    },
                    'III': {
                        w0: 380,
                    },
                    'IV': {
                        w0: 480,
                    },
                    'V': {
                        w0: 600,
                    },
                    'VI': {
                        w0: 730,
                    },
                    'VII': {
                        w0: 850,
                    }
                },
                windRegion: 'II', //Ветровой район [[B8]]
                terrainTypes: ['A', 'B', 'C'],
                terrainType: 'C', //Тип местности [[B12]]
                Tn: -20, //Расчетная наружная температура воздуха (температура воздуха наиболее холодной пятидневки),˚С  [[F16]]
                Tref: 10, //Температура замыкания (монтажа) оконной конструкции, ˚С [[F17]]
                Tv: 21, //Расчетная внутренняя температура воздуха,˚С [[F18]]

                //Шаг 2
                Bh: 60, //Высота здания h (м) [[B9]]
                Bw: 47, //Ширина здания d (м) [[B10]]
                Bl: 30, //Длина здания [[E10]]
                Wh: 50, //Фактическая высота установки окна (м): [[B11]]
                windSides: {
                    'windward_side': {
                        i18n: 'Наветренная сторона'
                    },
                    'leeward_side': {
                        i18n: 'Подветренная сторона'
                    },
                    'side_wall': {
                        i18n: 'Боковая стена'
                    }
                },
                windSide: 'windward_side', //Сторона [[D8]]
                Wgap: 5, //Расстояние от края наветренной стены до окна [[E11]]

                //Шаг 3
                L: 180, //Длина импоста L (см) [[B13]]
                a: 109, //Рассчитываемый элемент a [[B14]]
                b: 100, //Рассчитываемый элемент b [[B15]]
                c: 100, //Рассчитываемый элемент c [[B16]]

                //Шаг 4
                profileTypes: {
                    'T78_AERO': {
                        impostWidth: 0.06, //Ширина профиля импоста,м [[F283]]
                        tk: 0.78, //Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, [[R50, R53]]
                        te: 1.08, // Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле [[Q50, Q53]]
                        kR: 1, // Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [[F276]]
                        i18n: 'Т78 AERO', // название для таблицы
                        sku: '10003078' // артикул
                    },
                    'T80_AERO': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 1,
                        i18n: 'Т80 AERO',
                        sku: '10003080'
                    },
                    'T78_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        te: 1.11,
                        kR: 1,
                        i18n: 'T78 SUPER AERO',
                        sku: '10603078'
                    },
                    'T80_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        te: 1.11,
                        kR: 1,
                        i18n: 'T80 SUPER AERO',
                        sku: '10603080'
                    },
                    'T78_ACLASS': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 2,
                        i18n: 'Т78 ACLASS',
                        sku: '11103078'
                    },
                    'T78_ACLASS_L68': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 2,
                        i18n: 'Т78 ACLASS',
                        sku: '11103078'
                    },
                    'T86_60_4': {
                        impostWidth: 0.06,
                        tk: 0.82,
                        te: 1.2,
                        kR: 0.5,
                        i18n: 'T86 60-4',
                        sku: '10203086'
                    },
                    'T86_70_6': {
                        impostWidth: 0.07,
                        tk: 0.85,
                        te: 1.32,
                        kR: 1.25,
                        i18n: 'T86 70-6',
                        sku: '10403086'
                    },
                    'GLIDE': {
                        impostWidth: 0.031,
                        tk: 0.78,
                        te: 1.08,
                        kR: 1,
                        i18n: 'GLIDE',
                        sku: '10802065'
                    }
                },
                profileType: 'T80_SUPER_AERO', //Профильная система [[F20]]
                profileColors: {
                    'white': {
                        i18n: 'Белый',
                        p: 0.3 //Коэффициент
                    },
                    'colored': {
                        i18n: 'Цветной',
                        p: 0.25
                    }
                },
                profileColor: 'white', //Цвет профиля [[F21]]
                reinTypes: {
                    rt_35x20x1_5_pipe: {
                        i18n: '35*20*1,5(труба)',
                        sku: '41108020'
                    },
                    rt_35x20x2_pipe: {
                        i18n: '35*20*2(труба)',
                        sku: '40308020'
                    },
                    rt_35x20x1_5: {
                        i18n: '35*20*1,5',
                        sku: '40108020'
                    },
                    rt_35x20x2: {
                        i18n: '35*20*2',
                        sku: '40408007'
                    },
                    rt_35x28x1_5: {
                        i18n: '35*28*1,5',
                        sku: '40108028'
                    },
                    rt_35x28x2: {
                        i18n: '35*28*2',
                        sku: '40408028'
                    },
                    rt_35x28x1_5_pipe: {
                        i18n: '35*28*1,5(труба)',
                        sku: '41108028'
                    },
                    rt_35x28x2_pipe: {
                        i18n: '35*28*2(труба)',
                        sku: '40308028'
                    },
                    rt_26x19x1_5: {//GLIDE
                        i18n: '26*19*1,5',
                        sku: '40108026'
                    },
                    rt_26x19x2: {//GLIDE
                        i18n: '26*19*2',
                        sku: '40808026'
                    },

                    //в расчетах не используются но зачем-то выводятся в итоговых таблицах
                    rt_50x25x2_pipe: {
                        i18n: '50*25*2 (труба)',
                        sku: '40108025'
                    },
                    rt_100x6: {
                        i18n: '100*6',
                        sku: '40108100'
                    },
                    rt_80x13x2: {
                        i18n: '80*13*2',
                        sku: '40108013'
                    },
                    rt_50x40: {
                        i18n: '50*40',
                        sku: '40108050'
                    }
                },
                reinType: 'rt_35x20x2_pipe', //Армирование импоста [[F22]]
                reinType_60_70: 'rt_35x20x2_pipe', // Армирование для коробок 60-4 и 70-6  [[F23]]
                reinType_L68: 'rt_35x28x1_5', // Армирование для коробок L68
                showDebug: false,
                hasShareOpportunity: false,
                fakeImpostProfileTypes: {
                    AERO_Z60: {
                        i18n: 'Z60 AERO',
                        sku: '10002060'
                    },
                    SUPER_AERO_Z60: {
                        i18n: 'Z60 SUPER AERO',
                        sku: '10602060'
                    },
                    SUPER_AERO_Z77: {
                        i18n: 'Z77 SUPER AERO',
                        sku: '10602077'
                    },
                    ACLASS_Z60: {
                        i18n: 'Z60 ACLASS',
                        sku: '11102060'
                    },
                    ACLASS_T118: {
                        i18n: 'Т118',
                        sku: '10302118'
                    },
                    ACLASS_Z118: {
                        i18n: 'Z118-60',
                        sku: '10302060'
                    },
                    ACLASS_T94: {
                        i18n: 'Т94',
                        sku: '10302094'
                    },
                    ACLASS_Z94: {
                        i18n: 'Z94',
                        sku: '10302074'
                    },
                    Z_60_4: {
                        i18n: 'Z60 60-4',
                        sku: '10202060'
                    },
                    Z_70_6: {
                        i18n: 'Z60 70-6',
                        sku: '10402060'
                    },
                    T118_70_6: {
                        i18n: 'Т118-70',
                        sku: '10702118'
                    }
                },
                fakeImpostProfileType: 'AERO_Z60',
                fakeImpostReinTypes: {
                    rt_35x28x7x1_5: {
                        i18n: '35*28*7*1,5',
                        sku: '40108007'
                    },
                    rt_35x28x7x2: {
                        i18n: '35*28*7*2',
                        sku: '40408007'
                    },
                    rt_35x28x1_5: {
                        i18n: '35*28*1,5',
                        sku: '40108028'
                    },
                    rt_35x28x2: {
                        i18n: '35*28*2',
                        sku: '40408028'
                    },
                    rt_40x50x2_pipe: {
                        i18n: '40*50*2(труба)',
                        sku: '40108050'
                    },
                    //эти 2 в расчетах не используются но зачем-то выводятся в итоговых таблицах
                    rt_20x26x13: {
                        i18n: '20*26*13',
                        sku: '41108026'
                    },
                    rt_50x15x2: {
                        i18n: '50*15*2',
                        sku: '40408050'
                    }
                },
                fakeImpostReinType: 'rt_35x28x7x1_5',
                views: {
                    impost: {
                        i18n: 'Импост'
                    },
                    pilyastr: {
                        i18n: 'Усиление пилястровым профилем',
                        sku: '10105063'
                    },
                    connective3: {
                        i18n: 'Соединительный профиль 3',
                        sku: {
                            '60': '10105003',
                            '70': '10405017'
                        }
                    },
                    universal: {
                        i18n: 'Профиль соединительный универсальный',
                        sku: '10105024'
                    },
                    connective38: {
                        i18n: 'Профиль соединительный 38',
                        sku:{
                            '60': '10105038',
                            '70': '10405038',
                        }
                    },
                    connective65: {
                        i18n: 'Профиль соединительный 65',
                        sku: {
                            '60': '10105065',
                            '70': '10405065',
                        }
                    },
                    fake_impost: {
                        i18n: 'Ложный импост',
                        sku: {
                            '60': '10103062',
                            '62': '10103034',
                            '70': '10402064'
                        }
                    }
                },
                boxes: {
                    L60_AERO: {
                        i18n: 'L60 AERO',
                        sku: '10001060'
                    },
                    L60_SUPER_AERO: {
                        i18n: 'L60 SUPER AERO',
                        sku: '10601060'
                    },
                    L60_ACLASS: {
                        i18n: 'L60 ACLASS',
                        sku: '11101060'
                    },
                    L64_60_4: {
                        i18n: 'L64 60-4',
                        sku: '10201064'
                    },
                    L64_70_6: {
                        i18n: 'L64 70-6',
                        sku: '10401064'
                    },
                    L68_ACLASS: {
                        i18n: 'L68 ACLASS',
                        sku: '11101068'
                    }
                }
            }
        },
        watch:{
            profileType(newVal, oldVal){
                this.onProfileTypeChange();
            },
            fakeImpostProfileType(newVal, oldVal){
                this.onFakeImpostProfileTypeChange();
            }
        },
        computed: {
            profilePic(){// ссылка на картинку в зависимости от типа профиля
                switch (this.profileType) {
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
            i18n(){
                return {
                    step_1: 'Нормативные значения',
                    step_2: 'Параметры здания',
                    step_3: 'Параметры оконного блока',
                    step_4: 'Тип профиля',
                    step_5: 'Варианты исполнений',
                    select_placeholder: 'Выберите значение',
                    step_1_2: 'Нормативные значения и параметры',

                    windRegion: 'Ветровой район',
                    terrainType: 'Тип местности',
                    Tn: 'Расчетная наружная температура воздуха,˚С',
                    Tref: 'Температура замыкания (монтажа) оконной конструкции, ˚С',
                    Tv: 'Расчетная внутренняя температура воздуха,˚С',
                    Bh: 'Высота здания h (м)',
                    Bw: 'Ширина здания d (м)',
                    Bl: 'Длина здания',
                    Wh: 'Фактическая высота установки окна (м)',
                    windSide: 'Сторона',
                    windSideViews: {
                        windward_side: 'Наветренная сторона',
                        leeward_side: 'Подветренная сторона',
                        side_wall: 'Боковая сторона',
                    },
                    Wgap: 'Расстояние от края наветренной стены до окна, м',
                    L: 'Длина импоста L (см)',
                    a: 'a (см)',
                    b: 'b (см)',
                    c: 'c (см)',
                    d: 'd (см)',
                    profileType: 'Тип профиля',
                    profileColor: 'Цвет профиля',
                    reinType: 'Армирование импоста',
                    reinType_60_70: 'Армирование для коробок 60-4 и 70-6',
                    reinType_L68: 'Армирование для коробок L68',
                    maxСurve: 'Максимально допустимый прогиб, мм',
                    fakeImpostProfileType: 'Створка для конструкции с ложным импостом',
                    fakeImpostReinType: 'Армирование в створку для конструкции с ложным импостом ',
                    profile: 'Профиль',
                    sku: 'Артикул',
                    sash: 'Створка',
                    sashes: 'Створки',
                    door_sash: 'Створка дверная',
                    box: 'Коробка',
                    rein_profile: 'Профиль армирующий',
                    pilyastr_63: 'Профиль пилястровый  63'
                }
            },
            isVisible(){
                return {
                    Wgap: this.windSide === 'side_wall',
                    reinType_60_70: ['T86_60_4', 'T86_70_6'].includes(this.profileType),
                    reinType_L68: ['T78_ACLASS_L68'].includes(this.profileType)
                }
            },
            printParams(){
                return [
                    [
                        {
                            title: this.i18n.windRegion,
                            value: this.windRegion
                        },
                        {
                            title: this.i18n.terrainType,
                            value: this.terrainType
                        },
                        {
                            title: this.i18n.Tn,
                            value: this.Tn
                        },
                        {
                            title: this.i18n.Tref,
                            value: this.Tref
                        },
                        {
                            title: this.i18n.Tv,
                            value: this.Tv
                        },
                        {
                            title: this.i18n.windSide,
                            value: this.windSides[this.windSide].i18n
                        }
                    ],
                    [
                        ...(
                            this.isVisible.Wgap ? [{
                                title: this.i18n.Wgap,
                                value: this.Wgap
                            }] : []
                        ),
                        {
                            title: this.i18n.L,
                            value: this.L
                        },
                        {
                            title: this.i18n.a,
                            value: this.a
                        },
                        {
                            title: this.i18n.b,
                            value: this.b
                        },
                        {
                            title: this.i18n.c,
                            value: this.c
                        },
                        {
                            title: this.i18n.d,
                            value: this.d.toFixed(2)
                        },
                    ],
                    [
                        {
                            title: this.i18n.profileType,
                            value: this.profileType
                        },
                        {
                            title: this.i18n.profileColor,
                            value: this.profileColors[this.profileColor].i18n
                        },
                        {
                            title: this.i18n.reinType,
                            value: this.reinTypes[this.reinType].i18n
                        },
                        ...(
                            this.isVisible.reinType_60_70 ? [{
                                title: this.i18n.reinType_60_70,
                                value: this.reinTypes[this.reinType_60_70].i18n
                            }] : []
                        ),
                        ...(
                            this.isVisible.reinType_L68 ? [{
                                title: this.i18n.reinType_L68,
                                value: this.reinTypes[this.reinType_L68].i18n
                            }] : []
                        )
                    ]
                ];
            },
            boxByProfileType(){
                switch (this.profileType) {
                    case 'T78_AERO':
                    case 'T80_AERO':
                        return 'L60_AERO';
                    case 'T78_SUPER_AERO':
                    case 'T80_SUPER_AERO':
                        return 'L60_SUPER_AERO';
                    case 'T78_ACLASS':
                        return 'L60_ACLASS';
                    case 'T78_ACLASS_L68':
                        return 'L68_ACLASS';
                    case 'T86_60_4':
                        return 'L64_60_4';
                    case 'T86_70_6':
                        return 'L64_70_6';
                    default:
                        return '';
                }
            },
            d(){ //Рассчитываемый элемент d [[B17]]
                return this.L - this.c;
            },
            selectedProfileParams(){// параметры выбранного профиля
                return this.profileTypes[this.profileType];
            },
            resultViews(){// варианты расчетов в зависимости от типа профиля
                let resp = [
                    {
                        key: 'impost',
                        title: this.views['impost'].i18n,
                        result: this.computeEstimatedDeflection('impost'),
                        tables: this.getResultTables('impost')
                    },
                    {
                        key: 'pilyastr',
                        title: this.views['pilyastr'].i18n,
                        result: this.computeEstimatedDeflection('pilyastr'),
                        tables: this.getResultTables('pilyastr')
                    }
                ];
                if( this.profileType !== 'GLIDE' ){
                    resp = [
                        ...resp,
                        ...[
                            {
                                key: 'connective3',
                                title: `${this.views['connective3'].i18n}/${this.viewSubSize}`,
                                result: this.computeEstimatedDeflection('connective3'),
                                tables: this.getResultTables('connective3')
                            },
                            {
                                key: 'universal',
                                title: this.views['universal'].i18n,
                                result: this.computeEstimatedDeflection('universal'),
                                tables: this.getResultTables('universal')
                            },
                            {
                                key: 'connective38',
                                title: `${this.views['connective38'].i18n}/${this.viewSubSize}`,
                                result: this.computeEstimatedDeflection('connective38'),
                                tables: this.getResultTables('connective38')
                            },
                            {
                                key: 'connective65',
                                title: `${this.views['connective65'].i18n}/${this.viewSubSize}`,
                                result: this.computeEstimatedDeflection('connective65'),
                                tables: this.getResultTables('connective65')
                            }
                        ]
                    ];
                }
                resp.push({
                    key: 'fake_impost',
                    title: this.views['fake_impost'].i18n,
                    result: this.computeEstimatedDeflection('fake_impost'),
                    tables: this.getResultTables('fake_impost')
                });
                return resp;
            },
            viewSubSize(){
                if( ['T78_AERO', 'T80_AERO', 'T78_ACLASS', 'T78_ACLASS_L68', 'T86_60_4'].includes(this.profileType) ){
                    return  60;
                }
                if( ['T78_SUPER_AERO', 'T80_SUPER_AERO', 'T86_70_6' ].includes(this.profileType) ){
                    return 70;
                }
            },
            fakeImpostSubSize(){
                if( ['AERO_Z60', 'ACLASS_Z60', 'Z_60_4'].includes(this.fakeImpostProfileType) ){
                    return 62;
                }
                if( ['ACLASS_T118', 'ACLASS_Z118', 'ACLASS_T94', 'ACLASS_Z94'].includes(this.fakeImpostProfileType) ){
                    return 60;
                }
                if( ['SUPER_AERO_Z60', 'SUPER_AERO_Z77', 'Z_70_6', 'T118_70_6'].includes(this.fakeImpostProfileType) ){
                    return 70;
                }
            },
            reinTypesOptions(){// Тип армирования в зависимости от типа профиля
                if( ['T86_60_4', 'T86_70_6'].includes(this.profileType) ){
                    return ['rt_35x28x1_5', 'rt_35x28x2', 'rt_35x28x1_5_pipe', 'rt_35x28x2_pipe'];
                }else if( ['GLIDE'].includes(this.profileType) ){
                    return ['rt_26x19x1_5', 'rt_26x19x2'];
                }else{//для всех остальных
                    return ['rt_35x20x1_5_pipe', 'rt_35x20x2_pipe', 'rt_35x20x1_5', 'rt_35x20x2'];
                }
            },
            reinTypes_60_70_Options(){
                return ['rt_35x20x1_5_pipe', 'rt_35x20x2_pipe', 'rt_35x20x1_5', 'rt_35x20x2'];
            },
            reinTypes_L68_Options(){
                return ['rt_35x28x1_5', 'rt_35x28x2', 'rt_35x28x1_5_pipe', 'rt_35x28x2_pipe'];
            },
            fakeImpostReinTypesOptions(){
                if( ['ACLASS_T118', 'ACLASS_Z118', 'T118_70_6'].includes(this.fakeImpostProfileType) ){
                    return ['rt_40x50x2_pipe'];
                }else{//для всех остальных
                    return ['rt_35x28x7x1_5', 'rt_35x28x7x2', 'rt_35x28x1_5', 'rt_35x28x2'];
                }
            },
            maxСurve(){//Максимально допустимый прогиб, мм [[D25]]
                return ((this.L/100)/200)*1000;
            },
            DZE(){// Коэффициент пульсации давления ветра [[F214]]
                let scheme = [
                    [   0.85,   1.22,   1.78   ],
                    [   0.76,   1.06,   1.78   ],
                    [   0.69,   0.92,   1.5    ],
                    [   0.62,   0.8,    1.26   ],
                    [   0.58,   0.74,   1.14   ],
                    [   0.56,   0.7,    1.06   ],
                    [   0.54,   0.67,   1      ],
                    [   0.51,   0.62,   0.9    ],
                    [   0.49,   0.58,   0.84   ],
                    [   0.47,   0.56,   0.8    ],
                    [   0.46,   0.54,   0.76   ],
                ],
                rowNum = null,
                colNum = null,
                rowRanges = [
                    { min: 0,       max: 5,     value: 0    },
                    { min: 5,       max: 10,    value: 1    },
                    { min: 10,      max: 20,    value: 2    },
                    { min: 20,      max: 40,    value: 3    },
                    { min: 40,      max: 60,    value: 4    },
                    { min: 60,      max: 80,    value: 5    },
                    { min: 80,      max: 100,   value: 6    },
                    { min: 100,     max: 150,   value: 7    },
                    { min: 150,     max: 200,   value: 8    },
                    { min: 200,     max: 250,   value: 9    },
                    { min: 250,     max: 300,   value: 10   }
                ];

                for (let range of rowRanges) {
                    if (this.ZE > range.min && this.ZE <= range.max) {
                        rowNum = range.value;
                    }
                }
                if( this.terrainType === 'A' ){ colNum = 0; }
                if( this.terrainType === 'B' ){ colNum = 1; }
                if( this.terrainType === 'C' ){ colNum = 2; }
                return scheme[rowNum][colNum];
            },
            ZE(){//Эквивалентная высота  [[F201]]
                if (this.Bh <= this.Bw) {
                    return this.Bh;
                } else if (this.Bh < this.Bw && this.Bh <= 2*this.Bw) {
                    if ((this.Bh - this.Bw) <= this.Wh) {
                        return this.Bh;
                    } else {
                        return this.Bw;
                    }
                } else {
                    if ((this.Bh - this.Bw) <= this.Wh) {
                        return this.Bh;
                    } else if (this.Wh > 0 && this.Wh <= this.Bw) {
                        return this.Bw;
                    } else {
                        return this.Wh;
                    }
                }
            },
            V(){// Коэффициент пространственной корреляции пульсации давления ветра [[F215]]
                let scheme = [
                    [   0.95,   0.92,   0.88,   0.83,   0.76,   0.67,   0.56  ],
                    [   0.89,   0.87,   0.84,   0.8,    0.73,   0.65,   0.54  ],
                    [   0.85,   0.84,   0.81,   0.77,   0.71,   0.64,   0.53  ],
                    [   0.8,    0.78,   0.76,   0.73,   0.68,   0.61,   0.51  ],
                    [   0.72,   0.72,   0.7,    0.67,   0.63,   0.57,   0.48  ],
                    [   0.63,   0.63,   0.61,   0.59,   0.56,   0.51,   0.44  ],
                    [   0.53,   0.53,   0.52,   0.5,    0.47,   0.44,   0.38  ]
                ],
                rowNum = null,
                colNum = null,
                rowRanges = [
                    { min: 0,       max: 0.1,       value: 0 },
                    { min: 0.1,     max: 5,         value: 1 },
                    { min: 5,       max: 10,        value: 2 },
                    { min: 10,      max: 20,        value: 3 },
                    { min: 20,      max: 40,        value: 4 },
                    { min: 40,      max: 80,        value: 5 },
                    { min: 80,      max: 160,       value: 6 }
                ],
                colRanges = [
                    { min: 0,       max: 5,         value: 0 },
                    { min: 5,       max: 10,        value: 1 },
                    { min: 10,      max: 20,        value: 2 },
                    { min: 20,      max: 40,        value: 3 },
                    { min: 40,      max: 80,        value: 4 },
                    { min: 80,      max: 160,       value: 5 },
                    { min: 160,     max: 350,       value: 6 }
                ];

                for (let range of rowRanges) {
                    if (this.Bw > range.min && this.Bw <= range.max){
                        rowNum = range.value;
                    };
                }
                for (let range of colRanges) {
                    if (this.Bl >= range.min && this.Bl <= range.max){
                        colNum = range.value;
                    };
                }
                return scheme[rowNum][colNum];
            },
            KZE(){// Коэффициент учитывающий изменение ветрового давления k(ze) [[F202]]
                let scheme = [
                    [   0.75,   0.5,    0.4     ],
                    [   1,	    0.65,   0.4     ],
                    [   1.25,   0.85,   0.55    ],
                    [   1.5,    1.1,    0.8     ],
                    [   1.7,    1.3,    1       ],
                    [   1.85,   1.45,   1.15    ],
                    [   2,	    1.6,    1.25    ],
                    [   2.25,   1.9,    1.55    ],
                    [   2.45,   2.1,    1.8     ],
                    [   2.65,   2.3,    2       ],
                    [   2.75,   2.5,    2.2     ]
                ],
                rowNum = null,
                colNum = null,
                rowRanges = [
                    { min: 0,       max: 5,     value: 0 },
                    { min: 5,       max: 10,    value: 1 },
                    { min: 10,      max: 20,    value: 2 },
                    { min: 20,      max: 40,    value: 3 },
                    { min: 40,      max: 60,    value: 4 },
                    { min: 60,      max: 80,    value: 5 },
                    { min: 80,      max: 100,   value: 6 },
                    { min: 100,     max: 150,   value: 7 },
                    { min: 150,     max: 200,   value: 8 },
                    { min: 200,     max: 250,   value: 9 },
                    { min: 250,     max: 300,   value: 10 }
                ];
                for (const range of rowRanges) {
                    if (this.ZE > range.min && this.ZE <= range.max){
                        rowNum = range.value
                    };
                }
                if( this.terrainType === 'A' ){ colNum = 0; }
                if( this.terrainType === 'B' ){ colNum = 1; }
                if( this.terrainType === 'C' ){ colNum = 2; }
                return scheme[rowNum][colNum];
            },
            CZE(){// Аэродинамический   коэфф [[F203]]
                let e = Math.min(this.Bw, this.Bl), //[[AB59]]
                    e5 = e / 5;
                if (this.windSide === 'windward_side'){ return 0.8; }
                if (this.windSide === 'leeward_side'){ return -0.5; }
                if (this.windSide === 'side_wall'){
                    if (this.Wgap <= e5){ return -1; }
                    if (this.Wgap > e5 && this.Wgap <= e){ return -0.8; }
                    if (this.Wgap > e){ return -0.5; }
                }
            },
            K0(){//Начальная кривизна оси импоста оконной конструкции, м-1 [[F285]]
                let IW = this.selectedProfileParams.impostWidth, //[[F283]]
                    tk = this.selectedProfileParams.tk;// [[F281]]
                return AP * ((this.Tv - this.Tn)/IW)*(R0/((1/AB)+R0+(1/AH))) * tk;
            }
        },
        methods: {
            onProfileTypeChange(){// при смене типа профиля, меняем Тип армирования на первый из списка доступных
                this.reinType = this.reinTypesOptions[0];
                if( ['T86_60_4', 'T86_70_6'].includes(this.profileType) ){// если выбрали 'T86_60_4' или 'T86_70_6' то меняем доп. список
                    this.reinType_60_70 = this.reinTypes_60_70_Options[0];
                }
                if( ['T78_ACLASS_L68'].includes(this.profileType) ){// если выбрали 'T78_ACLASS_L68' то меняем доп. список
                    this.reinType_L68 = this.reinTypes_L68_Options[0];
                }
            },
            onFakeImpostProfileTypeChange(){
                this.fakeImpostReinType = this.fakeImpostReinTypesOptions[0];
            },
            computeSpec(specKey){
                let scheme = specsData[specKey],
                    pt = specKey === 'fake_impost' ? this.fakeImpostProfileType : this.profileType,
                    rt = specKey === 'fake_impost' ? this.fakeImpostReinType : this.reinType,
                    profileData = scheme[pt],//данные по профилю
                    data = null;
                if( profileData ){//если данные есть
                    if( profileData[rt] ){//если есть данные по основному выпадающему списку
                        data = profileData[rt];
                    }else if( specKey !== 'fake_impost' ){//ищем данные по дополнительным выпадающим спискам
                        if( this.isVisible.reinType_60_70 && profileData[this.reinType_60_70] ){
                            data = profileData[this.reinType_60_70];
                        }
                        if( this.isVisible.reinType_L68 && profileData[this.reinType_L68] ){
                            data = profileData[this.reinType_L68];
                        }
                    }
                }
                return {
                    yellow: data?.yellow/1000000000000,
                    orange: data?.orange/1000000000000,
                    cyan:   data?.cyan/1000,
                    purple: data?.purple/1000000,
                    green:  data?.green/1000000
                };
            },
            computeEstimatedDeflection(specKey){
                let specs = this.computeSpec(specKey),
                    K0 = this.K0,
                    Tref = this.Tref, //Температура замыкания (монтажа) оконной конструкции, ˚С [[F17]]
                    Tn = this.Tn, //Расчетная наружная температура воздуха (температура воздуха наиболее холодной пятидневки),˚С  [[F16]]
                    Tv = this.Tv, //Расчетная внутренняя температура воздуха,˚С [[F18]]
                    LM = this.L/100, //Длина импоста L (в метрах)
                    aM = this.a/100, //Рассчитываемый элемент a (в метрах)
                    bM = this.b/100, //Рассчитываемый элемент b (в метрах)
                    W0 = this.windRegions[this.windRegion].w0, // [[F196]]
                    Wm = W0*this.KZE*this.CZE, // Нормативное значение средней составляющей основной ветровой нагрузки Wm [[F197]]
                    Wp = Wm*this.DZE*this.V, // Нормативное значение пульсационной составляющей основной ветровой нагрузки Wp [[F216]]
                    qw = (Wm + Wp)*YC, //Нормативное значение пиковой ветровой нагрузки на оконную конструкцию, Па. [[F223]]
                    te = this.selectedProfileParams.te, //[[F280]]
                    kR = this.selectedProfileParams.kR, //Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [[F276]]
                    P = this.profileColors[this.profileColor].p, // [[F244]]

                    yellow = specs.yellow, //Главные моменты инерции (Сечения профиля, м4)
                    orange = specs.orange, //Главные моменты инерции (Сечения усилительного вкладыша, м4)
                    cyan = specs.cyan, // Главные моменты инерции (δ)
                    purple = specs.purple, //площади сеч (ПВХ профиль, м2)
                    green = specs.green; // площади сеч (Усилительный вкладыш, м2)

                let tm = (Tv - (Tv - Tn)) * ((1 / AB + R0 / (kR + 1)) / (1 / AB + R0 + 1 / AH)); // Температура во внутренней камере ПВХ профиля, ℃ [[F267]]
                let G = (1 / (purple * EP)) + (1 / (green * ES));
                let H2 = ((tm - Tref) * (AP * te - MRI)) / (G * P * CSA * (G + (2 / (CSA * (LM - 2 * P))) + 2 * G + (2 / (CSA * (LM - 2 * P)))));
                let H1 = H2 * (P * CSA * (G + (2 / (CSA * (LM - 2 * P)))) + 1);
                let fw = (qw / (ES * orange + EP * yellow)) * (aM * Math.pow(aM ** 2 - 5 * LM ** 2, 2) + bM * Math.pow(bM ** 2 - 5 * LM ** 2, 2)) / 3840;
                let ft = (K0 * LM ** 2 * EP * yellow - cyan * (H1 * LM ** 2 + H2 * (LM ** 2 - 4 * P ** 2))) / (8 * (ES * orange + EP * yellow));
                return (fw+ft)*1000;
            },
            setParamsFromRoute(params){
                if( params.get('debug') === 'true' ){
                    this.showDebug = true;
                }
                let selects = {
                    windRegion: Object.keys(this.windRegions),
                    terrainType: this.terrainTypes,
                    windSide: Object.keys(this.windSides),
                    profileType: Object.keys(this.profileTypes),
                    profileColor: Object.keys(this.profileColor),
                    fakeImpostProfileType: Object.keys(this.fakeImpostProfileTypes)
                }
                Object.keys(selects).map(key => {
                    let value = params.get(key);
                    if( value && selects[key].includes(value) ){
                        this[key] = value;
                    }
                });
                ['Tn', 'Tref', 'Tv', 'Bh', 'Bw', 'Bl', 'Wh', 'Wgap', 'L', 'a','b', 'c'].map(key => {
                    let value = parseFloat( params.get(key) );
                    if( !isNaN(value) ){
                        this[key] = value;
                    }
                });
                this.$nextTick(() => {// рассчитываем отдельно(после срабатывания watch и пересчета reinTypesOptions)
                    selects = {
                        reinType: this.reinTypesOptions,
                        reinType_60_70: this.reinTypes_60_70_Options,
                        reinType_L68: this.reinTypes_L68_Options,
                        fakeImpostReinType: this.fakeImpostReinTypesOptions
                    }
                    Object.keys(selects).map(key => {
                        let value = params.get(key);
                        if( value && selects[key].includes(value) ){
                            this[key] = value;
                        }
                    });
                });
            },
            generateUrlParams(){
                let params = new URLSearchParams();
                ['windRegion', 'terrainType', 'windSide', 'profileType', 'profileColor', 'reinType', 'reinType_60_70', 'reinType_L68', 'fakeImpostProfileType', 'fakeImpostReinType', 'Tn', 'Tref', 'Tv', 'Bh', 'Bw', 'Bl', 'Wh', 'Wgap', 'L', 'a','b', 'c'].map(key => {
                    params.set(key, this[key]);
                });
                return params.toString();
            },
            printForm(){
                window.print();
            },
            copyLink(){
                let link = `${document.location.host}?${this.generateUrlParams()}`;
                navigator.clipboard.writeText(link).then(() => {
                    alert('Ссылка на форму с параметрами скопирована в буфер обмена');
                });
            },
            shareLink(){
                navigator.share({
                    title: 'Расчет прогиба оконного профиля',
                    text: 'Предзаполненая форма расчета',
                    url: `?${this.generateUrlParams()}`
                });
            },
            getReinType(specKey){
                if( specKey === 'fake_impost' ){
                    return this.fakeImpostReinType;
                }else{
                    if( ['T78_AERO', 'T80_AERO', 'T78_SUPER_AERO', 'T80_SUPER_AERO', 'T78_ACLASS', 'GLIDE'].includes(this.profileType) ){
                        return this.reinType;
                    }else if( ['T78_ACLASS_L68'].includes(this.profileType) ){
                        if( ['impost', 'pilyastr'].includes(specKey) ){
                            return this.reinType;
                        }else{
                            return this.reinType_L68;
                        }
                    }else if( ['T86_60_4', 'T86_70_6'].includes(this.profileType) ){
                        if( ['impost', 'pilyastr'].includes(specKey) ){
                            return this.reinType;
                        }else{
                            return this.reinType_60_70;
                        }
                    }
                }
            },
            getResultTables(specKey){
                return [
                    this.getProfileTable(specKey),
                    this.getReinTable(specKey)
                ];
            },
            getProfileTable(specKey){
                let table = {
                    thead: [
                        this.i18n.profile,
                        this.i18n.sku
                    ],
                    tbody: []
                };

                if( ['impost', 'pilyastr'].includes(specKey) ){
                    let prefix = this.profileType === 'GLIDE' ? this.i18n.sashes : this.views['impost'].i18n;
                    table.tbody.push([
                        `${prefix} ${this.selectedProfileParams.i18n}`,
                        this.selectedProfileParams.sku
                    ]);
                }
                if( ['pilyastr'].includes(specKey) ){
                    table.tbody.push([
                        this.i18n.pilyastr_63,
                        this.views[specKey].sku
                    ]);
                }
                if( ['fake_impost'].includes(specKey) ){
                    let selectedParams = this.fakeImpostProfileTypes[this.fakeImpostProfileType],
                        doorProfiles = [
                            'ACLASS_T118',
                            'ACLASS_Z118',
                            'ACLASS_T94',
                            'ACLASS_Z94',
                            'T118_70_6'
                        ],
                        prefix = doorProfiles.includes(this.fakeImpostProfileType) ? this.i18n.door_sash : this.i18n.sash;

                    table.tbody.push([
                        `${prefix} ${selectedParams.i18n}`,
                        selectedParams.sku
                    ]);
                    table.tbody.push([
                        `${this.views[specKey].i18n} ${this.fakeImpostSubSize}`,
                        this.views[specKey].sku[this.fakeImpostSubSize]
                    ]);
                }
                if( ['connective3', 'connective38', 'connective65', 'universal'].includes(specKey) ){
                    if( specKey === 'universal' ){
                        table.tbody.push([
                            this.views[specKey].i18n,
                            this.views[specKey].sku
                        ]);
                    }else{
                        table.tbody.push([
                            `${this.views[specKey].i18n}/${this.viewSubSize}`,
                            this.views[specKey].sku[this.viewSubSize]
                        ]);
                    }
                    table.tbody.push([
                        `${this.i18n.box} ${this.boxes[this.boxByProfileType].i18n}`,
                        this.boxes[this.boxByProfileType].sku
                    ]);
                }
                return table;
            },
            getReinTable(specKey){
                let table = {
                    thead: [
                        this.i18n.rein_profile,
                        this.i18n.sku
                    ],
                    tbody: []
                }
                if( ['impost', 'pilyastr'].includes(specKey) ){
                    table.tbody.push([
                        this.reinTypes[this.reinType].i18n,
                        this.reinTypes[this.reinType].sku
                    ]);
                }
                if( ['pilyastr'].includes(specKey) ){
                    table.tbody.push([
                        this.reinTypes['rt_50x25x2_pipe'].i18n,
                        this.reinTypes['rt_50x25x2_pipe'].sku
                    ]);
                }
                if( ['fake_impost'].includes(specKey) ){
                    table.tbody.push([
                        this.fakeImpostReinTypes[this.fakeImpostReinType].i18n,
                        this.fakeImpostReinTypes[this.fakeImpostReinType].sku
                    ]);
                    let fi_extra_rt = this.fakeImpostSubSize === 70 ? 'rt_50x15x2' : 'rt_20x26x13';
                    table.tbody.push([
                        this.fakeImpostReinTypes[fi_extra_rt].i18n,
                        this.fakeImpostReinTypes[fi_extra_rt].sku
                    ]);
                }
                if( ['connective38'].includes(specKey) ){
                    table.tbody.push([
                        this.reinTypes['rt_80x13x2'].i18n,
                        this.reinTypes['rt_80x13x2'].sku
                    ]);
                }
                if( ['connective65'].includes(specKey) ){
                    table.tbody.push([
                        this.reinTypes['rt_50x40'].i18n,
                        this.reinTypes['rt_50x40'].sku
                    ]);
                }
                if( ['universal'].includes(specKey) ){
                    table.tbody.push([
                        this.reinTypes['rt_100x6'].i18n,
                        this.reinTypes['rt_100x6'].sku
                    ]);
                }
                if( ['connective3', 'connective38', 'connective65', 'universal'].includes(specKey) ){
                    let rtKey = null;
                    if( this.profileType === 'T78_ACLASS_L68' ){
                        rtKey = this.reinType_L68;
                    }else{
                        ['rt_35x20x2_pipe', 'rt_35x20x2', 'rt_35x20x1_5', 'rt_35x20x1_5_pipe'].map( rt => {
                            if( this.reinType === rt || this.reinType_60_70 === rt ){
                                rtKey = rt;
                            }
                        });
                    }
                    table.tbody.push([
                        this.reinTypes[rtKey].i18n,
                        this.reinTypes[rtKey].sku
                    ]);
                }
                return table;
            }
        },
        created(){

        },
        mounted() {
            this.hasShareOpportunity = typeof navigator.share === 'function';
            let params = new URLSearchParams(document.location.search);
            this.setParamsFromRoute(params);
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