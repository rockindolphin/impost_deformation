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
                                Расчётный прогиб, мм:
                            </p>
                        </template>

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
            windRegion: 'Ia', //Ветровой район
            terrainTypes: ['A', 'B', 'C'],
            terrainType: 'B', //Тип местности
            insideAirTemperature: 20, //Расчетная внутренняя температура воздуха
            outsideAirTemperature: 15, //Расчетная наружная температура воздуха
            instalationAirTemperature: 15, //Температура замыкания (монтажа) оконной конструкции

            //tab_2
            buildingHeight: 0, //Высота здания
            buildingWidth: 0, //Ширина здания
            buildingLength: 30, //Длина здания
            windSides: ['windward_side', 'leeward_side', 'side_wall'],
            windSide: 'windward_side', //Сторона
            buildingSideToWindowLength: 4, //Расстояние от края наветренной стены до окна

            //tab_3
            impostLength: 150, //Длина импоста
            windowSideA: 70, //Рассчитываемый элемент a
            windowSideB: 70, //Рассчитываемый элемент b
            windowSideC: 0, //Рассчитываемый элемент c

            //tab_4
            profileTypes: ['T78_AERO', 'T80_AERO', 'T78_SUPER_AERO', 'T80_SUPER_AERO', 'Т78_ACLASS', 'Т86_60_4', 'Т86_70_6'],
            profileType: 'T78_AERO', //Тип профиля
            reinforcementType: 'rt_1', //Тип армирования
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
                    rt_5: '35*28*2'
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
            return  ['Т86_60_4', 'Т86_70_6'].includes(this.profileType) ?  ['rt_4', 'rt_5'] : ['rt_1', 'rt_2', 'rt_3', 'rt_4'];
        },
        maximumAllowableDeflection(){//Максимально допустимый прогиб
            return ((this.impostLength/100)/200)*1000;
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
