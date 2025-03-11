<template>
    <div class="page__body">
        <header class="page__header header">
            <div class="page__wrapper">
                <h1 class="text-2xl mb-8">
                    Расчет прогиба оконного профиля
                </h1>
            </div>
        </header>
        <main class="page__main main">
            <div class="page__wrapper">

                <details class="control control--details">
                    <summary>
                        Шаг №1
                    </summary>
                    <div class="grid gap-4 grid-cols-12 items-end">
                        <label class="col-span-12 md:col-span-6" for="windRegion">
                            <span class="form__label">
                                Ветровой район (1):
                            </span>
                            <select
                                id="windRegion"
                                v-model="windRegion"
                                class="control control--select"
                                >
                                <option
                                    v-for="item in windRegions"
                                    :key="item"
                                    :value="item"
                                    >
                                    {{ item }}
                                </option>
                            </select>
                        </label>

                        <label class="col-span-12 md:col-span-6" for="terrainType">
                            <span class="form__label">
                                Тип местности:
                            </span>
                            <select
                                id="terrainType"
                                v-model="terrainType"
                                class="control control--select"
                                >
                                <option
                                    v-for="item in terrainTypes"
                                    :key="item"
                                    :value="item"
                                    >
                                    {{ item }}
                                </option>
                            </select>
                        </label>

                        <label class="col-span-12 md:col-span-4" for="insideAirTemperature">
                            <span class="form__label">
                                Расчетная внутренняя температура воздуха,˚С:
                            </span>
                            <input
                                id="insideAirTemperature"
                                :value="insideAirTemperature"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>

                        <label class="col-span-12 md:col-span-4" for="outsideAirTemperature">
                            <span class="form__label">
                                Расчетная наружная температура воздуха,˚С:
                            </span>
                            <input
                                id="outsideAirTemperature"
                                :value="outsideAirTemperature"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>

                        <label class="col-span-12 md:col-span-4" for="instalationAirTemperature">
                            <span class="form__label">
                                Температура замыкания (монтажа) оконной конструкции:
                            </span>
                            <input
                                id="instalationAirTemperature"
                                :value="instalationAirTemperature"
                                type="number"
                                step="0.1"
                                class="control control--text"
                            >
                        </label>
                    </div>
                </details>

                <details class="control control--details">
                    <summary>
                        Шаг №2
                    </summary>
                    <div class="grid gap-4 grid-cols-12 items-start">
                        <div class="col-span-12 md:col-span-6 md:order-2 flex items-center justify-center">
                            <div class="scene" :style="buildingStyles">
                                <div class="box">
                                    <div class="box__face box__face--front">
                                        {{ i18n.windSides.windward_side }}
                                        <div class="box__window" v-if="windSide === 'windward_side'"></div>
                                    </div>
                                    <div class="box__face box__face--back">
                                        {{ i18n.windSides.leeward_side }}
                                        <div class="box__window" v-if="windSide === 'leeward_side'"></div>
                                    </div>
                                    <div class="box__face box__face--right"></div>
                                    <div class="box__face box__face--left">
                                        {{ i18n.windSides.side_wall }}
                                        <div class="box__window" v-if="windSide === 'side_wall'"></div>
                                    </div>
                                    <div class="box__face box__face--top"></div>
                                    <div class="box__face box__face--bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">
                            <label class="col-span-12" for="buildingHeight">
                                <span class="form__label">
                                    Высота здания h (м):
                                </span>
                                <input
                                    id="buildingHeight"
                                    v-model.number="buildingHeight"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="buildingWidth">
                                <span class="form__label">
                                    Ширина здания d (м):
                                </span>
                                <input
                                    id="buildingWidth"
                                    v-model.number="buildingWidth"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="buildingLength">
                                <span class="form__label">
                                    Длина здания:
                                </span>
                                <input
                                    id="buildingLength"
                                    v-model.number="buildingLength"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="windowInstallationHeight">
                                <span class="form__label">
                                    Фактическая высота установки окна (м):
                                </span>
                                <input
                                    id="windowInstallationHeight"
                                    v-model.number="windowInstallationHeight"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="windSide">
                                <span class="form__label">
                                    Сторона:
                                </span>
                                <select
                                    id="windSide"
                                    v-model="windSide"
                                    class="control control--select"
                                    >
                                    <option
                                        v-for="item in windSides"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ i18n.windSides[item] }}
                                    </option>
                                </select>
                            </label>

                            <label
                                v-if="windSide === 'side_wall'"
                                class="col-span-12"
                                for="buildingSideToWindowLength"
                                >
                                <span class="form__label">
                                    Расстояние от края наветренной стены до окна:
                                </span>
                                <input
                                    id="buildingSideToWindowLength"
                                    v-model.number="buildingSideToWindowLength"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>
                        </div>
                    </div>
                </details>

                <details class="control control--details">
                    <summary>
                        Шаг №3
                    </summary>
                    <div class="grid gap-4 grid-cols-12 items-start">

                        <div class="col-span-12 md:col-span-6 md:order-2">
                            <div class="bg-gray-100">
                                <svg :viewBox="svgComp.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect v-bind="svgComp.window" />
                                    <line v-bind="svgComp.impost_v" />
                                    <line v-bind="svgComp.impost_h" />
                                    <line v-bind="svgComp.a_line" />
                                    <line v-bind="svgComp.b_line" />
                                    <line v-bind="svgComp.c_line" />
                                    <line v-bind="svgComp.d_line" />
                                    <line v-bind="svgComp.l_line" />
                                    <line v-bind="svgComp.a_sep_l" />
                                    <line v-bind="svgComp.a_sep_r" />
                                    <line v-bind="svgComp.b_sep_r" />
                                    <line v-bind="svgComp.c_sep_b" />
                                    <line v-bind="svgComp.c_sep_t" />
                                    <line v-bind="svgComp.d_sep_t" />
                                    <line v-bind="svgComp.l_sep_b" />
                                    <line v-bind="svgComp.l_sep_t" />
                                    <text v-bind="svgComp.a_text" class="svg__text--hint" >a</text>
                                    <text v-bind="svgComp.b_text" class="svg__text--hint" >b</text>
                                    <text v-bind="svgComp.c_text" class="svg__text--hint" v-if="windowSideC !== 0">c</text>
                                    <text v-bind="svgComp.d_text" class="svg__text--hint" >d</text>
                                    <text v-bind="svgComp.l_text" class="svg__text--hint" >L</text>
                                </svg>
                            </div>
                        </div>

                        <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">
                            <label class="col-span-12" for="impostLength">
                                <span class="form__label">
                                    Длина импоста L (см):
                                </span>
                                <input
                                    id="impostLength"
                                    v-model.number="impostLength"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="windowSideA">
                                <span class="form__label">
                                    a (см):
                                </span>
                                <input
                                    id="windowSideA"
                                    v-model.number="windowSideA"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="windowSideB">
                                <span class="form__label">
                                    b (см):
                                </span>
                                <input
                                    id="windowSideB"
                                    v-model.number="windowSideB"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <label class="col-span-12" for="windowSideC">
                                <span class="form__label">
                                    c (см):
                                </span>
                                <input
                                    id="windowSideC"
                                    v-model.number="windowSideC"
                                    type="number"
                                    step="0.1"
                                    class="control control--text"
                                >
                            </label>

                            <p class="col-span-12 font-bold">
                                d (см): {{ windowSideD.toFixed(2) }}
                            </p>
                        </div>

                    </div>
                </details>

                <details class="control control--details">
                    <summary>
                        Шаг №4
                    </summary>
                    <div class="grid gap-4 grid-cols-12 items-start">
                        <div class="col-span-12 md:col-span-6 md:order-2">
                            <img :src="profilePicSrc" class="w-full" :title="profileType">
                        </div>
                        <div class="col-span-12 md:col-span-6 md:order-1 grid gap-4 grid-cols-12">
                            <label class="col-span-12" for="profileType">
                                <span class="form__label">
                                    Тип профиля
                                </span>
                                <select
                                    id="profileType"
                                    v-model="profileType"
                                    class="control control--select"
                                    @change="onProfileTypeChange($event)"
                                    >
                                    <option
                                        v-for="item in profileTypes"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ item }}
                                    </option>
                                </select>
                            </label>

                            <label class="col-span-12" for="windowColor">
                                <span class="form__label">
                                    Цвет профиля
                                </span>
                                <select
                                    id="windowColor"
                                    v-model="windowColor"
                                    class="control control--select"
                                    >
                                    <option
                                        v-for="item in windowColors"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ i18n.windowColors[item] }}
                                    </option>
                                </select>
                            </label>

                            <label class="col-span-12" for="reinforcementType">
                                <span class="form__label">
                                    Тип армирования
                                </span>
                                <select
                                    id="reinforcementType"
                                    v-model="reinforcementType"
                                    class="control control--select"
                                    >
                                    <option
                                        v-for="item in reinforcementTypes"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ i18n.reinforcementTypes[item] }}
                                    </option>
                                </select>
                            </label>

                            <p class="col-span-12 font-bold">
                                Максимально допустимый прогиб, мм: {{ maximumAllowableDeflection.toFixed(3) }}
                            </p>

                            <p class="col-span-12 font-bold">
                                Расчётный прогиб, мм: {{ estimatedDeflection.toFixed(3) }}
                            </p>
                        </div>

                    </div>
                </details>

                <!--
                    <template>
                        <table class="debug">
                            <tr>
                                <td>+</td>
                                <td>[C53]</td>
                                <td>{{C53}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[C75]</td>
                                <td>{{C75}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F54]</td>
                                <td>{{QW}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F30]</td>
                                <td>{{WM}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F48]</td>
                                <td>{{WP}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F46]</td>
                                <td>{{DZE}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F34]</td>
                                <td>{{ZE}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F47]</td>
                                <td>{{V}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F29]</td>
                                <td>{{W0}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F35]</td>
                                <td>{{KZE}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F36]</td>
                                <td>{{C}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F64]</td>
                                <td>{{L}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F57]</td>
                                <td>{{LP.toFixed(12)}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F58]</td>
                                <td>{{LS.toFixed(12)}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[D21]</td>
                                <td>{{D21}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F77]</td>
                                <td>{{delta}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F80]</td>
                                <td>{{H1}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F79]</td>
                                <td>{{H2}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F76]</td>
                                <td>{{P}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F98]</td>
                                <td>{{F98}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F110]</td>
                                <td>{{F110}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F115]</td>
                                <td>{{F115}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F82]</td>
                                <td>{{G.toFixed(21)}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F89]</td>
                                <td>{{AP}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F90]</td>
                                <td>{{AS}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F67]</td>
                                <td>{{B1}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F68]</td>
                                <td>{{B2}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F120]</td>
                                <td>{{K0}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F116]</td>
                                <td>{{tk}}</td>
                            </tr>
                            <tr>
                                <td>+</td>
                                <td>[F118]</td>
                                <td>{{impostWidth}}</td>
                            </tr>
                        </table>
                    </template>
                -->
            </div>
        </main>
        <footer class="page__footer footer">
            <div class="page__wrapper">
                <p>
                    © {{ new Date().getFullYear() }} Расчет прогиба оконного профиля
                </p>
            </div>
        </footer>
    </div>
</template>

<script>

    import pic60_4 from '@/assets/images/60_4.png';
    import pic70_6 from '@/assets/images/70_6.png';
    import picAClass from '@/assets/images/ACLASS.png';
    import picAero from '@/assets/images/AERO.png';
    import picSuperAero from '@/assets/images/SUPER_AERO.png';


    const LTE_COEFF_PVH = 0.00008, // Коэффициенты линейного температурного расширения (Материал ПВХ,) [F96]
        R0 = 0.76, //Термическое сопротивление профиля импоста оконной конструкции [F101]
        AH = 23, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [F105]
        AB = 8, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [F106]
        EP = 3400000000, //Модули упругости (ПВХ, Па) [F61]
        ES = 210000000000, //Модули упругости (Материала  вкладыша, Па) [F62]
        CSA = 3400000, //Площади поперечного сечения (Константа,принимаемая) [F91]
        MRI = 0.00001; //Коэффициенты линейного температурного расширения ( Материал усилительного вкладыша , ) [F95]

    export default {
        name: 'App',
        components: {

        },
        data() {
            return {

                //step_1
                windRegions: ['Ia', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
                windRegion: 'I', //Ветровой район
                terrainTypes: ['A', 'B', 'C'],
                terrainType: 'B', //Тип местности
                insideAirTemperature: 20, //Расчетная внутренняя температура воздуха [F15]
                outsideAirTemperature: 15, //Расчетная наружная температура воздуха [F16]
                instalationAirTemperature: 15, //Температура замыкания (монтажа) оконной конструкции [F17]

                //step_2
                buildingHeight: 60, //Высота здания h (м) [B9]
                buildingWidth: 50, //Ширина здания d (м) [B10]
                buildingLength: 30, //Длина здания [E10]
                windowInstallationHeight: 40, //Фактическая высота установки окна (м): [B11]
                windSides: ['windward_side', 'leeward_side', 'side_wall'],
                windSide: 'windward_side', //Сторона
                buildingSideToWindowLength: 4, //Расстояние от края наветренной стены до окна

                //step_3
                impostLength: 150, //Длина импоста L (см):
                windowSideA: 70, //Рассчитываемый элемент a
                windowSideB: 70, //Рассчитываемый элемент b
                windowSideC: 0, //Рассчитываемый элемент c

                //step_4
                profileTypes: ['T78_AERO', 'T80_AERO', 'T78_SUPER_AERO', 'T80_SUPER_AERO', 'T78_ACLASS', 'T86_60_4', 'T86_70_6'],
                profileType: 'T78_AERO', //Тип профиля
                reinforcementType: 'rt_2', //Тип армирования
                windowColors: ['white', 'colored'],
                windowColor: 'white', //Цвет профиля
            }
        },
        computed: {
            i18n(){//переводы
                return {
                    windSides: {
                        windward_side: 'Наветренная сторона',
                        leeward_side: 'Подветренная сторона',
                        side_wall: 'Боковая стена'
                    },
                    reinforcementTypes: {
                        rt_1: '35*20*1,5(труба)',
                        rt_2: '35*20*2(труба)',
                        rt_3: '35*20*1,5',
                        rt_4: '35*20*2',
                        rt_5: '35*28*1,5',
                        rt_6: '35*28*2'
                    },
                    windowColors: {
                        white: 'Белый',
                        colored: 'Цветной'
                    }
                }
            },
            profilePicSrc(){
                switch (this.profileType) {
                    case 'T78_AERO':
                    case 'T80_AERO':
                        return picAero;
                    case 'T78_SUPER_AERO':
                    case 'T80_SUPER_AERO':
                        return picSuperAero;
                    case 'T78_ACLASS':
                        return picAClass;
                    case 'T86_60_4':
                        return pic60_4;
                    case 'T86_70_6':
                        return pic70_6;
                }
            },
            buildingStyles(){
                let rotateY = 40,
                    windowWidthMeters = (this.windowSideA + this.windowSideB)/100,
                    windowHeightMeters = this.impostLength/100,
                    windowScale = 3,
                    gap = windowWidthMeters*windowScale*5/4;
                if( this.windSide === 'leeward_side'){ rotateY = 220; }
                if( this.windSide === 'side_wall'){
                    rotateY = 60;
                    gap = (this.buildingLength*5) - (windowWidthMeters*windowScale*5) - this.buildingSideToWindowLength*5;
                }
                return `
                    --box-width: ${(this.buildingWidth*5).toFixed(0)}px;
                    --box-height: ${(this.buildingHeight*5).toFixed(0)}px;
                    --box-depth: ${(this.buildingLength*5).toFixed(0)}px;
                    --rotate-y: ${rotateY}deg;
                    --window-ih: ${(this.windowInstallationHeight*5).toFixed(0)}px;
                    --window-width: ${(windowWidthMeters*windowScale*5).toFixed(0)}px;
                    --window-height: ${(windowHeightMeters*windowScale*5).toFixed(0)}px;
                    --window-gap: ${(gap).toFixed(0)}px;
                `;
            },
            svgComp(){
                let windowWidth = this.windowSideA + this.windowSideB,
                    windowHeight = this.impostLength,
                    side = 300,
                    lineGap = 15,
                    textGap = 4,
                    sepSize = 5,
                    windowCommon = {
                        'stroke-width': 2,
                        stroke: '#000'
                    },
                    lineCommon = {
                        'stroke-width': 1,
                        stroke: '#000'
                    },
                    textCommon = {
                        'text-anchor': 'middle',
                        fill: '#000'
                    },
                    freeSpace = {
                        x: side - (this.windowSideA + this.windowSideB),
                        y: side - this.impostLength
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
                        x1: window.x + this.windowSideA,
                        y1: window.y,
                        x2: window.x + this.windowSideA,
                        y2: window.y + windowHeight
                    },
                    impost_h = {
                        ...windowCommon,
                        x1: window.x,
                        y1: window.y + windowHeight - this.windowSideC,
                        x2: window.x + this.windowSideA,
                        y2: window.y + windowHeight - this.windowSideC
                    },
                    a_line = {
                        ...lineCommon,
                        x1: window.x,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + this.windowSideA,
                        y2: window.y + windowHeight + lineGap
                    },
                    b_line = {
                        ...lineCommon,
                        x1: window.x + this.windowSideA,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + windowWidth,
                        y2: window.y + windowHeight + lineGap
                    },
                    c_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y + windowHeight - this.windowSideC,
                        x2: window.x - lineGap,
                        y2: window.y + windowHeight
                    },
                    d_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y,
                        x2: window.x - lineGap,
                        y2: window.y + this.windowSideD
                    },
                    l_line = {
                        ...lineCommon,
                        x1: window.x + windowWidth + lineGap,
                        y1: window.y,
                        x2: window.x + windowWidth + lineGap,
                        y2: window.y + windowHeight
                    },
                    a_sep_l = {
                        ...lineCommon,
                        x1: a_line.x1,
                        y1: a_line.y1 - sepSize/2,
                        x2: a_line.x1,
                        y2: a_line.y1 + sepSize/2
                    },
                    a_sep_r = {
                        ...lineCommon,
                        x1: a_line.x2,
                        y1: a_line.y1 - sepSize/2,
                        x2: a_line.x2,
                        y2: a_line.y1 + sepSize/2
                    },
                    b_sep_r = {
                        ...lineCommon,
                        x1: b_line.x2,
                        y1: b_line.y1 - sepSize/2,
                        x2: b_line.x2,
                        y2: b_line.y1 + sepSize/2
                    },
                    c_sep_b = {
                        ...lineCommon,
                        x1: c_line.x1 - sepSize/2,
                        y1: c_line.y2,
                        x2: c_line.x2 + sepSize/2,
                        y2: c_line.y2
                    },
                    c_sep_t = {
                        ...lineCommon,
                        x1: c_line.x1 - sepSize/2,
                        y1: c_line.y1,
                        x2: c_line.x2 + sepSize/2,
                        y2: c_line.y1
                    },
                    d_sep_t = {
                        ...lineCommon,
                        x1: d_line.x1 - sepSize/2,
                        y1: d_line.y1,
                        x2: d_line.x1 + sepSize/2,
                        y2: d_line.y1
                    },
                    l_sep_b = {
                        ...lineCommon,
                        x1: l_line.x1 - sepSize/2,
                        y1: l_line.y2,
                        x2: l_line.x1 + sepSize/2,
                        y2: l_line.y2
                    },
                    l_sep_t = {
                        ...lineCommon,
                        x1: l_line.x1 - sepSize/2,
                        y1: l_line.y1,
                        x2: l_line.x1 + sepSize/2,
                        y2: l_line.y1
                    },
                    a_text = {
                        ...textCommon,
                        x: a_line.x1 + (a_line.x2 - a_line.x1)/2,
                        y: a_line.y1 + (a_line.y2 - a_line.y1)/2 - textGap
                    },
                    b_text = {
                        ...textCommon,
                        x: b_line.x1 + (b_line.x2 - b_line.x1)/2,
                        y: b_line.y1 + (b_line.y2 - b_line.y1)/2 - textGap
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
            windowSideD(){ //Рассчитываемый элемент d
                return this.impostLength - this.windowSideC;
            },
            reinforcementTypes(){// Тип армирования в зависимости от типа профиля
                return  ['T86_60_4', 'T86_70_6'].includes(this.profileType) ?  ['rt_5', 'rt_6'] : ['rt_1', 'rt_2', 'rt_3', 'rt_4'];
            },
            maximumAllowableDeflection(){//Максимально допустимый прогиб
                return ((this.impostLength/100)/200)*1000;
            },
            estimatedDeflection(){//Расчётный прогиб
                return (this.C53+this.C75)*1000;
            },
            C53(){// [C53]
                return (this.QW / (ES * this.LS + EP * this.LP) * (this.B1 * ((this.B1**2 - 5*this.L**2)**2) + this.B2 * ((this.B2**2 - 5*this.L**2)**2))) / 3840;
            },
            C75(){// [C75]
                return ( ( this.K0 * (this.L ** 2) * EP * this.LP - this.delta * ( this.H1 * (this.L ** 2) + this.H2 * ((this.L ** 2) - 4 * (this.P ** 2)) ) ) / (8 * (ES * this.LS + EP * this.LP)) );
            },
            QW(){// Нормативное значение пиковой ветровой нагрузки на оконную конструкцию, Па. [F54]
                return this.WM + this.WP;
            },
            WM(){// Нормативное значение средней составляющей основной ветровой нагрузки Wm (Нормативное значение ветрового давления, Па )    [F30]
                return this.W0*this.KZE*this.C;
            },
            WP(){// Нормативное значение пульсационной составляющей основной ветровой нагрузки Wp [F48]
                return this.WM*this.DZE*this.V;
            },
            DZE(){// Коэффициент пульсации давления ветра [F46]
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
            ZE(){//Коэффициент учитывающий изменение ветрового давления k(ze) (Эквивалентная высота) [F34]
                if (this.buildingHeight <= this.buildingWidth) {
                    return this.buildingHeight;
                } else if (this.buildingHeight < this.buildingWidth && this.buildingHeight <= 2*this.buildingWidth) {
                    if ((this.buildingHeight - this.buildingWidth) <= this.windowInstallationHeight) {
                        return this.buildingHeight;
                    } else {
                        return this.buildingWidth;
                    }
                } else {
                    if ((this.buildingHeight - this.buildingWidth) <= this.windowInstallationHeight) {
                        return this.buildingHeight;
                    } else if (this.windowInstallationHeight > 0 && this.windowInstallationHeight <= this.buildingWidth) {
                        return this.buildingWidth;
                    } else {
                        return this.windowInstallationHeight;
                    }
                }
            },
            V(){// Коэффициент пространственной корреляции пульсации давления ветра   [F47]
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
                    if (this.buildingWidth > range.min && this.buildingWidth <= range.max){
                        rowNum = range.value;
                    };
                }
                for (let range of colRanges) {
                    if (this.buildingLength >= range.min && this.buildingLength <= range.max){
                        colNum = range.value;
                    };
                }
                return scheme[rowNum][colNum];
            },
            W0(){// Нормативное значение ветрового давления, Па [F29]
                let scheme = {
                    'Ia':   170,
                    'I':    230,
                    'II':   300,
                    'III':  380,
                    'IV':   480,
                    'V':    600,
                    'VI':   730,
                    'VII':  850
                }
                return scheme[this.windRegion];
            },
            KZE(){// Коэффициент учитывающий изменение ветрового давления k(ze) [F35]
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
            C(){//Коэффициент учитывающий изменение ветрового давления k(ze)  (Аэродинамический   коэфф     ) [F36]
                let e = Math.min(this.buildingWidth, this.buildingLength);
                if (this.windSide === 'windward_side'){ return 0.8; }
                if (this.windSide === 'leeward_side'){ return -0.5; }
                if (this.windSide === 'side_wall') {
                    if (this.buildingSideToWindowLength <= (e/5)){ return -1; }
                    if (this.buildingSideToWindowLength > (e/5) && this.buildingSideToWindowLength <= (e/5) + (e-e/5) ){
                        return -0.8;
                    };
                    if (this.buildingSideToWindowLength > e){
                        return -0.5;
                    }
                }
            },
            L(){//Длина импоста, м [F64]
                return this.impostLength/100;
            },
            LP(){// Главные моменты инерции (Сечения профиля, м4 ) [F57]
                let scheme = {
                    T78_AERO: 349918,
                    T80_AERO: 360096,
                    T78_SUPER_AERO: 519229,
                    T80_SUPER_AERO: 533651,
                    T78_ACLASS: 1169874,
                    T86_60_4: 1415388,
                    T86_70_6: 2262298
                };
                return scheme[this.profileType]/1000000000000;
            },
            LS(){//Главные моменты инерции  (Сечения усилительного вкладыша, м4) [F58]
                return this.D21/100000000;
            },
            D21(){// момент инерции в зависимости от типа армирования [D21]
                let scheme = {
                    rt_1: 2.21,
                    rt_2: 2.82,
                    rt_3: 2.01,
                    rt_4: 2.55,
                    rt_5: 2.52,
                    rt_6: 3.21
                }
                return scheme[this.reinforcementType];
            },
            delta(){//Расстояние между неитральной осью ПВХ профиля и нейтральной осью усилительного вкладыша, м [F77]
                let resp = null;

                if (this.profileType === 'T78_AERO') {
                    if (this.reinforcementType === 'rt_1'){ resp = 6.6; }
                    if (this.reinforcementType === 'rt_2'){ resp = 6.6; }
                    if (this.reinforcementType === 'rt_3'){ resp = 6.46; }
                    if (this.reinforcementType === 'rt_4'){ resp = 6.46; }
                }
                if (this.profileType === 'T80_AERO') {
                    if (this.reinforcementType === 'rt_1'){ resp = 9.27; }
                    if (this.reinforcementType === 'rt_2'){ resp = 9.27; }
                    if (this.reinforcementType === 'rt_3'){ resp = 9.1; }
                    if (this.reinforcementType === 'rt_4'){ resp = 9.1; }
                }
                if (this.profileType === 'T78_SUPER_AERO') {
                    if (this.reinforcementType === 'rt_1'){ resp = 7.9; }
                    if (this.reinforcementType === 'rt_2'){ resp = 7.9; }
                    if (this.reinforcementType === 'rt_3'){ resp = 7.7; }
                    if (this.reinforcementType === 'rt_4'){ resp = 7.7; }
                }
                if (this.profileType === 'T80_SUPER_AERO') {
                    if (this.reinforcementType === 'rt_1'){ resp = 11.27; }
                    if (this.reinforcementType === 'rt_2'){ resp = 11.27; }
                    if (this.reinforcementType === 'rt_3'){ resp = 11.1; }
                    if (this.reinforcementType === 'rt_4'){ resp = 11.1; }
                }
                if (this.profileType === 'T78_ACLASS') {
                    if (this.reinforcementType === 'rt_1'){ resp = 5.22; }
                    if (this.reinforcementType === 'rt_2'){ resp = 5.22; }
                    if (this.reinforcementType === 'rt_3'){ resp = 5.05; }
                    if (this.reinforcementType === 'rt_4'){ resp = 5.05; }
                }
                if (this.profileType === 'T86_60_4') {
                    if (this.reinforcementType === 'rt_5'){ resp = 4.49; }
                    if (this.reinforcementType === 'rt_6'){ resp = 4.45; }
                }
                if (this.profileType === 'T86_70_6') {
                    if (this.reinforcementType === 'rt_5'){ resp = 6.72; }
                    if (this.reinforcementType === 'rt_6'){ resp = 6.77; }
                }

                return resp / 1000;
            },
            H1(){//Продольные силы [F80]
                return this.H2*(this.P*CSA*(this.G+(2/(CSA*(this.L-2*this.P))))+1);
            },
            H2(){//Продольные силы [F79]
                return ((this.F98-this.instalationAirTemperature)*(LTE_COEFF_PVH*this.F115-MRI))/(this.G*this.P*CSA*(this.G+(2/(CSA*(this.L-2*this.P)))+2*this.G+(2/(CSA*(this.L-2*this.P)))));
            },
            P(){//Коэффициент [F76]
                switch (this.windowColor) {
                    case 'white':
                        return 0.3;
                    case 'colored':
                        return 0.25;
                }
            },
            F98(){// Коэффициенты линейного температурного расширения (Температура во внутренней камере ПВХ профиля) [F98]
                return (this.insideAirTemperature-(this.insideAirTemperature-this.outsideAirTemperature))*((1/AB+R0/(this.F110+1))/(1/AB+R0+1/AH));
            },
            F110(){// Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [F110]
                let scheme = {
                    T78_AERO: 1,
                    T80_AERO: 1,
                    T78_SUPER_AERO: 1,
                    T80_SUPER_AERO: 1,
                    T78_ACLASS: 2,
                    T86_60_4: 0.5,
                    T86_70_6: 1.25
                }
                return scheme[this.profileType];
            },
            F115(){// Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, (te) [F115]
                let scheme = {
                    T78_AERO: 1.08,
                    T80_AERO: 1.08,
                    T78_ACLASS: 1.08,
                    T86_60_4: 1.2,
                    T78_SUPER_AERO: 1.11,
                    T80_SUPER_AERO: 1.11,
                    T86_70_6: 1.32
                }
                return scheme[this.profileType];
            },
            G(){ //Расчёт прогиба оконного импоста от действия температурного клматического воздействия (Коэффициент) [F82]
                return (1/(this.AP*EP))+(1/(this.AS*ES));
            },
            AP(){//Площади поперечного сечения (ПВХ профиль, м2) [F89]
                let scheme = {
                    T78_AERO: 727,
                    T80_AERO: 757,
                    T78_SUPER_AERO: 807,
                    T80_SUPER_AERO: 835,
                    T78_ACLASS: 3766,
                    T86_60_4: 4628,
                    T86_70_6: 5345
                }
                return scheme[this.profileType]/1000000;
            },
            AS(){//Площади поперечного сечения (Усилительный вкладыш, м2) [F90]
                let resp;

                if (this.reinforcementType === 'rt_1') {
                    resp = 148.7;
                } else if (this.reinforcementType === 'rt_2') {
                    resp = 193;
                } else if (this.reinforcementType === 'rt_3') {
                    resp = 105.1;
                } else if (this.reinforcementType === 'rt_4') {
                    resp = 137;
                } else if (this.reinforcementType === 'rt_5') {
                    resp = 133.8;
                } else if (this.reinforcementType === 'rt_6') {
                    resp = 176.3;
                }

                return resp / 1000000;
            },
            B1(){// Модули упругости (b1) [F67]
                return this.windowSideA/100;
            },
            B2(){// Модули упругости (b2) [F68]
                return this.windowSideB/100;
            },
            K0(){//Начальная кривизна оси импоста оконной конструкции [F120]
                return LTE_COEFF_PVH * ((this.insideAirTemperature - this.outsideAirTemperature)/this.impostWidth)*(R0/((1/AB)+R0+(1/AH))) * this.tk;
            },
            tk(){//Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, [F116, N55]
                if( ['T78_AERO', 'T78_ACLASS', 'T80_AERO'].includes(this.profileType) ){//трехкамерный ПВХ
                    return 0.78;
                }
                if( ['T86_60_4'].includes(this.profileType) ){//четырехкамерный ПВХ
                    return 0.82;
                }
                if( ['T78_SUPER_AERO', 'T80_SUPER_AERO'].includes(this.profileType) ){//пятикамерный ПВХ
                    return 0.8;
                }
                if( ['T86_70_6'].includes(this.profileType) ){//шестикамерный ПВХ
                    return 0.85;
                }
            },
            impostWidth(){//Ширина профиля импоста,м [F118]
                if( ['T78_AERO', 'T78_ACLASS', 'T86_60_4', 'T80_AERO'].includes(this.profileType) ){
                    return 0.06;
                }
                if( ['T78_SUPER_AERO', 'T86_70_6', 'T80_SUPER_AERO'].includes(this.profileType) ){
                    return 0.07;
                }
            }

        },
        methods: {
            onProfileTypeChange(){// при смене типа профиля, меняем Тип армирования на первый из списка доступных
                this.reinforcementType = this.reinforcementTypes[0];
            }
        },
        created(){

        },
        mounted() {

        }
    }

</script>
