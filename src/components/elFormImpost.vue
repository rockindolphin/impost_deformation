<template>
    <form action="#" class="form form--impost">
        <div class="print:hidden">

            <div class="wrapper">
                <fieldset class="fieldset">
                    <h4 class="fieldset__title">
                        <strong>
                            01//
                        </strong>
                        {{ i18n.step_1 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="control mb-4">
                            <label class="control__label">
                                {{ i18n.windRegion }}
                            </label>
                            <multiselect
                                class="control--multiselect"
                                v-model="windRegion"
                                :options="Object.keys(windRegions)"
                                :allow-empty="false"
                                :placeholder="i18n.select_palceholder"
                                >
                            </multiselect>
                        </div>
                        <div class="control mb-4">
                            <label class="control__label">
                                {{ i18n.terrainType }}
                            </label>
                            <multiselect
                                class="control--multiselect"
                                v-model="terrainType"
                                :options="terrainTypes"
                                :allow-empty="false"
                                :placeholder="i18n.select_palceholder"
                                >
                            </multiselect>
                        </div>
                        <label class="block mb-4" for="Tn">
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
                        <label class="" for="Tref">
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
                </fieldset>
                <fieldset class="fieldset">
                    <h4 class="fieldset__title">
                        <strong>
                            02//
                        </strong>
                        {{ i18n.step_2 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="grid gap-4 grid-cols-12 items-start">
                            <div class="col-span-12 md:col-span-6 md:order-2 flex items-center justify-center">
                                <div class="scene" :style="buildingStyles">
                                    <div class="box">
                                        <div class="box__face box__face--front">
                                            {{ windSides.windward_side.i18n }}
                                            <div class="box__window" v-if="windSide === 'windward_side'"></div>
                                        </div>
                                        <div class="box__face box__face--back">
                                            {{ windSides.leeward_side.i18n }}
                                            <div class="box__window" v-if="windSide === 'leeward_side'"></div>
                                        </div>
                                        <div class="box__face box__face--right"></div>
                                        <div class="box__face box__face--left">
                                            {{ windSides.side_wall.i18n }}
                                            <div class="box__window" v-if="windSide === 'side_wall'"></div>
                                        </div>
                                        <div class="box__face box__face--top"></div>
                                        <div class="box__face box__face--bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">
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
                                        :placeholder="i18n.select_palceholder"
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
                </fieldset>
            </div>
            <div class="wrapper">
                <fieldset class="fieldset">
                    <h4 class="fieldset__title">
                        <strong>
                            03//
                        </strong>
                        {{ i18n.step_3 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="grid gap-4 grid-cols-12 items-start">

                            <div class="col-span-12 md:col-span-6 md:order-2">
                                <svg :viewBox="svgComp.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect v-bind="svgComp.window" />
                                    <line v-bind="svgComp.impost_v" />
                                    <line v-bind="svgComp.impost_h" />
                                    <line v-bind="svgComp.a_line" />
                                    <line v-bind="svgComp.b_line" />
                                    <line v-bind="svgComp.c_line" />
                                    <line v-bind="svgComp.d_line" />
                                    <line v-bind="svgComp.l_line" />
                                    <rect v-bind="svgComp.a_sep_l" />
                                    <rect v-bind="svgComp.a_sep_r" />
                                    <rect v-bind="svgComp.b_sep_r" />
                                    <rect v-bind="svgComp.c_sep_b" />
                                    <rect v-bind="svgComp.c_sep_t" />
                                    <rect v-bind="svgComp.d_sep_t" />
                                    <rect v-bind="svgComp.l_sep_b" />
                                    <rect v-bind="svgComp.l_sep_t" />
                                    <text v-bind="svgComp.a_text" class="svg__text--hint" >a</text>
                                    <text v-bind="svgComp.b_text" class="svg__text--hint" >b</text>
                                    <text v-bind="svgComp.c_text" class="svg__text--hint" v-if="c !== 0">c</text>
                                    <text v-bind="svgComp.d_text" class="svg__text--hint" >d</text>
                                    <text v-bind="svgComp.l_text" class="svg__text--hint" >L</text>
                                </svg>
                            </div>

                            <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">
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
                </fieldset>
                <fieldset class="fieldset">
                    <h4 class="fieldset__title">
                        <strong>
                            04//
                        </strong>
                        {{ i18n.step_4 }}
                    </h4>
                    <div class="fieldset__content">
                        <div class="grid gap-4 grid-cols-12 items-start">
                            <div class="col-span-12 md:col-span-6 md:order-2 wrapper wrapper--profile-pic">
                                <img :src="profilePicSrc" class="w-full" :title="profileType">
                            </div>
                            <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">

                                <div class="control col-span-12">
                                    <label class="control__label">
                                        {{ i18n.profileType }}
                                    </label>
                                    <multiselect
                                        class="control--multiselect"
                                        v-model="profileType"
                                        :options="Object.keys(profileTypes)"
                                        :allow-empty="false"
                                        :placeholder="i18n.select_palceholder"
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
                                        :placeholder="i18n.select_palceholder"
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
                                        :placeholder="i18n.select_palceholder"
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
                                        :placeholder="i18n.select_palceholder"
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
                                        :placeholder="i18n.select_palceholder"
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
                                        v-for="(value, key) in resultViews"
                                        :key="`result_${key}`"
                                        >
                                        {{ value.result.toFixed(2) }}
                                    </div>
                                    <button class="btn m-4"@click="runTest()">
                                        Запустить тесты
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="wrapper">
                <fieldset class="fieldset fieldset--last">
                    <h4 class="fieldset__title">
                        {{ i18n.step_5 }}
                    </h4>
                    <div class="fieldset__content">
                        <div
                            v-for="(value, key, index) in resultViews"
                            :key="`result_${key}`"
                            class="col-span-12 wrapper wrapper--result"
                            :class="{
                                'mb-0': index === Object.keys(resultViews).length - 1,
                            }"
                            >
                            <strong>
                                {{ value.title }}
                            </strong>
                            <component v-bind:is="`icon-${key}`" />
                            <p class="col-span-12 text">
                                <span class="block mb-2">
                                    <span>Расчётный прогиб, мм:</span> {{ value.result.toFixed(2) }}
                                </span>
                                <span class="block">
                                    <span class="text--success" v-if="value.result <= maxСurve">
                                        Удовлетворяет условию прочности!
                                    </span>
                                    <span class="text--warning" v-else>
                                        Не удовлетворяет условию прочности!
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
        <div class="hidden print:block">

            <table class="print_table my-4">
                <thead>
                    <tr>
                        <th>Параметр</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(param, index) in printParams"
                        :key="`tr_${index}`"
                        >
                        <td>
                            {{ param.title }}
                        </td>
                        <td>
                            {{ param.value }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="col-span-12">
                <span class="font-bold">{{ i18n.maxСurve }}:</span> {{ maxСurve.toFixed(3) }}
            </p>
            <table class="print_table my-4">
                <thead>
                    <tr>
                        <th>Исполнение</th>
                        <th>Расчётный прогиб, мм</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(value, key) in resultViews"
                        :key="`tr_${key}`"
                        >
                        <td>
                            {{ value.title }}
                        </td>
                        <td
                            :class="{
                                'bg-green-600': value.result <= maxСurve,
                                'bg-red-600': value.result > maxСurve
                            }"
                            >
                            {{ value.result.toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </form>
</template>

<script>

    import Multiselect from 'vue-multiselect';
    import iconImpost from '@/components/icons/iconImpost.vue';
    import iconPilyastr from '@/components/icons/iconPilyastr.vue';
    import iconConnective3 from '@/components/icons/iconConnective3.vue';
    import iconUniversal from '@/components/icons/iconUniversal.vue';
    import iconConnective38 from '@/components/icons/iconConnective38.vue';
    import iconConnective65 from '@/components/icons/iconConnective65.vue';

    import pic60_4 from '@/assets/images/60_4.png';
    import pic70_6 from '@/assets/images/70_6.png';
    import picAClass from '@/assets/images/ACLASS.png';
    import picAClass_L68 from '@/assets/images/ACLASS.png';
    import picAero from '@/assets/images/AERO.png';
    import picSuperAero from '@/assets/images/SUPER_AERO.png';
    import picGlide from '@/assets/images/GLIDE.png';
    import picGainImpost from '@/assets/images/impost.png';
    import picGainPilyastr from '@/assets/images/pilyastr.png';
    import picGainСonnective3 from '@/assets/images/connective3.png';
    import picGainUniversal from '@/assets/images/universal.png';
    import picGainСonnective38 from '@/assets/images/connective38.png';
    import picGainСonnective65 from '@/assets/images/connective65.png';
    import { specsData } from '@/specsData.js';
    import { tests } from '@/testsData.js';

    let EP = 3400000000, //Модули упругости (ПВХ, Па) [[F230]]
        ES = 210000000000, //Модули упругости (Материала  вкладыша, Па) [[F231]]
        CSA = 3400000, //Площади поперечного сечения (Константа,принимаемая) [[F257]]
        MRI = 0.00001, //Коэффициенты линейного температурного расширения (Материал усилительного вкладыша,К-1) [[F264]]
        AP = 0.00008, // Коэффициенты линейного температурного расширения (Материал ПВХ, К-1) [[F265]]
        R0 = 0.76, //Термическое сопротивление профиля импоста оконной конструкции,Вт/(м²∙℃) [[F269]]
        AH = 23, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F273]]
        AB = 8; //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F274]]

    export default {
        name: 'elFormImpost',
        components: {
            Multiselect,
            iconImpost,
            iconPilyastr,
            iconConnective3,
            iconUniversal,
            iconConnective38,
            iconConnective65
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
                    },
                    'T80_AERO': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 1
                    },
                    'T78_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        te: 1.11,
                        kR: 1
                    },
                    'T80_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        te: 1.11,
                        kR: 1
                    },
                    'T78_ACLASS': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 2
                    },
                    'T78_ACLASS_L68': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        te: 1.08,
                        kR: 2
                    },
                    'T86_60_4': {
                        impostWidth: 0.06,
                        tk: 0.82,
                        te: 1.2,
                        kR: 0.5
                    },
                    'T86_70_6': {
                        impostWidth: 0.07,
                        tk: 0.85,
                        te: 1.32,
                        kR: 1.25
                    },
                    'GLIDE': {
                        impostWidth: 0.031,
                        tk: 0.78,
                        te: 1.08,
                        kR: 1
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
                        i18n: '35*20*1,5(труба)'
                    },
                    rt_35x20x2_pipe: {
                        i18n: '35*20*2(труба)'
                    },
                    rt_35x20x1_5: {
                        i18n: '35*20*1,5'
                    },
                    rt_35x20x2: {
                        i18n: '35*20*2'
                    },
                    rt_35x28x1_5: {
                        i18n: '35*28*1,5'
                    },
                    rt_35x28x2: {
                        i18n: '35*28*2'
                    },
                    rt_35x28x1_5_pipe: {
                        i18n: '35*28*1,5(труба)'
                    },
                    rt_35x28x2_pipe: {
                        i18n: '35*28*2(труба)'
                    },
                    rt_26x19x1_5: {//GLIDE
                        i18n: '26*19*1,5'
                    }
                },
                reinType: 'rt_35x20x2_pipe', //Армирование импоста [[F22]]
                reinType_60_70: 'rt_35x20x2_pipe', // Армирование для коробок 60-4 и 70-6  [[F23]]
                reinType_L68: 'rt_35x28x1_5', // Армирование для коробок L68
                showDebug: false,
                hasShareOpportunity: false
            }
        },
        watch:{
            profileType(newVal, oldVal){
                this.onProfileTypeChange();
            }
        },
        computed: {
            profilePicSrc(){// ссылка на картинку в зависимости от типа профиля
                switch (this.profileType) {
                    case 'T78_AERO':
                    case 'T80_AERO':
                        return picAero;
                    case 'T78_SUPER_AERO':
                    case 'T80_SUPER_AERO':
                        return picSuperAero;
                    case 'T78_ACLASS':
                        return picAClass;
                    case 'T78_ACLASS_L68':
                        return picAClass_L68;
                    case 'T86_60_4':
                        return pic60_4;
                    case 'T86_70_6':
                        return pic70_6;
                    case 'GLIDE':
                        return picGlide;
                }
            },
            buildingStyles(){// стили для отрисовки здания
                let rotateY = 40,
                    windowWidthMeters = (this.a + this.b)/100,
                    windowHeightMeters = this.L/100,
                    windowScale = 3,
                    gap = windowWidthMeters*windowScale*5/4;
                if( this.windSide === 'leeward_side'){ rotateY = 220; }
                if( this.windSide === 'side_wall'){
                    rotateY = 60;
                    gap = (this.Bl*5) - (windowWidthMeters*windowScale*5) - this.Wgap*5;
                }
                return `
                    --box-width: ${(this.Bw*5).toFixed(0)}px;
                    --box-height: ${(this.Bh*5).toFixed(0)}px;
                    --box-depth: ${(this.Bl*5).toFixed(0)}px;
                    --rotate-y: ${rotateY}deg;
                    --window-ih: ${(this.Wh*5).toFixed(0)}px;
                    --window-width: ${(windowWidthMeters*windowScale*5).toFixed(0)}px;
                    --window-height: ${(windowHeightMeters*windowScale*5).toFixed(0)}px;
                    --window-gap: ${(gap).toFixed(0)}px;
                `;
            },
            svgComp(){// картинка с окном
                let windowWidth = this.a + this.b,
                    windowHeight = this.L,
                    side = 300,
                    lineGap = 15,
                    textGap = 4,
                    sepSize = 12,
                    windowCommon = {
                        'stroke-width': 4,
                        stroke: '#E40032'
                    },
                    lineCommon = {
                        'stroke-width': 2,
                        stroke: '#000'
                    },
                    sepCommon = {
                        width: sepSize/2,
                        height: sepSize/2,
                        fill: '#000'
                    },
                    textCommon = {
                        'text-anchor': 'middle',
                        fill: '#000'
                    },
                    freeSpace = {
                        x: side - (this.a + this.b),
                        y: side - this.L
                    },
                    window = {
                        ...windowCommon,
                        x: freeSpace.x*0.5,
                        y: freeSpace.y*0.5,
                        width: windowWidth,
                        height: windowHeight
                    },
                    impost_v = {
                        ...windowCommon,
                        x1: window.x + this.a,
                        y1: window.y,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight
                    },
                    impost_h = {
                        ...windowCommon,
                        x1: window.x,
                        y1: window.y + windowHeight - this.c,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight - this.c
                    },
                    a_line = {
                        ...lineCommon,
                        x1: window.x,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight + lineGap
                    },
                    b_line = {
                        ...lineCommon,
                        x1: window.x + this.a,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + windowWidth,
                        y2: window.y + windowHeight + lineGap
                    },
                    c_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y + windowHeight - this.c,
                        x2: window.x - lineGap,
                        y2: window.y + windowHeight
                    },
                    d_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y,
                        x2: window.x - lineGap,
                        y2: window.y + this.d
                    },
                    l_line = {
                        ...lineCommon,
                        x1: window.x + windowWidth + lineGap,
                        y1: window.y,
                        x2: window.x + windowWidth + lineGap,
                        y2: window.y + windowHeight
                    },
                    a_sep_l = {
                        ...sepCommon,
                        x: a_line.x1 - sepSize/4,
                        y: a_line.y1 - sepSize/4,
                        transform: `rotate(45 ${a_line.x1} ${a_line.y1})`
                    },
                    a_sep_r = {
                        ...sepCommon,
                        x: a_line.x2 - sepSize/4,
                        y: a_line.y1 - sepSize/4,
                        transform: `rotate(45 ${a_line.x2} ${a_line.y1})`
                    },
                    b_sep_r = {
                        ...sepCommon,
                        x: b_line.x2 - sepSize/4,
                        y: b_line.y1 - sepSize/4,
                        transform: `rotate(45 ${b_line.x2} ${b_line.y1})`
                    },
                    c_sep_b = {
                        ...sepCommon,
                        x: c_line.x1 - sepSize/4,
                        y: c_line.y2 - sepSize/4,
                        transform: `rotate(45 ${c_line.x1} ${c_line.y2})`
                    },
                    c_sep_t = {
                        ...sepCommon,
                        x: c_line.x1 - sepSize/4,
                        y: c_line.y1 - sepSize/4,
                        transform: `rotate(45 ${c_line.x1} ${c_line.y1})`
                    },
                    d_sep_t = {
                        ...sepCommon,
                        x: d_line.x1 - sepSize/4,
                        y: d_line.y1 - sepSize/4,
                        transform: `rotate(45 ${d_line.x1} ${d_line.y1})`
                    },
                    l_sep_b = {
                        ...sepCommon,
                        x: l_line.x1 - sepSize/4,
                        y: l_line.y2 - sepSize/4,
                        transform: `rotate(45 ${l_line.x1} ${l_line.y2})`
                    },
                    l_sep_t = {
                        ...sepCommon,
                        x: l_line.x1 - sepSize/4,
                        y: l_line.y1 - sepSize/4,
                        transform: `rotate(45 ${l_line.x1} ${l_line.y1})`
                    },
                    a_text = {
                        ...textCommon,
                        x: a_line.x1 + (a_line.x2 - a_line.x1)/2,
                        y: a_line.y1 + textGap*4
                    },
                    b_text = {
                        ...textCommon,
                        x: b_line.x1 + (b_line.x2 - b_line.x1)/2,
                        y: b_line.y1 + textGap*4
                    },
                    c_text = {
                        ...textCommon,
                        x: c_line.x1 + (c_line.x2 - c_line.x1)/2 - textGap*2,
                        y: c_line.y1 + (c_line.y2 - c_line.y1)/2 + textGap/2
                    },
                    d_text = {
                        ...textCommon,
                        x: d_line.x1 + (d_line.x2 - d_line.x1)/2 - textGap*2,
                        y: d_line.y1 + (d_line.y2 - d_line.y1)/2 + textGap/2
                    },
                    l_text = {
                        ...textCommon,
                        x: l_line.x1 + (l_line.x2 - l_line.x1)/2 + textGap*2,
                        y: l_line.y1 + (l_line.y2 - l_line.y1)/2 + textGap/2
                    };

                return {
                    viewBox: `0 0 ${side} ${side}`,
                    window: window,
                    impost_v: impost_v,
                    impost_h: impost_h,
                    a_line: a_line,
                    b_line: b_line,
                    c_line: c_line,
                    d_line: d_line,
                    l_line: l_line,
                    a_sep_l: a_sep_l,
                    a_sep_r: a_sep_r,
                    b_sep_r: b_sep_r,
                    c_sep_b: c_sep_b,
                    c_sep_t: c_sep_t,
                    d_sep_t: d_sep_t,
                    l_sep_b: l_sep_b,
                    l_sep_t: l_sep_t,
                    a_text: a_text,
                    b_text: b_text,
                    c_text: c_text,
                    d_text: d_text,
                    l_text: l_text
                };
            },
            i18n(){
                return {
                    step_1: 'Нормативные значения',
                    step_2: 'Параметры здания',
                    step_3: 'Параметры оконного блока',
                    step_4: 'Тип профиля',
                    step_5: 'Варианты исполнений',
                    select_palceholder: 'Выберите значение',

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
                    maxСurve: 'Максимально допустимый прогиб, мм'
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
                    },
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
                ];
            },
            d(){ //Рассчитываемый элемент d [[B17]]
                return this.L - this.c;
            },
            selectedProfileParams(){// параметры выбранного профиля
                return this.profileTypes[this.profileType];
            },
            resultViews(){// варианты расчетов в зависимости от типа профиля
                let resp = {
                    impost: {
                        src: picGainImpost,
                        title: 'Импост',
                        result: this.computeEstimatedDeflection('impost')
                    },
                    pilyastr: {
                        src: picGainPilyastr,
                        title: 'Усиление пилястровым профилем',
                        result: this.computeEstimatedDeflection('pilyastr')
                    }
                }
                if( this.profileType !== 'GLIDE' ){
                    resp = {
                        ...resp,
                        connective3: {
                            src: picGainСonnective3,
                            title: 'Соединительный профиль 3',
                            result: this.computeEstimatedDeflection('connective3')
                        },
                        universal: {
                            src: picGainUniversal,
                            title: 'Профиль соединительный универсальный',
                            result: this.computeEstimatedDeflection('universal')
                        },
                        connective38: {
                            src: picGainСonnective38,
                            title: 'Профиль соединительный 38',
                            result: this.computeEstimatedDeflection('connective38')
                        },
                        connective65: {
                            src: picGainСonnective65,
                            title: 'Профиль соединительный 65',
                            result: this.computeEstimatedDeflection('connective65')
                        }
                    }
                }
                return resp;
            },
            reinTypesOptions(){// Тип армирования в зависимости от типа профиля
                if( ['T86_60_4', 'T86_70_6'].includes(this.profileType) ){
                    return ['rt_35x28x1_5', 'rt_35x28x2', 'rt_35x28x1_5_pipe', 'rt_35x28x2_pipe'];
                }else if( ['GLIDE'].includes(this.profileType) ){
                    return ['rt_26x19x1_5'];
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
            computeSpec(scheme){
                let profileData = scheme[this.profileType],//данные по профилю
                    data = null;
                if( profileData ){//если данные есть
                    if( profileData[this.reinType] ){//если есть данные по основному выпадающему списку
                        data = profileData[this.reinType];
                    }else{//ищем данные по дополнительным выпадающим спискам
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
                let specs = this.computeSpec(specsData[specKey]),
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
                    qw = Wm + Wp, //Нормативное значение пиковой ветровой нагрузки на оконную конструкцию, Па. [[F223]]
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
            runTest(){
                console.clear();
                let result = {
                    counter: {
                        passed: 0,
                        failed: 0,
                        total: 0
                    },
                    log: []
                };
                Object.keys(tests.common).map( key => {
                    this[key] = tests.common[key];
                });
                tests.dynamic.map( test => {
                    let dynamicProps = Object.keys(test).filter( propKey => propKey !== 'results' );
                    dynamicProps.map( propKey => {
                        this[propKey] = test[propKey];
                    });
                    Object.keys(test.results).map( key => {
                        if( test.results[key] !== NaN ){
                            let testValue = test.results[key].toFixed(2);
                            let formValue = this.resultViews[key]?.result?.toFixed(2);
                            if( formValue === undefined ){
                                formValue = 'NaN'
                            }
                            let passed = testValue === formValue;

                            if( !passed ){
                                let logData = [];
                                dynamicProps.map( propKey => {
                                    logData.push( `${propKey}:${test[propKey]}` );
                                });
                                logData.push(`ожидаемое:${testValue}`);
                                logData.push(`фактическое:${formValue}`);
                                result.log.push(logData.join(' - '));
                                result.counter.failed++;
                            }else{
                                result.counter.passed++;
                            }
                            result.counter.total++;
                        }
                    });
                });
                console.log(result.counter);
                if( result.log.length ){
                    console.log(result.log);
                }
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
                    profileColor: Object.keys(this.profileColor)
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
                        reinType_L68: this.reinTypes_L68_Options
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
                ['windRegion', 'terrainType', 'windSide', 'profileType', 'profileColor', 'reinType', 'reinType_60_70', 'reinType_L68', 'Tn', 'Tref', 'Tv', 'Bh', 'Bw', 'Bl', 'Wh', 'Wgap', 'L', 'a','b', 'c'].map(key => {
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
            }
        },
        created(){

        },
        mounted() {
            this.hasShareOpportunity = typeof navigator.share === 'function';
            let params = new URLSearchParams(document.location.search);
            this.setParamsFromRoute(params);
        }
    }

</script>