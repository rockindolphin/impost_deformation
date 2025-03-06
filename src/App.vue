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

                <div class="control control--tabs">
                    <div class="wrapper">
                        <template
                            v-for="tab_key in Object.keys(tabs)"
                            :key="`tab_input_${tab_key}`"
                            >
                            <input
                                type="radio"
                                name="tabs"
                                class="control__input"
                                :id="`tab_${tab_key}`"
                                :value="tab_key"
                                v-model="currentTab"
                            >
                            <label
                                class="control__label"
                                :for="`tab_${tab_key}`"
                                >
                                {{ tabs[tab_key] }}
                            </label>
                        </template>
                    </div>
                    <div class="control__content control__content--visible grid gap-4 grid-cols-12">

                        <template v-if="currentTab === 'tab_1'">
                            <label class="col-span-6" for="windRegion">
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

                            <label class="col-span-6" for="terrainType">
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

                            <label class="col-span-4" for="insideAirTemperature">
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

                            <label class="col-span-4" for="outsideAirTemperature">
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

                            <label class="col-span-4" for="instalationAirTemperature">
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
                        </template>

                        <template v-if="currentTab === 'tab_2'">
                            <label class="col-span-4" for="buildingHeight">
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

                            <label class="col-span-4" for="buildingWidth">
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

                            <label class="col-span-4" for="buildingLength">
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

                            <label class="col-span-4" for="windowInstallationHeight">
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

                            <label class="col-span-4" for="windSide">
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
                                v-if="['Боковая стена'].includes(windSide)"
                                class="col-span-4"
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
                        </template>

                        <template v-if="currentTab === 'tab_3'">
                            <div class="col-span-6 grid gap-4 grid-cols-12">

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

                                <label class="col-span-12" for="windowSideD">
                                    <span class="form__label">
                                        d (см):
                                    </span>
                                    <input
                                        id="windowSideD"
                                        :value="windowSideD"
                                        type="number"
                                        step="0.1"
                                        disabled
                                        class="control control--text"
                                    >
                                </label>

                            </div>
                            <img src="@/assets/images/scheme.png" class="col-span-6">
                        </template>

                        <template v-if="currentTab === 'tab_4'">
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
                        </template>

                        <!--
                            <template v-if="currentTab === 'tab_5'">
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
                </div>


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
            tabs: {
                'tab_1': 'Шаг №1',
                'tab_2': 'Шаг №2',
                'tab_3': 'Шаг №3',
                'tab_4': 'Шаг №4'
            },
            currentTab: 'tab_1',

            //tab_1
            windRegions: ['Ia', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
            windRegion: 'I', //Ветровой район
            terrainTypes: ['A', 'B', 'C'],
            terrainType: 'B', //Тип местности
            insideAirTemperature: 20, //Расчетная внутренняя температура воздуха [F15]
            outsideAirTemperature: 15, //Расчетная наружная температура воздуха [F16]
            instalationAirTemperature: 15, //Температура замыкания (монтажа) оконной конструкции [F17]

            //tab_2
            buildingHeight: 60, //Высота здания h (м) [B9]
            buildingWidth: 50, //Ширина здания d (м) [B10]
            buildingLength: 30, //Длина здания [E10]
            windowInstallationHeight: 40, //Фактическая высота установки окна (м): [B11]
            windSides: ['windward_side', 'leeward_side', 'side_wall'],
            windSide: 'windward_side', //Сторона
            buildingSideToWindowLength: 4, //Расстояние от края наветренной стены до окна

            //tab_3
            impostLength: 150, //Длина импоста L (см):
            windowSideA: 70, //Рассчитываемый элемент a
            windowSideB: 70, //Рассчитываемый элемент b
            windowSideC: 0, //Рассчитываемый элемент c

            //tab_4
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
