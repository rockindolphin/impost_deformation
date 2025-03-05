<template>
    <div class="page__body">
        <header class="page__header header">
            <div class="page__wrapper">
                <h1>
                    Расчет прогиба оконного профиля
                </h1>
            </div>
        </header>
        <main class="page__main main">
            <div class="page__wrapper">

                <div class="control control--tabs">
                    <div class="wrapper">
                        <span
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
                                class="control__label mr-4 p-1"
                                :for="`tab_${tab_key}`"
                                >
                                {{ tabs[tab_key] }}
                            </label>
                        </span>
                    </div>
                </div>

                <div class="grid gap-4 grid-cols-12">
                    <template v-if="currentTab === 'tab_1'">
                        <label class="block col-span-6 text-gray-700 font-bold mb-2" for="windRegion">
                            Ветровой район (1):
                            <select
                                id="windRegion"
                                v-model="windRegion"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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

                        <label class="block col-span-6  text-gray-700 font-bold mb-2" for="terrainType">
                            Тип местности:
                            <select
                                id="terrainType"
                                v-model="terrainType"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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

                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="insideAirTemperature">
                            Расчетная внутренняя температура воздуха,˚С:
                            <input
                                id="insideAirTemperature"
                                :value="insideAirTemperature"
                                type="number"
                                step="0.1"
                                disabled
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>

                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="outsideAirTemperature">
                            Расчетная наружная температура воздуха,˚С:
                            <input
                                id="outsideAirTemperature"
                                :value="outsideAirTemperature"
                                type="number"
                                step="0.1"
                                disabled
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>

                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="instalationAirTemperature">
                            Темпетарура замыкания (монтажа) оконной конструкции:
                            <input
                                id="instalationAirTemperature"
                                :value="instalationAirTemperature"
                                type="number"
                                step="0.1"
                                disabled
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>
                    </template>

                    <template v-if="currentTab === 'tab_2'">
                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="buildingHeight">
                            Высота здания h (м):
                            <input
                                id="buildingHeight"
                                v-model.number="buildingHeight"
                                type="number"
                                step="0.1"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>
                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="buildingWidth">
                            Ширина здания d (м):
                            <input
                                id="buildingWidth"
                                v-model.number="buildingWidth"
                                type="number"
                                step="0.1"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>
                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="buildingLength">
                            Длина здания:
                            <input
                                id="buildingLength"
                                v-model.number="buildingLength"
                                type="number"
                                step="0.1"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>
                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="windSide">
                            Сторона:
                            <select
                                id="windSide"
                                v-model="windSide"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                <option
                                    v-for="item in windSides"
                                    :key="item"
                                    :value="item"
                                    >
                                    {{ item }}
                                </option>
                            </select>
                        </label>
                        <label class="block col-span-4 text-gray-700 font-bold mb-2" for="buildingSideToWindowLength" v-if="['Боковая стена'].includes(windSide)">
                            Расстояние от края наветренной стены до окна:
                            <input
                                id="buildingSideToWindowLength"
                                v-model.number="buildingSideToWindowLength"
                                type="number"
                                step="0.1"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                        </label>
                    </template>

                    <template v-if="currentTab === 'tab_3'">
                        <div class="col-span-6 grid gap-4 grid-cols-12">
                            <label class="block col-span-12 text-gray-700 font-bold mb-2" for="impostLength">
                                Длина импоста L (см):
                                <input
                                    id="impostLength"
                                    v-model.number="impostLength"
                                    type="number"
                                    step="0.1"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                            </label>
                            <label class="block col-span-12 text-gray-700 font-bold mb-2" for="windowSideA">
                                a (см):
                                <input
                                    id="windowSideA"
                                    v-model.number="windowSideA"
                                    type="number"
                                    step="0.1"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                            </label>
                            <label class="block col-span-12 text-gray-700 font-bold mb-2" for="windowSideB">
                                b (см):
                                <input
                                    id="windowSideB"
                                    v-model.number="windowSideB"
                                    type="number"
                                    step="0.1"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                            </label>
                            <label class="block col-span-12 text-gray-700 font-bold mb-2" for="windowSideC">
                                c (см):
                                <input
                                    id="windowSideC"
                                    v-model.number="windowSideC"
                                    type="number"
                                    step="0.1"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                            </label>
                            <label class="block col-span-12 text-gray-700 font-bold mb-2" for="windowSideD">
                                d (см):
                                <input
                                    id="windowSideD"
                                    :value="windowSideD"
                                    type="number"
                                    step="0.1"
                                    disabled
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                            </label>
                        </div>
                        <img src="@/assets/images/scheme.png" class="col-span-6">
                    </template>

                    <template v-if="currentTab === 'tab_4'">
                        <label class="block col-span-12 text-gray-700 font-bold mb-2" for="profileType">
                            Выбор профиля
                            <select
                                id="profileType"
                                v-model="profileType"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                        <label class="block col-span-12 text-gray-700 font-bold mb-2" for="windowColor">
                            Цвет профиля
                            <select
                                id="windowColor"
                                v-model="windowColor"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                <option
                                    v-for="item in windowColors"
                                    :key="item"
                                    :value="item"
                                    >
                                    {{ item }}
                                </option>
                            </select>
                        </label>
                        <label class="block col-span-12 text-gray-700 font-bold mb-2" for="reinforcementType">
                            Выбор армирования
                            <select
                                id="reinforcementType"
                                v-model="reinforcementType"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                <option
                                    v-for="item in reinforcementTypes"
                                    :key="item"
                                    :value="item"
                                    >
                                    {{ item }}
                                </option>
                            </select>
                        </label>
                        <p class="col-span-12 tetx-bols">
                            Максимально допустимый прогиб, мм: {{ ((impostLength/100)/200)*1000  }}
                        </p>
                        <p class="col-span-12 tetx-bols">
                            Расчётный прогиб, мм:
                        </p>
                    </template>
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
                'tab_1': '1',
                'tab_2': '2',
                'tab_3': '3',
                'tab_4': '4'
            },
            currentTab: 'tab_1',

            //tab_1
            windRegions: ['Ia', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
            windRegion: 'Ia',
            terrainTypes: ['A', 'B', 'C'],
            terrainType: 'B',
            insideAirTemperature: 20,
            outsideAirTemperature: 15,
            instalationAirTemperature: 15,

            //tab_2
            buildingHeight: 0,
            buildingWidth: 0,
            buildingLength: 30,
            windSides: ['Наветренная сторона', 'Подветренная сторона', 'Боковая стена'],
            windSide: 'Наветренная сторона',
            buildingSideToWindowLength: 4,

            //tab_3
            impostLength: 150,
            windowSideA: 70,
            windowSideB: 70,
            windowSideC: 0,

            //tab_4
            profileTypes: ['T78_AERO', 'T80_AERO', 'T78_SUPER_AERO', 'T80_SUPER_AERO', 'Т78_ACLASS', 'Т86_60_4', 'Т86_70_6'],
            profileType: 'T78_AERO',
            reinforcementType: '35*20*1,5(труба)',
            windowColors: ['Белый', 'Цветной'],
            windowColor: 'Белый',
        }
    },
    computed: {
        windowSideD(){
            return this.impostLength - this.windowSideC;
        },
        reinforcementTypes(){
            return  ['Т86_60_4', 'Т86_70_6'].includes(this.profileType) ?  ['35*20*2', '35*28*2'] : ['35*20*1,5(труба)', '35*20*2(труба)', '35*20*1,5', '35*20*2'];
        }
    },
    methods: {
        onProfileTypeChange(){
            this.reinforcementType = this.reinforcementTypes[0];
        }
    },
    created(){

    },
    mounted() {

    }
}
</script>
