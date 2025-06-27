<template>
    <div class="wrapper wrapper--print" v-if="form.selectedView">
        <section class="section">
            <div class="flex items-center">
                <h1 class="text--brand text--sz-12 mr-4">
                    {{ $t('form_title_full') }}
                </h1>
                <icon-logo />
            </div>
            <small class="text--gray text--sz-8">
                {{ $t('sp_20_sp_538') }}
            </small>
            <p class="text--sz-10">
                {{ $t('app_ver') }}
            </p>
            <h4 class="uppercase text--sz-12">
                {{ $t('data_source') }}
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
                                    {{ $t('d') }}
                                </td>
                                <td>
                                    {{ form.d.toFixed(2) }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="font-bold text-left pt-4 pb-2">
                                    {{ $t(`windSides.${form.windSide}`) }}
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
                                    {{ $t('Tn_full') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Tn = {{ form.Tn }}
                                </td>
                                <td>
                                    {{ $t('Tn_tippy') }}
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
                                    {{ $t('Tv_tippy') }}
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
                                    {{ $t(`profileColors.${form.profileColor}`) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 class="uppercase text--sz-12">
                        {{ $t('result_view') }}
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
                                    {{ $t('print_num') }} {{ form.printUuid }}
                                </td>
                                <td>
                                    {{ $t('date') }}: {{ currentDateTime }}
                                </td>
                                <td>
                                    {{ $t('page_num', {curr: 1, total: 3}) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section class="section">
            <p class="text--sz-12 mb-0">
                {{ $t('wind_load') }} <span class="font-bold">W</span>
            </p>
            <small class="text--sz-8 text--gray">
                {{ $t('sp_20') }}
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
                {{ $t('wm_label') }} Wm
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
                <div class="flex items-center justify-between">
                    <math xmlns="http://www.w3.org/1998/Math/MathML" class="block">
                        <mrow>
                            <msub><mi>w</mi><mi>m</mi></msub>
                            <mo>=</mo>
                            <mo>{{ form.Wm.toFixed(1) }}</mo>
                        </mrow>
                    </math>
                    <span class="font-normal text--sz-10">
                        {{ $t('section_1_11_3') }}
                    </span>
                </div>
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
                            {{ $t('w0_label') }}
                        </td>
                        <td>
                            {{ form.W0 }}
                        </td>
                        <td>
                            {{ $t('according_to_table') }} 11.1
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
                            {{ $t('ze_label') }}
                        </td>
                        <td>
                            ze = {{ form.ZE }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('kze_label') }} ze
                        </td>
                        <td>
                            k(ze) = {{ form.KZE }}
                        </td>
                        <td>
                            {{ $t('according_to_table') }} 11.2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('cze_label') }}
                        </td>
                        <td>
                            с = {{ form.CZE }}
                        </td>
                        <td>
                            {{ $t('according_to_table') }} В.2
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
                    {{ $t('appndx') }} B
                </div>
            </div>
            <p class="font-bold">
                {{ $t('wp_label') }} Wp
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
                            {{ $t('dze_label') }}
                        </td>
                        <td>
                            ζ(Ze) = {{ form.DZE.toFixed(2) }}
                        </td>
                        <td>
                            {{ $t('according_to_table') }} 11.4
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('v_label') }}
                        </td>
                        <td>
                            V= {{ form.V }}
                        </td>
                        <td>
                            {{ $t('according_to_table') }} 11.6
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="text--sz-12 mb-0">
                2.1 {{ $t('deflection_calc') }}
            </p>
            <small class="text--sz-8 text--gray">
                {{ $t('deflection_calc_note') }}
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
                                    {{ $t('main_moments_label') }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('yellow_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Ip = {{ form.selectedView.result.yellow.toFixed(12) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('orange_label') }}
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
                                    {{  $t('elast_mod_label') }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('ep_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Ep = {{ form.EP }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('es_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Es = {{ form.ES }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('L') }}, {{ $t('m') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    L = {{ (form.L/100).toFixed(2) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('params') }} b1 {{ $t('and') }} b2, {{ $t('m') }}
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
                            {{ $t('page_num', {curr: 2, total: 3}) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="section">
            <p class="text--sz-12">
                2.2 {{ $t('termal_deflection') }}
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
                            {{ $t('coeff') }}
                        </td>
                        <td class="whitespace-nowrap">
                            p = {{ form.profileColors[form.profileColor].p }}
                        </td>
                        <td class="whitespace-nowrap">
                            {{ $t('according_to') }} B.5.1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('delta_label') }}
                        </td>
                        <td class="whitespace-nowrap">
                            δ = {{ form.selectedView.result.cyan.toFixed(4) }}
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('longitudinal_forces') }}
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
                            {{ $t('according_to') }} В.5.2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{ $t('coeff') }}
                        </td>
                        <td class="whitespace-nowrap">
                            G= {{ form.selectedView.result.G.toFixed(21) }}
                        </td>
                        <td class="whitespace-nowrap">
                            {{ $t('according_to') }} В.5.3
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
                                    {{ $t('cross_sectional_areas') }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('purple_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    Аp = {{ form.selectedView.result.purple.toFixed(6) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('green_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    As = {{ form.selectedView.result.green.toFixed(6) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('csa_label') }}
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
                                    {{ $t('termal_coeffs') }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('mri_label') }}
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
                                    {{ $t('tm_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    tm = {{ form.selectedView.result.tm.toFixed(9) }}
                                </td>
                                <td class="whitespace-nowrap">
                                    {{ $t('according_to') }} В.5.2
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('r0_label') }}
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
                                    {{ $t('heat_transfer_coeffs') }}
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
                                    {{ $t('kr_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    kR = {{ form.selectedProfileParams.kR }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="font-bold text-left pt-4 pb-2">
                                    {{ $t('te_tk_label') }}
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
                                    {{ $t('impost_w_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    с = {{ form.selectedProfileParams.impostWidth }}
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{ $t('k0_label') }}
                                </td>
                                <td class="whitespace-nowrap">
                                    K0 = {{ form.K0.toFixed(11) }}
                                </td>
                                <td class="whitespace-nowrap">
                                    {{ $t('according_to') }} В.5.5
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
                <div class="col-span-6 flex items-center justify-end">
                    <div class="wrapper flex items-stretch justify-end">
                        <picture>
                            <source srcset="../assets/images/print/deflection.webp" type="image/webp">
                            <source srcset="../assets/images/print/deflection.png" type="image/png">
                            <img
                                src="@/assets/images/print/deflection.png"
                                alt="deflection"
                                >
                        </picture>
                        <div class="wrapper flex flex-col">
                            <span>
                                <span class="block">
                                    {{ $t('valid_curve') }}
                                </span>
                                <span class="font-bold">
                                    <=L/200
                                </span>
                            </span>
                            <span class="font-bold my-auto">
                                {{ form.maxСurve.toFixed(2) }} мм
                            </span>
                            <span class="opacity-0 pointer-events-none">
                                <span class="block">
                                    {{ $t('valid_curve') }}
                                </span>
                                <span class="font-bold">
                                    <=L/200
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <table class="form__table">
                <tbody>
                    <tr>
                        <td>
                            {{ $t('print_num') }} {{ form.printUuid }}
                        </td>
                        <td>
                            {{ $t('date') }}: {{ currentDateTime }}
                        </td>
                        <td>
                            {{ $t('page_num', {curr: 3, total: 3}) }}
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
            currentDateTime() {
                let now = new Date(),
                    day = String(now.getDate()).padStart(2, '0'),
                    month = String(now.getMonth() + 1).padStart(2, '0'), // Месяцы начинаются с 0
                    year = String(now.getFullYear()).slice(-2), // Последние две цифры года
                    hours = String(now.getHours()).padStart(2, '0'),
                    minutes = String(now.getMinutes()).padStart(2, '0');
                return `${day}.${month}.${year} ${hours}:${minutes}`;
            }
        }
    }

</script>