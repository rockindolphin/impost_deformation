<template>
    <div class="wrapper wrapper--print" v-if="form.selectedView">
        <section class="section">
            <div class="flex items-center">
                <h1 class="text--brand text--sz-12 mr-4">
                    Расчет прогибов оконных импостов при совместном действии ветровой нагрузки и температурного климатического воздействия.
                </h1>
                <icon-logo />
            </div>
            <small class="text--gray text--sz-8">
                согласно  СП 20.13330.2016 "Нагрузки и воздействия" и  СП 538.1325800.2024 "Конструкции оконные и балконные"
            </small>
            <p class="text--sz-10">
                Расчёт произведён в программе компании ООО "Брусбокс" версия 1.1. (для зданий высотой до 75 м.)
            </p>
            <h4 class="uppercase text--sz-12">
                Исходные данные
            </h4>
            <div class="grid gap-7 grid-cols-12 items-start">
                <div class="col-span-6">
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td>
                                    {{ $t('windRegion') }}
                                </td>
                                <td>
                                    {{ form.windRegion }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Bh') }}
                                </td>
                                <td>
                                    {{ form.Bh }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Bw') }}
                                </td>
                                <td>
                                    {{ form.Bw }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Wh') }}
                                </td>
                                <td>
                                    {{ form.Wh }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('terrainType') }}
                                </td>
                                <td>
                                    {{ form.terrainType }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('L') }}
                                </td>
                                <td>
                                    {{ form.L }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('a') }}
                                </td>
                                <td>
                                    {{ form.a }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('b') }}
                                </td>
                                <td>
                                    {{ form.b }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('c') }}
                                </td>
                                <td>
                                    {{ form.c }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('d') }}
                                </td>
                                <td>
                                    {{ form.d.toFixed(2) }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    {{ form.windSides[this.form.windSide].i18n }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Bl') }}
                                </td>
                                <td>
                                    {{ form.Bl }}
                                </td>
                            </tr>
                            <tr v-if="form.isVisible.Wgap">
                                <td>
                                    {{ $t('Wgap') }}
                                </td>
                                <td>
                                    {{ form.Wgap }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-span-6">
                    <el-window />
                </div>
                <div class="col-span-8">
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td>
                                    <!--
                                        {{ $t('Tn') }}
                                    -->
                                    Расчетная наружная температура воздуха (температура воздуха наиболее холодной пятидневки),˚С
                                </td>
                                <td class="whitespace-nowrap">
                                    Tn = {{ form.Tn }}
                                </td>
                                <td>
                                    Принимается по СП 131.13331
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Tref') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Tref = {{ form.Tref }}
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('Tv') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Тв = {{ form.Tv }}
                                </td>
                                <td>
                                    Рекомендуемая (средняя) по ГОСТ 30494 ( 21˚С )
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-span-6">
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td>
                                    {{ $t('profileType') }}
                                </td>
                                <td>
                                    {{ form.profileType }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('profileColor') }}
                                </td>
                                <td>
                                    {{ form.profileColors[form.profileColor].i18n }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('reinType') }}
                                </td>
                                <td>
                                    {{ form.reinTypes[form.reinType].i18n }}
                                </td>
                            </tr>
                            <tr v-if="form.isVisible.reinType_60_70">
                                <td>
                                    {{ $t('reinType_60_70') }}
                                </td>
                                <td>
                                    {{ form.reinTypes[form.reinType_60_70].i18n }}
                                </td>
                            </tr>
                            <tr v-if="form.isVisible.reinType_L68">
                                <td>
                                    {{ $t('reinType_L68') }}
                                </td>
                                <td>
                                    {{ form.reinTypes[form.reinType_L68].i18n }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 class="uppercase text--sz-12">
                        Исполнение
                    </h4>
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td class="text--sz-12 font-bold">
                                    {{ $t('maxСurve')  }}
                                </td>
                                <td class="text--sz-12 text--brand">
                                    {{ form.maxСurve.toFixed(2) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="form__table"
                        v-for="(table, tbl_index) in form.selectedView.tables"
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
                <div class="col-span-6">
                    <div class="wrapper--result">
                        <fake-impost
                            v-if="form.selectedViewKey === 'fake_impost'"
                            :pt="form.fakeImpostProfileType"
                            :rt="form.fakeImpostReinType"
                            >
                        </fake-impost>
                        <component
                            v-else
                            v-bind:is="`scheme_-${form.profileType}`"
                            :view="form.selectedViewKey"
                            :rt="form.getReinType(form.selectedViewKey)"
                            >
                        </component>
                        <table class="form__table">
                            <tbody>
                                <tr>
                                    <td class="text--sz-12 font-bold">
                                        {{ $t('estimate_deflection') }}:
                                    </td>
                                    <td class="text--sz-12 text--brand">
                                        {{ form.selectedView.result.value.toFixed(2) }}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="text-left text--brand">
                                        <span v-if="form.selectedView.result.value <= form.maxСurve">
                                            {{ $t('result_valid') }}
                                        </span>
                                        <span v-else>
                                            {{ $t('result_invalid') }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-span-12">
                    <picture class="flex justify-end">
                        <source srcset="../assets/images/print/stamp.webp" type="image/webp">
                        <source srcset="../assets/images/print/stamp.png" type="image/png">
                        <img
                            src="@/assets/images/print/stamp.png"
                            alt="brusbox"
                            >
                    </picture>
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td>
                                    Расчет №
                                </td>
                                <td>
                                    Дата:
                                </td>
                                <td>
                                    Лист 1 из 3
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section class="section">
            <p class="text--sz-12 mb-0">
                1. Нормативное значение основной ветровой нагрузки <span class="font-bold">W</span>
            </p>
            <small class="text--sz-8 text--gray">
                (в соответствии с СП 20.13330.2016)
            </small>
            <div class="wrapper text--sz-14 font-bold">
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <mi>w</mi>
                        <mo>=</mo>
                        <msub><mi>w</mi><mi>m</mi></msub>
                        <mo>+</mo>
                        <msub><mi>w</mi><mi>p</mi></msub>
                    </mrow>
                </math>
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <mi>w</mi>
                        <mo>=</mo>
                        <mo>{{ (form.Wm + form.Wp).toFixed(5) }}</mo>
                    </mrow>
                </math>
            </div>
            <p class="font-bold">
                Нормативное значение средней составляющей основной ветровой нагрузки Wm
            </p>
            <div class="wrapper text--sz-14 font-bold">
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>w</mi><mi>m</mi></msub>
                        <mo>=</mo>
                        <msub><mi>w</mi><mn>0</mn></msub>
                        <mi>k</mi>
                        <mo>(</mo>
                        <msub><mi>z</mi><mi>e</mi></msub>
                        <mo>)</mo>
                        <mi>C</mi>
                    </mrow>
                </math>
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>w</mi><mi>m</mi></msub>
                        <mo>=</mo>
                        <mo>{{ form.Wm.toFixed(1) }}</mo>
                        <mo>пункт 11.1.3</mo>
                    </mrow>
                </math>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>
                            {{ $t('windRegion') }}
                        </td>
                        <td>
                            {{ form.windRegion }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Нормативное значение ветрового давления, Па
                        </td>
                        <td>
                            {{ form.W0 }}
                        </td>
                        <td>
                            по таблице 11.1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('terrainType') }}
                        </td>
                        <td>
                            {{ form.terrainType }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Эквивалентная высота, м
                        </td>
                        <td>
                            ze = {{ form.ZE }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Коэффициент, учитывающий изменение ветрового давления для высоты ze
                        </td>
                        <td>
                            k(ze) = {{ form.KZE }}
                        </td>
                        <td>
                            по таблице 11.2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Аэродинамический   коэффициент
                        </td>
                        <td>
                            с = {{ form.CZE }}
                        </td>
                        <td>
                            по таблице В.2
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex flex-col align-center justify-center">
                <picture class="flex justify-center">
                    <source srcset="../assets/images/print/plan.webp" type="image/webp">
                    <source srcset="../assets/images/print/plan.png" type="image/png">
                    <img
                        src="@/assets/images/print/plan.png"
                        alt="plan"
                        >
                </picture>
                <div class="small text-sz-8 text--gray text-center">
                    Приложение B
                </div>
            </div>
            <p class="font-bold">
                Нормативное значение пульсационной составляющей основной ветровой нагрузки Wp
            </p>
            <div class="wrapper text--sz-14 font-bold">
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>w</mi><mi>p</mi></msub>
                        <mo>=</mo>
                        <msub><mi>w</mi><mi>m</mi></msub>
                        <mi>&zeta;</mi>
                        <mo>(</mo>
                        <msub><mi>z</mi><mi>e</mi></msub>
                        <mo>)</mo>
                        <mi>V</mi>
                    </mrow>
                </math>
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>w</mi><mi>p</mi></msub>
                        <mo>=</mo>
                        <mo>{{ form.Wp.toFixed(5) }}</mo>
                    </mrow>
                </math>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>
                            Коэффициент пульсации давления ветра
                        </td>
                        <td>
                            ζ(Ze) = {{ form.DZE.toFixed(2) }}
                        </td>
                        <td>
                            по таблице 11.4
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Коэффициент пространственной корреляции пульсации давления ветра
                        </td>
                        <td>
                            V= {{ form.V }}
                        </td>
                        <td>
                            по таблице 11.6
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="text--sz-12 mb-0">
                2.1 Расчёт прогиба оконного импоста от действия ветровой нагрузки
            </p>
            <small class="text--sz-8 text--gray">
                согласно приложению B по СП 538.1325800.2024
            </small>
            <div class="grid grid-cols-12">
                <div class="col-span-6">
                    <div class="wrapper text--sz-14 font-bold">
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mrow>
                                <msub><mi>f</mi><mi>w</mi></msub>
                                <mo>=</mo>

                                <mfrac>
                                <msub><mi>q</mi><mi>w</mi></msub>
                                <mrow>
                                    <msub><mi>E</mi><mi>S</mi></msub>
                                    <msub><mi>I</mi><mi>S</mi></msub>
                                    <mo>+</mo>
                                    <msub><mi>E</mi><mi>p</mi></msub>
                                    <msub><mi>I</mi><mi>p</mi></msub>
                                </mrow>
                                </mfrac>

                                <mo>&middot;</mo>

                                <mfrac>
                                <mrow>
                                    <msub><mi>b</mi><mn>1</mn></msub>
                                    <msup>
                                    <mrow>
                                        <mo>(</mo>
                                        <msup>
                                            <msub><mi>b</mi><mn>1</mn></msub>
                                            <mn>2</mn>
                                        </msup>
                                        <mo>&minus;</mo>
                                        <mn>5</mn>
                                        <msup><mi>L</mi><mn>2</mn></msup>
                                        <mo>)</mo>
                                    </mrow>
                                    <mn>2</mn>
                                    </msup>
                                    <mo>+</mo>
                                    <msub><mi>b</mi><mn>2</mn></msub>
                                    <msup>
                                    <mrow>
                                        <mo>(</mo>
                                        <msup>
                                            <msub><mi>b</mi><mn>2</mn></msub>
                                            <mn>2</mn>
                                        </msup>
                                        <mo>&minus;</mo>
                                        <mn>5</mn>
                                        <msup><mi>L</mi><mn>2</mn></msup>
                                        <mo>)</mo>
                                    </mrow>
                                    <mn>2</mn>
                                    </msup>
                                </mrow>
                                <mn>3840</mn>
                                </mfrac>

                            </mrow>
                        </math>
                    </div>
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    Главные моменты инерции
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Сечение профиля, м4
                                </td>
                                <td class="whitespace-nowrap">
                                    Ip = {{ form.selectedView.result.yellow.toFixed(12) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Сечение усилительного вкладыша, м4
                                </td>
                                <td class="whitespace-nowrap">
                                    Is = {{ form.selectedView.result.orange.toFixed(12) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    Модули упругости
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ПВХ, Па
                                </td>
                                <td class="whitespace-nowrap">
                                    Ep = {{ form.EP }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Материал  вкладыша, Па
                                </td>
                                <td class="whitespace-nowrap">
                                    Es = {{ form.ES }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Длина импоста, м
                                </td>
                                <td class="whitespace-nowrap">
                                    L = {{ (form.L/100).toFixed(2) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Параметры b1 и b2, м
                                </td>
                                <td class="whitespace-nowrap">
                                    <span class="block">
                                        b1 = {{ (form.a/100).toFixed(3) }}
                                    </span>
                                    <span class="block">
                                        b2 = {{ (form.b/100).toFixed(3) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-span-6">
                    <picture class="flex justify-center">
                        <source srcset="../assets/images/print/scheme.webp" type="image/webp">
                        <source srcset="../assets/images/print/scheme.png" type="image/png">
                        <img
                            src="@/assets/images/print/scheme.png"
                            alt="scheme"
                            >
                    </picture>
                </div>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>
                            Лист 2 из 3
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="section">
            <p class="text--sz-12">
                2.2 Расчёт прогиба оконного импоста от температурного климатического воздействия
            </p>
            <div class="wrapper text--sz-14 font-bold">
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>f</mi><mi>t</mi></msub>
                        <mo>=</mo>
                        <mfrac>
                        <mrow>
                            <msub><mi>K</mi><mi>0</mi></msub>
                            <msup><mi>L</mi><mn>2</mn></msup>
                            <mo>&middot;</mo>
                            <msub><mi>E</mi><mi>p</mi></msub>
                            <msub><mi>I</mi><mi>p</mi></msub>
                            <mo>&minus;</mo>
                            <mo>&delta;</mo>
                            <mo>(</mo>
                            <msub><mi>H</mi><mi>1</mi></msub>
                            <msup><mi>L</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <msub><mi>H</mi><mi>2</mi></msub>
                            <mo>(</mo>
                            <msup><mi>L</mi><mn>2</mn></msup>
                            <mo>&minus;</mo>
                            <mn>4</mn><msup><mi>p</mi><mn>2</mn></msup>
                            <mo>)</mo>
                            <mo>)</mo>
                        </mrow>
                        <mrow>
                            <mn>8</mn>
                            <mo>(</mo>
                            <msub><mi>E</mi><mi>S</mi></msub>
                            <msub><mi>I</mi><mi>S</mi></msub>
                            <mo>+</mo>
                            <msub><mi>E</mi><mi>p</mi></msub>
                            <msub><mi>I</mi><mi>p</mi></msub>
                            <mo>)</mo>
                        </mrow>
                        </mfrac>
                    </mrow>
                </math>
                <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                    <mrow>
                        <msub><mi>f</mi><mi>t</mi></msub>
                        <mo>=</mo>
                        <mo>{{ form.selectedView.result.ft.toFixed(9) }}</mo>
                    </mrow>
                </math>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>
                            Коэффициент
                        </td>
                        <td class="whitespace-nowrap">
                            p = {{ form.profileColors[form.profileColor].p }}
                        </td>
                        <td class="whitespace-nowrap">
                            согласно B.5.1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Расстояние между нейтральной осью ПВХ профиля и нейтральной осью усилительного вкладыша, м
                        </td>
                        <td class="whitespace-nowrap">
                            δ = {{ form.selectedView.result.cyan.toFixed(4) }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Продольные силы
                        </td>
                        <td class="whitespace-nowrap">
                            <span class="block">
                                H2 = {{ form.selectedView.result.H2.toFixed(6) }}
                            </span>
                            <span class="block">
                                H1 = {{ form.selectedView.result.H1.toFixed(6) }}
                            </span>
                        </td>
                        <td class="whitespace-nowrap">
                            согласно В.5.2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Коэффициент
                        </td>
                        <td class="whitespace-nowrap">
                            G= {{ form.selectedView.result.G.toFixed(21) }}
                        </td>
                        <td class="whitespace-nowrap">
                            согласно В.5.3
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="grid grid-cols-12">
                <div class="col-span-6">
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    Площади поперечного сечения
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ПВХ профиль, м2
                                </td>
                                <td class="whitespace-nowrap">
                                    Аp = {{ form.selectedView.result.purple.toFixed(6) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Усилительный вкладыш, м2
                                </td>
                                <td class="whitespace-nowrap">
                                    As = {{ form.selectedView.result.green.toFixed(6) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Константа, принимаемая
                                </td>
                                <td class="whitespace-nowrap">
                                    ξ = {{ form.CSA }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    Коэффициенты линейного температурного расширения
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Материал усилительного вкладыша,   К-1
                                </td>
                                <td class="whitespace-nowrap">
                                    <span class="block">
                                        as = {{ form.MRI }}
                                    </span>
                                    <span class="block">
                                        ap = {{ form.AP }}
                                    </span>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    Температура во внутренней камере ПВХ профиля, ℃
                                </td>
                                <td class="whitespace-nowrap">
                                    tm = {{ form.selectedView.result.tm.toFixed(9) }}
                                </td>
                                <td class="whitespace-nowrap">
                                    согласно В.5.2
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Термическое сопротивление профиля импоста оконной конструкции,Вт/(м²∙℃)
                                </td>
                                <td class="whitespace-nowrap">
                                    R0 = {{ form.R0 }}
                                </td>
                                <td>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-span-6">
                    <picture class="flex justify-center">
                        <source srcset="../assets/images/print/contour.webp" type="image/webp">
                        <source srcset="../assets/images/print/contour.png" type="image/png">
                        <img
                            src="@/assets/images/print/contour.png"
                            alt="contour"
                            >
                    </picture>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-6">
                    <table class="form__table">
                        <tbody>
                            <tr>
                                <td colspan="3" class="font-bold text-left pt-4 pb-2">
                                    Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃)
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="whitespace-nowrap">
                                    <span class="block">
                                        ан = {{ form.AH }}
                                    </span>
                                    <span class="block">
                                        ав = {{ form.AB }}
                                    </span>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля
                                </td>
                                <td class="whitespace-nowrap">
                                    kR = {{ form.selectedProfileParams.kR }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="font-bold text-left pt-4 pb-2">
                                    Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="whitespace-nowrap">
                                    <span class="block">
                                        tξ = {{ form.selectedProfileParams.te.toFixed(2) }}
                                    </span>
                                    <span class="block">
                                        tK = {{ form.selectedProfileParams.tk.toFixed(1) }}
                                    </span>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    Ширина профиля импоста, м
                                </td>
                                <td class="whitespace-nowrap">
                                    с = {{ form.selectedProfileParams.impostWidth }}
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Начальная кривизна оси импоста оконной конструкции, м-1
                                </td>
                                <td class="whitespace-nowrap">
                                    K0 = {{ form.K0.toFixed(11) }}
                                </td>
                                <td class="whitespace-nowrap">
                                    согласно В.5.5
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <picture class="flex justify-end">
                        <source srcset="../assets/images/print/stamp.webp" type="image/webp">
                        <source srcset="../assets/images/print/stamp.png" type="image/png">
                        <img
                            src="@/assets/images/print/stamp.png"
                            alt="brusbox"
                            >
                    </picture>
                </div>
                <div class="col-span-5">
                    <picture class="flex justify-center">
                        <source srcset="../assets/images/print/deflection.webp" type="image/webp">
                        <source srcset="../assets/images/print/deflection.png" type="image/png">
                        <img
                            src="@/assets/images/print/deflection.png"
                            alt="deflection"
                            >
                    </picture>
                </div>
                <div class="col-span-1 flex flex-col">
                    <span>
                        <span class="block">
                            Допустимый прогиб
                        </span>
                        <span class="font-bold">
                            <=L/200
                        </span>
                    </span>
                    <span class="font-bold my-auto">
                        8,25 мм
                    </span>
                </div>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>
                            Расчет №
                        </td>
                        <td>
                            Дата:
                        </td>
                        <td>
                            Лист 3 из 3
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>

    import { defineAsyncComponent } from 'vue';
    import { useFormStore } from '@/stores/formStore';
    import iconLogo from '@/components/icons/iconLogo.vue';
    import elWindow from '@/components/elWindow.vue';

    export default {
        name: 'elPrint',
        setup() {
            const form = useFormStore();
            return {
                form
            }
        },
        components: {
            iconLogo,
            elWindow,
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

            }
        },
        computed: {

        }
    }

</script>