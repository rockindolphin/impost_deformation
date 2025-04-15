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
                                    v-for="item in Object.keys(windRegions)"
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

                        <label class="col-span-12 md:col-span-6" for="outsideAirTemperature">
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

                        <label class="col-span-12 md:col-span-6" for="instalationAirTemperature">
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
                                        v-for="item in Object.keys(windSides)"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ windSides[item].i18n }}
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
                                        v-for="item in Object.keys(profileTypes)"
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
                                        v-for="item in Object.keys(windowColors)"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ windowColors[item].i18n }}
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
                                        v-for="item in reinforcementTypesOptions"
                                        :key="item"
                                        :value="item"
                                        >
                                        {{ reinforcementTypes[item].i18n }}
                                    </option>
                                </select>
                            </label>

                            <div class="col-span-12 border-1 p-4">
                                <p class="font-bold">
                                    {{ gapPics.impost.title }}
                                </p>
                                <img :src="gapPics.impost.src" class="w-1/2" :alt="gapPics.impost.title">
                                <p class="col-span-12 font-bold">
                                    Максимально допустимый прогиб, мм: {{ maximumAllowableDeflection.toFixed(3) }}
                                </p>

                                <p class="col-span-12 font-bold">
                                    Расчётный прогиб, мм: {{ estimatedDeflectionImpost.toFixed(3) }}
                                </p>
                            </div>

                            <div class="col-span-12 border-1 p-4">
                                <p class="font-bold">
                                    {{ gapPics.pilyastr.title }}
                                </p>
                                <img :src="gapPics.pilyastr.src" class="w-1/2" :alt="gapPics.pilyastr.title">
                                <p class="col-span-12 font-bold">
                                    Расчётный прогиб, мм: {{ estimatedDeflectionPilyastr.toFixed(3) }}
                                </p>
                            </div>

                            <div class="col-span-12 border-1 p-4">
                                <p class="font-bold">
                                    {{ gapPics.connective3.title }}
                                </p>
                                <img :src="gapPics.connective3.src" class="w-1/2" :alt="gapPics.connective3.title">
                                <p class="col-span-12 font-bold">
                                    Расчётный прогиб, мм: {{ estimatedDeflectionConnective3.toFixed(3) }}
                                </p>
                            </div>

                            <div class="col-span-12 border-1 p-4">
                                <p class="font-bold">
                                    {{ gapPics.universal.title }}
                                </p>
                                <img :src="gapPics.universal.src" class="w-1/2" :alt="gapPics.universal.title">
                                <p class="col-span-12 font-bold">
                                    Расчётный прогиб, мм: {{ estimatedDeflectionUniversal.toFixed(3) }}
                                </p>
                            </div>

                        </div>

                    </div>
                </details>

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
    import picGainImpost from '@/assets/images/impost.png';
    import picGainPilyastr from '@/assets/images/pilyastr.png';
    import picGainСonnective3 from '@/assets/images/connective3.png';
    import picGainUniversal from '@/assets/images/universal.png';


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
                windRegion: 'II', //Ветровой район
                terrainTypes: ['A', 'B', 'C'],
                terrainType: 'C', //Тип местности
                insideAirTemperature: 21, //Расчетная внутренняя температура воздуха [F15]
                outsideAirTemperature: -20, //Расчетная наружная температура воздуха [F16]
                instalationAirTemperature: 10, //Температура замыкания (монтажа) оконной конструкции [F17]

                //step_2
                buildingHeight: 60, //Высота здания h (м) [B9]
                buildingWidth: 47, //Ширина здания d (м) [B10]
                buildingLength: 30, //Длина здания [E10]
                windowInstallationHeight: 50, //Фактическая высота установки окна (м): [B11]
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
                windSide: 'windward_side', //Сторона
                buildingSideToWindowLength: 5, //Расстояние от края наветренной стены до окна

                //step_3
                impostLength: 180, //Длина импоста L (см):
                windowSideA: 109, //Рассчитываемый элемент a
                windowSideB: 100, //Рассчитываемый элемент b
                windowSideC: 100, //Рассчитываемый элемент c

                //step_4
                profileTypes: {
                    'T78_AERO': {
                        impostWidth: 0.06, //Ширина профиля импоста,м [F118]
                        tk: 0.78, //Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, [F116, N55]
                        ap: 727, //Площади поперечного сечения (ПВХ профиль)
                        te: 1.08, // Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле
                        f110: 1, // Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля
                        lp: 349918, // Главные моменты инерции (Сечения профиля)
                        an51: 0.123
                    },
                    'T80_AERO': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        ap: 757,
                        te: 1.08,
                        f110: 1,
                        lp: 360096,
                        an51: 0.123
                    },
                    'T78_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        ap: 807,
                        te: 1.11,
                        f110: 1,
                        lp: 519229,
                        an51: 0.133
                    },
                    'T80_SUPER_AERO': {
                        impostWidth: 0.07,
                        tk: 0.8,
                        ap: 835,
                        te: 1.11,
                        f110: 1,
                        lp: 533651,
                        an51: 0.133
                    },
                    'T78_ACLASS': {
                        impostWidth: 0.06,
                        tk: 0.78,
                        ap: 874,
                        te: 1.08,
                        f110: 2,
                        lp: 406621,
                        an51: 0.123
                    },
                    'T86_60_4': {
                        impostWidth: 0.06,
                        tk: 0.82,
                        ap: 970,
                        te: 1.2,
                        f110: 0.5,
                        lp: 469124,
                        an51: 0.123
                    },
                    'T86_70_6': {
                        impostWidth: 0.07,
                        tk: 0.85,
                        ap: 1103,
                        te: 1.32,
                        f110: 1.25,
                        lp: 706133,
                        an51: 0.133
                    },
                    /*
                    'GLIDE': {
                        an51: 0.094,
                        f110: 1,
                        lp: 63666
                        ap: 487
                    }
                    */
                },
                profileType: 'T80_SUPER_AERO', //Тип профиля
                reinforcementTypes: {
                    rt_1: {
                        i18n: '35*20*1,5(труба)',
                        as: 148.7, //Площади поперечного сечения (Усилительный вкладыш)
                        d21: 2.21, // момент инерции в зависимости от типа армирования [D21]
                    },
                    rt_2: {
                        i18n: '35*20*2(труба)',
                        as: 193,
                        d21: 2.82,
                    },
                    rt_3: {
                        i18n: '35*20*1,5',
                        as: 105.1,
                        d21: 2.01,
                    },
                    rt_4: {
                        i18n: '35*20*2',
                        as: 137,
                        d21: 2.55,
                    },
                    rt_5: {
                        i18n: '35*28*1,5',
                        as: 133.8,
                        d21: 2.52,
                    },
                    rt_6: {
                        i18n: '35*28*2',
                        as: 176.3,
                        d21: 3.21,
                    }
                },
                reinforcementType: 'rt_2', //Тип армирования
                windowColors: {
                    'white': {
                        i18n: 'Белый',
                        p: 0.3 //Коэффициент
                    },
                    'colored': {
                        i18n: 'Цветной',
                        p: 0.25
                    }
                },
                windowColor: 'white' //Цвет профиля
            }
        },
        computed: {
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
            gapPics(){
                return {
                    impost: {
                        src: picGainImpost,
                        title: 'Импост'
                    },
                    pilyastr: {
                        src: picGainPilyastr,
                        title: 'Усиление пилястровым профилем'
                    },
                    connective3: {
                        src: picGainСonnective3,
                        title: 'Соединительный профиль 3'
                    },
                    universal: {
                        src: picGainUniversal,
                        title: 'Профиль соединительный универсальный'
                    }
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
            selectedProfileParams(){
                return this.profileTypes[this.profileType];
            },
            selectedColorParams(){
                return this.windowColors[this.windowColor];
            },
            selectedReinforcementTypeParams(){
                return this.reinforcementTypes[this.reinforcementType];
            },
            selectedWindRegionParams(){
                return this.windRegions[this.windRegion];
            },
            windowSideD(){ //Рассчитываемый элемент d
                return this.impostLength - this.windowSideC;
            },
            reinforcementTypesOptions(){// Тип армирования в зависимости от типа профиля
                return  ['T86_60_4', 'T86_70_6'].includes(this.profileType) ?  ['rt_5', 'rt_6'] : ['rt_1', 'rt_2', 'rt_3', 'rt_4'];
            },
            maximumAllowableDeflection(){//Максимально допустимый прогиб
                return ((this.impostLength/100)/200)*1000;
            },
            estimatedDeflectionImpost(){//Расчётный прогиб (импост)
                return Math.abs( (this.C53+this.C75)*1000 );
            },
            estimatedDeflectionPilyastr(){// Расчётный прогиб (Усиление пилястровым профилем) [[AN53]]
                /*
                    (F164/(F172*AR40+F171*AR39))*(F177*(F177^2-5*F174^2)^2+F178*(F178^2-5*F174^2)^2)/3840
                */

                let F171 = EP,
                    F198 = CSA,
                    F205 = MRI,
                    F172 = ES,
                    F210 = R0,
                    F215 = AB,
                    F214 = AH,
                    F206 = LTE_COEFF_PVH,
                    F164 = this.QW,
                    F208 = this.F98,
                    F174 = this.L,
                    F177 = this.windowSideA/100,
                    F178 = this.windowSideB/100,
                    AR40 = this.characteristicsPilyastr.orange,
                    AR39 = this.characteristicsPilyastr.yellow,
                    AR41 = this.characteristicsPilyastr.cyan,
                    AR42 = this.characteristicsPilyastr.purple,
                    AR43 = this.characteristicsPilyastr.green,
                    F185 = this.selectedColorParams.p,
                    F221 = this.selectedProfileParams.te,
                    AN51 = this.selectedProfileParams.an51,
                    F222 = this.selectedProfileParams.tk,
                    F17 = this.instalationAirTemperature,
                    F200 = this.insideAirTemperature,
                    F16 = this.outsideAirTemperature;

                let AN52 = F206 * ((F200 - F16) / AN51) * (F210 / ((1 / F215) + F210 + (1 / F214))) * F222;
                let AN47 = (1 / (AR42 * F171)) + (1 / (AR43 * F172));
                let AN48 = ((F208 - F17) * (F206 * F221 - F205)) / (AN47 * F185 * F198 * (AN47 + (2 / (F198 * (F174 - 2 * F185))) + 2 * AN47 + (2 / (F198 * (F174 - 2 * F185)))));
                let AN49 = AN48 * (F185 * F198 * (AN47 + (2 / (F198 * (F174 - 2 * F185)))) + 1);
                let fw = (F164 / (F172 * AR40 + F171 * AR39)) * (F177 * Math.pow(F177 ** 2 - 5 * F174 ** 2, 2) + F178 * Math.pow(F178 ** 2 - 5 * F174 ** 2, 2)) / 3840;
                let ft = (AN52 * F174 ** 2 * F171 * AR39 - AR41 * (AN49 * F174 ** 2 + AN48 * (F174 ** 2 - 4 * F185 ** 2))) / (8 * (F172 * AR40 + F171 * AR39));

                return (fw+ft)*1000;
            },
            characteristicsPilyastr(){// таблица характеристик (Пилястровый профиль) [[AU29_BC68]] yellow - Сечения профиля м4 / orange - Сечения усилительного вкладыша, м4 / cyan - δ / purple - ПВХ профиль, м2 / green - Усилительный вкладыш, м2
                let scheme = {
                    T78_AERO: {
                        rt_1: {
                            yellow: 1485455,
                            orange: 451461,
                            cyan: 10.44,
                            purple: 1164,
                            green: 420
                        },
                        rt_2: {
                            yellow: 1485455,
                            orange: 517504,
                            cyan: 6.745,
                            purple: 1164,
                            green: 464
                        },
                        rt_3: {
                            yellow: 1485455,
                            orange: 373983,
                            cyan: 14.98,
                            purple: 1164,
                            green: 376
                        },
                        rt_4: {
                            yellow: 1485455,
                            orange: 434939,
                            cyan: 11.56,
                            purple: 1164,
                            green: 409
                        }
                    },
                    T80_AERO: {
                        rt_1: {
                            yellow: 1521116,
                            orange: 490519,
                            cyan: 10.05,
                            purple: 1195,
                            green: 420
                        },
                        rt_2: {
                            yellow: 1521116,
                            orange: 563376,
                            cyan: 6.237,
                            purple: 1195,
                            green: 464
                        },
                        rt_3: {
                            yellow: 1521116,
                            orange: 404699,
                            cyan: 14.838,
                            purple: 1195,
                            green: 376
                        },
                        rt_4: {
                            yellow: 1521116,
                            orange: 471948,
                            cyan: 11.23,
                            purple: 1195,
                            green: 409
                        }
                    },
                    T78_SUPER_AERO: {
                        rt_1: {
                            yellow: 1861336,
                            orange: 527922,
                            cyan: 12.86,
                            purple: 1245,
                            green: 420
                        },
                        rt_2: {
                            yellow: 1861336,
                            orange: 607304,
                            cyan: 8.77,
                            purple: 1245,
                            green: 464
                        },
                        rt_3: {
                            yellow: 1861336,
                            orange: 434117,
                            cyan: 17.869,
                            purple: 1245,
                            green: 376
                        },
                        rt_4: {
                            yellow: 1861336,
                            orange: 507393,
                            cyan: 14.09,
                            purple: 1245,
                            green: 409
                        }
                    },
                    T80_SUPER_AERO: {
                        rt_1: {
                            yellow: 1905373,
                            orange: 577729,
                            cyan: 12.298,
                            purple: 1272,
                            green: 420
                        },
                        rt_2: {
                            yellow: 1905373,
                            orange: 665800,
                            cyan: 7.97,
                            purple: 1272,
                            green: 464
                        },
                        rt_3: {
                            yellow: 1905373,
                            orange: 473296,
                            cyan: 17.587,
                            purple: 1272,
                            green: 376
                        },
                        rt_4: {
                            yellow: 1905373,
                            orange: 554599,
                            cyan: 13.59,
                            purple: 1272,
                            green: 409
                        }
                    },
                    T78_ACLASS: {
                        rt_1: {
                            yellow: 3179848,
                            orange: 442297,
                            cyan: 12.847,
                            purple: 2624,
                            green: 420
                        },
                        rt_2: {
                            yellow: 3179848,
                            orange: 506742,
                            cyan: 9.238,
                            purple: 2624,
                            green: 464
                        },
                        rt_3: {
                            yellow: 3179848,
                            orange: 366778,
                            cyan: 17.36,
                            purple: 2624,
                            green: 376
                        },
                        rt_4: {
                            yellow: 3179848,
                            orange: 426257,
                            cyan: 13.99,
                            purple: 2624,
                            green: 409
                        }
                    },
                    T86_60_4: {
                        rt_5: {
                            yellow: 1787685,
                            orange: 421772,
                            cyan: 17.44,
                            purple: 1437,
                            green: 405.5
                        },
                        rt_6: {
                            yellow: 1787685,
                            orange: 489871,
                            cyan: 13.66,
                            purple: 1437,
                            green: 448
                        },
                        /*
                        rt_5_pipe: {
                            yellow: 1787685,
                            orange: 576006,
                            cyan: 14.69,
                            purple: 1437,
                            green: 444
                        },
                        rt_6_pipe: {
                            yellow: 1787685,
                            orange: 658387,
                            cyan: 10.519,
                            purple: 1437,
                            green: 495
                        }
                        */
                    },
                    T86_70_6: {
                        rt_5: {
                            yellow: 2159130,
                            orange: 498077,
                            cyan: 18.67,
                            purple: 1540,
                            green: 405.5
                        },
                        rt_6: {
                            yellow: 2159130,
                            orange: 580948,
                            cyan: 14.458,
                            purple: 1540,
                            green: 448
                        },
                        /*
                        rt_5_pipe: {
                            yellow: 2159130,
                            orange: 485726,
                            cyan: 13.859,
                            purple: 1540,
                            green: 444
                        },
                        rt_6_pipe: {
                            yellow: 2159130,
                            orange: 553484,
                            cyan: 10.1,
                            purple: 1540,
                            green: 495
                        }
                        */
                    },
                    /*
                    GLIDE: {
                        '26_19_1.5': {
                            yellow: 805444,
                            orange: 223062,
                            cyan: 9.738,
                            purple: 924,
                            green: 359
                        }
                    }
                    */
                }
                let data = scheme[this.profileType][this.reinforcementType];
                return {
                    yellow: data?.yellow/1000000000000,
                    orange: data?.orange/1000000000000,
                    cyan:   data?.cyan/1000,
                    purple: data?.purple/1000000,
                    green:  data?.green/1000000
                };
            },
            estimatedDeflectionConnective3(){
                let F215 = this.V,
                    F214 = this.DZE,
                    F231 = ES,
                    F230 = EP,
                    F257 = CSA,
                    F264 = MRI,
                    F265 = LTE_COEFF_PVH,
                    F274 = AB,
                    F269 = R0,
                    F273 = AH,
                    W5 = this.selectedWindRegionParams.w0,
                    F202 = this.KZE,
                    F203 = this.C,
                    F197 = this.WM,
                    F233 = this.L,
                    F285 = this.K0,
                    F223 = W5*F202*F203 +F197*F214*F215, // W5*F202*F203 === this.WM
                    F236 = this.windowSideA/100,
                    F237 = this.windowSideB/100,
                    BH70 = this.characteristicsConnective3.yellow,
                    BH71 = this.characteristicsConnective3.orange,
                    BH72 = this.characteristicsConnective3.cyan,
                    BH73 = this.characteristicsConnective3.purple,
                    BH74 = this.characteristicsConnective3.green,
                    F280 = this.selectedProfileParams.te,
                    F276 = this.selectedProfileParams.f110,
                    F244 = this.selectedColorParams.p,
                    F17 = this.instalationAirTemperature,
                    F16 = this.outsideAirTemperature,
                    F259 = this.insideAirTemperature;

                let F267 = (F259 - (F259 - F16)) * ((1 / F274 + F269 / (F276 + 1)) / (1 / F274 + F269 + 1 / F273));
                let BD78 = (1 / (BH73 * F230)) + (1 / (BH74 * F231));
                let BD79 = ((F267 - F17) * (F265 * F280 - F264)) / (BD78 * F244 * F257 * (BD78 + (2 / (F257 * (F233 - 2 * F244))) + 2 * BD78 + (2 / (F257 * (F233 - 2 * F244)))));
                let BD80 = BD79 * (F244 * F257 * (BD78 + (2 / (F257 * (F233 - 2 * F244)))) + 1);
                let fw = (F223 / (F231 * BH71 + F230 * BH70)) * (F236 * Math.pow(F236 ** 2 - 5 * F233 ** 2, 2) + F237 * Math.pow(F237 ** 2 - 5 * F233 ** 2, 2)) / 3840;
                let ft = (F285 * F233 ** 2 * F230 * BH70 - BH72 * (BD80 * F233 ** 2 + BD79 * (F233 ** 2 - 4 * F244 ** 2))) / (8 * (F231 * BH71 + F230 * BH70));
                return (fw+ft)*1000;
            },
            characteristicsConnective3(){// таблица характеристик (Профиль соединительный 3) [[BK29_BP63]] yellow - Сечения профиля м4 / orange - Сечения усилительного вкладыша, м4 / cyan - δ / purple - ПВХ профиль, м2 / green - Усилительный вкладыш, м2
                let scheme = {
                    T78_AERO: {
                        rt_1: {
                            yellow: 711265,
                            orange: 45790,
                            cyan: 4.4,
                            purple: 1517,
                            green: 297
                        },
                        rt_2: {
                            yellow: 711265,
                            orange: 57168,
                            cyan: 4.4,
                            purple: 1517,
                            green: 386
                        },
                        rt_3: {
                            yellow: 711265,
                            orange: 40165,
                            cyan: 4.23,
                            purple: 1517,
                            green: 210
                        },
                        rt_4: {
                            yellow: 711265,
                            orange: 50941,
                            cyan: 4.23,
                            purple: 1517,
                            green: 275
                        }
                    },
                    T80_AERO: {
                        rt_1: {
                            yellow: 711265,
                            orange: 45790,
                            cyan: 4.4,
                            purple: 1517,
                            green: 297
                        },
                        rt_2: {
                            yellow: 711265,
                            orange: 57168,
                            cyan: 4.4,
                            purple: 1517,
                            green: 386
                        },
                        rt_3: {
                            yellow: 711265,
                            orange: 40165,
                            cyan: 4.23,
                            purple: 1517,
                            green: 210
                        },
                        rt_4: {
                            yellow: 711265,
                            orange: 50941,
                            cyan: 4.23,
                            purple: 1517,
                            green: 275
                        }
                    },
                    T78_SUPER_AERO: {
                        rt_1: {
                            yellow: 1120743,
                            orange: 45790,
                            cyan: 5.255,
                            purple: 1710,
                            green: 297
                        },
                        rt_2: {
                            yellow: 1120743,
                            orange: 57168,
                            cyan: 5.257,
                            purple: 1710,
                            green: 386
                        },
                        rt_3: {
                            yellow: 1120743,
                            orange: 40165,
                            cyan: 5.086,
                            purple: 1710,
                            green: 210
                        },
                        rt_4: {
                            yellow: 1120743,
                            orange: 50941,
                            cyan: 5.086,
                            purple: 1710,
                            green: 275
                        }
                    },
                    T80_SUPER_AERO: {
                        rt_1: {
                            yellow: 1120743,
                            orange: 45790,
                            cyan: 5.255,
                            purple: 1710,
                            green: 297
                        },
                        rt_2: {
                            yellow: 1120743,
                            orange: 57168,
                            cyan: 5.257,
                            purple: 1710,
                            green: 386
                        },
                        rt_3: {
                            yellow: 1120743,
                            orange: 40165,
                            cyan: 5.086,
                            purple: 1710,
                            green: 210
                        },
                        rt_4: {
                            yellow: 1120743,
                            orange: 50941,
                            cyan: 5.086,
                            purple: 1710,
                            green: 275
                        }
                    },
                    T78_ACLASS: {
                        rt_1: {
                            yellow: 831264,
                            orange: 45790,
                            cyan: 3.379,
                            purple: 1781,
                            green: 297
                        },
                        rt_2: {
                            yellow: 831264,
                            orange: 57168,
                            cyan: 3.38,
                            purple: 1781,
                            green: 386
                        },
                        rt_3: {
                            yellow: 831264,
                            orange: 40165,
                            cyan: 3.21,
                            purple: 1781,
                            green: 210
                        },
                        rt_4: {
                            yellow: 831264,
                            orange: 50941,
                            cyan: 3.21,
                            purple: 1781,
                            green: 275
                        }
                    },
                    T86_60_4: {
                        rt_1: {
                            yellow: 911177,
                            orange: 45790,
                            cyan: 2.816,
                            purple: 1911,
                            green: 297
                        },
                        rt_2: {
                            yellow: 911177,
                            orange: 57168,
                            cyan: 2.818,
                            purple: 1911,
                            green: 386
                        },
                        rt_3_pipe: {
                            yellow: 911177,
                            orange: 40165,
                            cyan: 2.647,
                            purple: 1911,
                            green: 210
                        },
                        rt_4_pipe: {
                            yellow: 911177,
                            orange: 50941,
                            cyan: 2.647,
                            purple: 1911,
                            green: 275
                        }
                    },
                    T86_70_6: {
                        rt_1: {
                            yellow: 1456643,
                            orange: 45790,
                            cyan: 5.293,
                            purple: 2262,
                            green: 297
                        },
                        rt_2: {
                            yellow: 1456643,
                            orange: 57168,
                            cyan: 5.293,
                            purple: 2262,
                            green: 386
                        },
                        rt_3_pipe: {
                            yellow: 1456643,
                            orange: 40165,
                            cyan: 5.123,
                            purple: 2262,
                            green: 210
                        },
                        rt_4_pipe: {
                            yellow: 1456643,
                            orange: 50941,
                            cyan: 5.123,
                            purple: 2262,
                            green: 275
                        }
                    }
                }
                let data = scheme[this.profileType][this.reinforcementType];
                return {
                    yellow: data?.yellow/1000000000000,
                    orange: data?.orange/1000000000000,
                    cyan:   data?.cyan/1000,
                    purple: data?.purple/1000000,
                    green:  data?.green/1000000
                };
            },
            estimatedDeflectionUniversal(){
                let F215 = this.V,
                    F214 = this.DZE,
                    F231 = ES,
                    F230 = EP,
                    F257 = CSA,
                    F264 = MRI,
                    F265 = LTE_COEFF_PVH,
                    F274 = AB,
                    F269 = R0,
                    F273 = AH,
                    W5 = this.selectedWindRegionParams.w0,
                    F202 = this.KZE,
                    F203 = this.C,
                    F197 = this.WM,
                    F233 = this.L,
                    F285 = this.K0,
                    F223 = W5*F202*F203 +F197*F214*F215, // W5*F202*F203 === this.WM
                    F236 = this.windowSideA/100,
                    F237 = this.windowSideB/100,
                    BW39 = this.characteristicsUniversal.yellow,
                    BW40 = this.characteristicsUniversal.orange,
                    BW41 = this.characteristicsUniversal.cyan,
                    BW42 = this.characteristicsUniversal.purple,
                    BW43 = this.characteristicsUniversal.green,
                    F280 = this.selectedProfileParams.te,
                    F276 = this.selectedProfileParams.f110,
                    F244 = this.selectedColorParams.p,
                    F17 = this.instalationAirTemperature,
                    F16 = this.outsideAirTemperature,
                    F259 = this.insideAirTemperature;

                let F267 = (F259 - (F259 - F16)) * ((1 / F274 + F269 / (F276 + 1)) / (1 / F274 + F269 + 1 / F273));
                let BS47 = (1 / (BW42 * F230)) + (1 / (BW43 * F231));
                let BS48 = ((F267 - F17) * (F265 * F280 - F264)) / (BS47 * F244 * F257 * (BS47 + (2 / (F257 * (F233 - 2 * F244))) + 2 * BS47 + (2 / (F257 * (F233 - 2 * F244)))));
                let BS49 = BS48 * (F244 * F257 * (BS47 + (2 / (F257 * (F233 - 2 * F244)))) + 1);
                let fw = (F223 / (F231 * BW40 + F230 * BW39)) * (F236 * Math.pow(Math.pow(F236, 2) - 5 * Math.pow(F233, 2), 2) + F237 * Math.pow(Math.pow(F237, 2) - 5 * Math.pow(F233, 2), 2)) / 3840;
                let ft = (F285 * Math.pow(F233, 2) * F230 * BW39 - BW41 * (BS49 * Math.pow(F233, 2) + BS48 * (Math.pow(F233, 2) - 4 * Math.pow(F244, 2)))) / (8 * (F231 * BW40 + F230 * BW39));
                return (fw+ft)*1000;
            },
            characteristicsUniversal(){// таблица характеристик (Профиль соединительный универсальный) [[BZ29_CE63]] yellow - Сечения профиля м4 / orange - Сечения усилительного вкладыша, м4 / cyan - δ / purple - ПВХ профиль, м2 / green - Усилительный вкладыш, м2
                let scheme = {
                    T78_AERO: {
                        rt_1: {
                            yellow: 1654707,
                            orange: 546061,
                            cyan: 2.775,
                            purple: 1824,
                            green: 897
                        },
                        rt_2: {
                            yellow: 1654707,
                            orange: 557490,
                            cyan: 2.846,
                            purple: 1824,
                            green: 986
                        },
                        rt_3: {
                            yellow: 1654707,
                            orange: 540321,
                            cyan: 2.647,
                            purple: 1824,
                            green: 810
                        },
                        rt_4: {
                            yellow: 1654707,
                            orange: 551130,
                            cyan: 2.7,
                            purple: 1824,
                            green: 875
                        }
                    },
                    T80_AERO: {
                        rt_1: {
                            yellow: 1654707,
                            orange: 546061,
                            cyan: 2.775,
                            purple: 1824,
                            green: 897
                        },
                        rt_2: {
                            yellow: 1654707,
                            orange: 557490,
                            cyan: 2.846,
                            purple: 1824,
                            green: 986
                        },
                        rt_3: {
                            yellow: 1654707,
                            orange: 540321,
                            cyan: 2.647,
                            purple: 1824,
                            green: 810
                        },
                        rt_4: {
                            yellow: 1654707,
                            orange: 551130,
                            cyan: 2.7,
                            purple: 1824,
                            green: 875
                        }
                    },
                    T78_SUPER_AERO: {
                        rt_1: {
                            yellow: 2196328,
                            orange: 546813,
                            cyan: 3.336,
                            purple: 1975,
                            green: 897
                        },
                        rt_2: {
                            yellow: 2196328,
                            orange: 558379,
                            cyan: 3.47,
                            purple: 1975,
                            green: 986
                        },
                        rt_3: {
                            yellow: 2196328,
                            orange: 540851,
                            cyan: 3.129,
                            purple: 1975,
                            green: 810
                        },
                        rt_4: {
                            yellow: 2196328,
                            orange: 551773,
                            cyan: 3.24,
                            purple: 1975,
                            green: 875
                        }
                    },
                    T80_SUPER_AERO: {
                        rt_1: {
                            yellow: 2196328,
                            orange: 546813,
                            cyan: 3.336,
                            purple: 1975,
                            green: 897
                        },
                        rt_2: {
                            yellow: 2196328,
                            orange: 558379,
                            cyan: 3.47,
                            purple: 1975,
                            green: 986
                        },
                        rt_3: {
                            yellow: 2196328,
                            orange: 540851,
                            cyan: 3.129,
                            purple: 1975,
                            green: 810
                        },
                        rt_4: {
                            yellow: 2196328,
                            orange: 551773,
                            cyan: 3.24,
                            purple: 1975,
                            green: 875
                        }
                    },
                    T78_ACLASS: {
                        rt_1: {
                            yellow: 1774816,
                            orange: 545795,
                            cyan: 2.53,
                            purple: 2089,
                            green: 897
                        },
                        rt_2: {
                            yellow: 1774816,
                            orange: 557175,
                            cyan: 2.54,
                            purple: 2089,
                            green: 986
                        },
                        rt_3: {
                            yellow: 1774816,
                            orange: 540165,
                            cyan: 2.477,
                            purple: 2089,
                            green: 810
                        },
                        rt_4: {
                            yellow: 1774816,
                            orange: 550941,
                            cyan: 2.477,
                            purple: 2089,
                            green: 875
                        }
                    },
                    T86_60_4: {
                        rt_1: {
                            yellow: 1852935,
                            orange: 545817,
                            cyan: 1.984,
                            purple: 2218,
                            green: 897
                        },
                        rt_2: {
                            yellow: 1852935,
                            orange: 557200,
                            cyan: 2,
                            purple: 2218,
                            green: 986
                        },
                        rt_3_pipe: {
                            yellow: 1852935,
                            orange: 540171,
                            cyan: 1.914,
                            purple: 2218,
                            green: 810
                        },
                        rt_4_pipe: {
                            yellow: 1852935,
                            orange: 550949,
                            cyan: 1.925,
                            purple: 2218,
                            green: 875
                        }
                    },
                    T86_70_6: {
                        rt_1: {
                            yellow: 2532351,
                            orange: 547245,
                            cyan: 3.164,
                            purple: 2527,
                            green: 897
                        },
                        rt_2: {
                            yellow: 2532351,
                            orange: 558890,
                            cyan: 3.328,
                            purple: 2527,
                            green: 986
                        },
                        rt_3_pipe: {
                            yellow: 2532351,
                            orange: 541167,
                            cyan: 2.926,
                            purple: 2527,
                            green: 810
                        },
                        rt_4_pipe: {
                            yellow: 2532351,
                            orange: 552155,
                            cyan: 3.065,
                            purple: 2527,
                            green: 875
                        }
                    }
                }
                let data = scheme[this.profileType][this.reinforcementType];
                return {
                    yellow: data?.yellow/1000000000000,
                    orange: data?.orange/1000000000000,
                    cyan:   data?.cyan/1000,
                    purple: data?.purple/1000000,
                    green:  data?.green/1000000
                };
            },
            C53(){// [C53]
                let B1 = this.windowSideA/100, // Модули упругости (b1) [F67]
                    B2 = this.windowSideB/100, // Модули упругости (b2) [F68]
                    LP = this.selectedProfileParams.lp / 1000000000000; // Главные моменты инерции (Сечения профиля, м4 ) [F57]

                return (this.QW / (ES * this.LS + EP * LP) * (B1 * ((B1**2 - 5*this.L**2)**2) + B2 * ((B2**2 - 5*this.L**2)**2))) / 3840;
            },
            WP(){// Нормативное значение пульсационной составляющей основной ветровой нагрузки Wp [F48]
                return this.WM*this.DZE*this.V;
            },
            QW(){// Нормативное значение пиковой ветровой нагрузки на оконную конструкцию, Па. [F54]
                return this.WM + this.WP;
            },
            C75(){// [C75]
                let LP = this.selectedProfileParams.lp / 1000000000000; // Главные моменты инерции (Сечения профиля, м4 ) [F57]
                return ( ( this.K0 * (this.L ** 2) * EP * LP - this.delta * ( this.H1 * (this.L ** 2) + this.H2 * ((this.L ** 2) - 4 * (this.selectedColorParams.p ** 2)) ) ) / (8 * (ES * this.LS + EP * LP)) );
            },
            WM(){// Нормативное значение средней составляющей основной ветровой нагрузки Wm (Нормативное значение ветрового давления, Па )    [F30]
                let W0 = this.selectedWindRegionParams.w0; // Нормативное значение ветрового давления, Па [F29]
                return W0*this.KZE*this.C;
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
            LS(){//Главные моменты инерции  (Сечения усилительного вкладыша, м4) [F58]
                return this.selectedReinforcementTypeParams.d21/100000000;
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
                    if (this.reinforcementType === 'rt_1'){ resp = 6.24; }
                    if (this.reinforcementType === 'rt_2'){ resp = 6.24; }
                    if (this.reinforcementType === 'rt_3'){ resp = 6.07; }
                    if (this.reinforcementType === 'rt_4'){ resp = 6.07; }
                }
                if (this.profileType === 'T86_60_4') {
                    if (this.reinforcementType === 'rt_5'){ resp = 4.834; }
                    if (this.reinforcementType === 'rt_6'){ resp = 4.5; }
                }
                if (this.profileType === 'T86_70_6') {
                    if (this.reinforcementType === 'rt_5'){ resp = 7.745; }
                    if (this.reinforcementType === 'rt_6'){ resp = 7.79; }
                }

                return resp / 1000;
            },
            H1(){//Продольные силы [F80]
                let P = this.selectedColorParams.p; //Коэффициент [F76]
                return this.H2*(P*CSA*(this.G+(2/(CSA*(this.L-2*P))))+1);
            },
            H2(){//Продольные силы [F79]
                let F115 = this.selectedProfileParams.te, // Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, (te) [F115]
                    P = this.selectedColorParams.p; //Коэффициент [F76]
                return ((this.F98-this.instalationAirTemperature)*(LTE_COEFF_PVH*F115-MRI))/(this.G*P*CSA*(this.G+(2/(CSA*(this.L-2*P)))+2*this.G+(2/(CSA*(this.L-2*P)))));
            },
            F98(){// Коэффициенты линейного температурного расширения (Температура во внутренней камере ПВХ профиля) [F98]
                let F110 = this.selectedProfileParams.f110; // Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [F110]
                return (this.insideAirTemperature-(this.insideAirTemperature-this.outsideAirTemperature))*((1/AB+R0/(F110+1))/(1/AB+R0+1/AH));
            },
            G(){ //Расчёт прогиба оконного импоста от действия температурного клматического воздействия (Коэффициент) [F82]
                let AS = this.selectedReinforcementTypeParams.as / 1000000, //Площади поперечного сечения (Усилительный вкладыш, м2) [F90]
                    AP = this.selectedProfileParams.ap / 1000000; //Площади поперечного сечения (ПВХ профиль, м2) [F89]
                return (1/(AP*EP))+(1/(AS*ES));
            },
            K0(){//Начальная кривизна оси импоста оконной конструкции [F120]
                let impostWidth = this.selectedProfileParams.impostWidth,
                    tk = this.selectedProfileParams.tk;
                return LTE_COEFF_PVH * ((this.insideAirTemperature - this.outsideAirTemperature)/impostWidth)*(R0/((1/AB)+R0+(1/AH))) * tk;
            }
        },
        methods: {
            onProfileTypeChange(){// при смене типа профиля, меняем Тип армирования на первый из списка доступных
                this.reinforcementType = this.reinforcementTypesOptions[0];
            }
        },
        created(){

        },
        mounted() {

        }
    }

</script>
