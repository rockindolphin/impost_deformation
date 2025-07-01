import { defineStore } from 'pinia';
import { specsData } from '@/specsData.js';
import i18n from '@/i18n';

let $t = i18n.global.t;

export const useFormStore = defineStore('form', {
    state: () => ({
        //константы
        EP: 3400000000, //Модули упругости (ПВХ, Па) [[F230]]
        ES: 210000000000, //Модули упругости (Материала  вкладыша, Па) [[F231]]
        CSA: 3400000, //Площади поперечного сечения (Константа,принимаемая) [[F257]]
        MRI: 0.00001, //Коэффициенты линейного температурного расширения (Материал усилительного вкладыша,К-1) [[F264]]
        AP: 0.00008, // Коэффициенты линейного температурного расширения (Материал ПВХ, К-1) [[F265]]
        R0: 0.76, //Термическое сопротивление профиля импоста оконной конструкции,Вт/(м²∙℃) [[F269]]
        AH: 23, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F273]]
        AB: 8, //Коэффициенты теплоотдачи и тепловосприятия, Вт/(м²∙℃) [[F274]]
        YC: 1.4, //Коэффициент надежности по нагрузке для основной и пиковой ветровых нагрузок [[[F224]]]

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
        windSides: [
            'windward_side',
            'leeward_side',
            'side_wall'
        ],
        windSide: 'windward_side', //Сторона [[D8]]
        Wgap: 5, //Расстояние от края наветренной стены до окна [[E11]]

        //Шаг 3
        L: 180, //Длина импоста L (см) [[B13]]
        a: 109, //Рассчитываемый элемент a [[B14]]
        b: 100, //Рассчитываемый элемент b [[B15]]
        c: 0, //Рассчитываемый элемент c [[B16]]

        //Шаг 4
        profileTypes: {
            'T78_AERO': {
                impostWidth: 0.06, //Ширина профиля импоста,м [[F283]]
                tk: 0.78, //Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле, [[R50, R53]]
                te: 1.08, // Безразмерные коэффициенты, учитывающие неоднородность температурного поля в ПВХ профиле [[Q50, Q53]]
                kR: 1, // Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [[F276]]
                sku: '10003078' // артикул
            },
            'T80_AERO': {
                impostWidth: 0.06,
                tk: 0.78,
                te: 1.08,
                kR: 1,
                sku: '10003080'
            },
            'T78_SUPER_AERO': {
                impostWidth: 0.07,
                tk: 0.8,
                te: 1.11,
                kR: 1,
                sku: '10603078'
            },
            'T80_SUPER_AERO': {
                impostWidth: 0.07,
                tk: 0.8,
                te: 1.11,
                kR: 1,
                sku: '10603080'
            },
            'T78_ACLASS': {
                impostWidth: 0.06,
                tk: 0.78,
                te: 1.08,
                kR: 2,
                sku: '11103078'
            },
            'T78_ACLASS_L68': {
                impostWidth: 0.06,
                tk: 0.78,
                te: 1.08,
                kR: 2,
                sku: '11103078'
            },
            'T86_60_4': {
                impostWidth: 0.06,
                tk: 0.82,
                te: 1.2,
                kR: 0.5,
                sku: '10203086'
            },
            'T86_70_6': {
                impostWidth: 0.07,
                tk: 0.85,
                te: 1.32,
                kR: 1.25,
                sku: '10403086'
            },
            'GLIDE': {
                impostWidth: 0.031,
                tk: 0.78,
                te: 1.08,
                kR: 1,
                sku: '10802065'
            }
        },
        profileType: 'T80_SUPER_AERO', //Профильная система [[F20]]
        profileColors: {
            white: {
                p: 0.3 //Коэффициент
            },
            colored: {
                p: 0.25
            }
        },
        profileColor: 'white', //Цвет профиля [[F21]]
        reinTypes: {
            rt_35x20x1_5_pipe: {
                sku: '41108020'
            },
            rt_35x20x2_pipe: {
                sku: '40308020'
            },
            rt_35x20x1_5: {
                sku: '40108020'
            },
            rt_35x20x2: {
                sku: '40408007'
            },
            rt_35x28x1_5: {
                sku: '40108028'
            },
            rt_35x28x2: {
                sku: '40408028'
            },
            rt_35x28x1_5_pipe: {
                sku: '41108028'
            },
            rt_35x28x2_pipe: {
                sku: '40308028'
            },
            rt_26x19x1_5: {//GLIDE
                sku: '40108026'
            },
            rt_26x19x2: {//GLIDE
                sku: '40808026'
            },

            //в расчетах не используются но зачем-то выводятся в итоговых таблицах
            rt_50x25x2_pipe: {
                sku: '40108025'
            },
            rt_100x6: {
                sku: '40108100'
            },
            rt_80x13x2: {
                sku: '40108013'
            },
            rt_50x40: {
                sku: '40108050'
            }
        },
        reinType: 'rt_35x20x2_pipe', //Армирование импоста [[F22]]
        reinType_60_70: 'rt_35x20x2_pipe', // Армирование для коробок 60-4 и 70-6  [[F23]]
        reinType_L68: 'rt_35x28x1_5', // Армирование для коробок L68
        fakeImpostProfileTypes: {
            AERO_Z60: {
                sku: '10002060'
            },
            SUPER_AERO_Z60: {
                sku: '10602060'
            },
            SUPER_AERO_Z77: {
                sku: '10602077'
            },
            ACLASS_Z60: {
                sku: '11102060'
            },
            ACLASS_T118: {
                sku: '10302118'
            },
            ACLASS_Z118: {
                sku: '10302060'
            },
            ACLASS_T94: {
                sku: '10302094'
            },
            ACLASS_Z94: {
                sku: '10302074'
            },
            Z_60_4: {
                sku: '10202060'
            },
            Z_70_6: {
                sku: '10402060'
            },
            T118_70_6: {
                sku: '10702118'
            }
        },
        fakeImpostProfileType: 'SUPER_AERO_Z60',
        fakeImpostReinTypes: {
            rt_35x28x7x1_5: {
                sku: '40108007'
            },
            rt_35x28x7x2: {
                sku: '40408007'
            },
            rt_35x28x1_5: {
                sku: '40108028'
            },
            rt_35x28x2: {
                sku: '40408028'
            },
            rt_40x50x2_pipe: {
                sku: '40108050'
            },
            //эти 2 в расчетах не используются но зачем-то выводятся в итоговых таблицах
            rt_20x26x13: {
                sku: '41108026'
            },
            rt_50x15x2: {
                sku: '40408050'
            }
        },
        fakeImpostReinType: 'rt_35x28x7x1_5',
        views: {
            impost: {

            },
            pilyastr: {
                sku: '10105063'
            },
            connective3: {
                sku: {
                    '60': '10105003',
                    '70': '10405017'
                }
            },
            universal: {
                sku: '10105024'
            },
            connective38: {
                sku:{
                    '60': '10105038',
                    '70': '10405038',
                }
            },
            connective65: {
                sku: {
                    '60': '10105065',
                    '70': '10405065',
                }
            },
            fake_impost: {
                sku: {
                    '60': '10103062',
                    '62': '10103034',
                    '70': '10402064'
                }
            }
        },
        boxes: {
            L60_AERO: {
                sku: '10001060'
            },
            L60_SUPER_AERO: {
                sku: '10601060'
            },
            L60_ACLASS: {
                sku: '11101060'
            },
            L64_60_4: {
                sku: '10201064'
            },
            L64_70_6: {
                sku: '10401064'
            },
            L68_ACLASS: {
                sku: '11101068'
            }
        },
        selectedViewKey: null, //ключ выбранного варианта
        printUuid: Math.floor(100000 + Math.random() * 900000) //номер расчета  Math.floor(100000 + Math.random() * 900000)
    }),
    getters: {
        isVisible(state){
            return {
                Wgap: state.windSide === 'side_wall',
                reinType_60_70: ['T86_60_4', 'T86_70_6'].includes(state.profileType),
                reinType_L68: ['T78_ACLASS_L68'].includes(state.profileType)
            }
        },
        boxByProfileType(state){
            switch (state.profileType) {
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
        d(state){ //Рассчитываемый элемент d [[B17]]
            return state.L - state.c;
        },
        selectedProfileParams(state){// параметры выбранного профиля
            return state.profileTypes[state.profileType];
        },
        selectedView(state){
            return this.resultViews.find( item => item.key === state.selectedViewKey);
        },
        reinTypesOptions(state){// Тип армирования в зависимости от типа профиля
            if( ['T86_60_4', 'T86_70_6'].includes(state.profileType) ){
                return ['rt_35x28x1_5', 'rt_35x28x2', 'rt_35x28x1_5_pipe', 'rt_35x28x2_pipe'];
            }else if( ['GLIDE'].includes(state.profileType) ){
                return ['rt_26x19x1_5', 'rt_26x19x2'];
            }else{//для всех остальных
                return ['rt_35x20x1_5_pipe', 'rt_35x20x2_pipe', 'rt_35x20x1_5', 'rt_35x20x2'];
            }
        },
        reinTypes_60_70_Options(state){
            return ['rt_35x20x1_5_pipe', 'rt_35x20x2_pipe', 'rt_35x20x1_5', 'rt_35x20x2'];
        },
        reinTypes_L68_Options(state){
            return ['rt_35x28x1_5', 'rt_35x28x2', 'rt_35x28x1_5_pipe', 'rt_35x28x2_pipe'];
        },
        fakeImpostProfileTypesOptions(state){
            if( ['T78_AERO', 'T80_AERO'].includes(state.profileType) ){
                return ['AERO_Z60'];
            }else if( ['T78_SUPER_AERO', 'T80_SUPER_AERO'].includes(state.profileType) ){
                return ['SUPER_AERO_Z60', 'SUPER_AERO_Z77'];
            }else if( ['T78_ACLASS', 'T78_ACLASS_L68'].includes(state.profileType) ){
                return ['ACLASS_Z60', 'ACLASS_T118', 'ACLASS_Z118', 'ACLASS_T94', 'ACLASS_Z94'];
            }else if( ['T86_60_4'].includes(state.profileType) ){
                return ['Z_60_4'];
            }else if( ['T86_70_6'].includes(state.profileType) ){
                return ['Z_70_6', 'T118_70_6'];
            }else{
                return [];
            }
        },
        fakeImpostReinTypesOptions(state){
            if( ['ACLASS_T118', 'ACLASS_Z118', 'T118_70_6'].includes(state.fakeImpostProfileType) ){
                return ['rt_40x50x2_pipe'];
            }else{//для всех остальных
                return ['rt_35x28x7x1_5', 'rt_35x28x7x2', 'rt_35x28x1_5', 'rt_35x28x2'];
            }
        },
        maxСurve(state){//Максимально допустимый прогиб, мм [[D25]]
            return ((state.L/100)/200)*1000;
        },
        viewSubSize(state){
            if( ['T78_AERO', 'T80_AERO', 'T78_ACLASS', 'T78_ACLASS_L68', 'T86_60_4'].includes(state.profileType) ){
                return  60;
            }
            if( ['T78_SUPER_AERO', 'T80_SUPER_AERO', 'T86_70_6' ].includes(state.profileType) ){
                return 70;
            }
        },
        fakeImpostSubSize(state){
            if( ['AERO_Z60', 'ACLASS_Z60', 'Z_60_4'].includes(state.fakeImpostProfileType) ){
                return 62;
            }
            if( ['ACLASS_T118', 'ACLASS_Z118', 'ACLASS_T94', 'ACLASS_Z94'].includes(state.fakeImpostProfileType) ){
                return 60;
            }
            if( ['SUPER_AERO_Z60', 'SUPER_AERO_Z77', 'Z_70_6', 'T118_70_6'].includes(state.fakeImpostProfileType) ){
                return 70;
            }
        },
        resultViews(state){// варианты расчетов в зависимости от типа профиля
            let resp = [
                {
                    key: 'impost',
                    title: $t('views.impost'),
                    result: this.computeEstimatedDeflection('impost'),
                    tables: this.getResultTables('impost')
                },
                {
                    key: 'pilyastr',
                    title: $t('views.pilyastr'),
                    result: this.computeEstimatedDeflection('pilyastr'),
                    tables: this.getResultTables('pilyastr')
                }
            ];
            if( state.profileType !== 'GLIDE' ){
                resp = [
                    ...resp,
                    ...[
                        {
                            key: 'connective3',
                            title: `${$t('views.connective3')}/${this.viewSubSize}`,
                            result: this.computeEstimatedDeflection('connective3'),
                            tables: this.getResultTables('connective3')
                        },
                        {
                            key: 'universal',
                            title: $t('views.universal'),
                            result: this.computeEstimatedDeflection('universal'),
                            tables: this.getResultTables('universal')
                        },
                        {
                            key: 'connective38',
                            title: `${$t('views.connective38')}/${this.viewSubSize}`,
                            result: this.computeEstimatedDeflection('connective38'),
                            tables: this.getResultTables('connective38')
                        },
                        {
                            key: 'connective65',
                            title: `${$t('views.connective65')}/${this.viewSubSize}`,
                            result: this.computeEstimatedDeflection('connective65'),
                            tables: this.getResultTables('connective65')
                        },
                        {
                            key: 'fake_impost',
                            title: $t('views.fake_impost'),
                            result: this.computeEstimatedDeflection('fake_impost'),
                            tables: this.getResultTables('fake_impost')
                        }
                    ]
                ];
            }
            return resp;
        },
        DZE(state){// Коэффициент пульсации давления ветра [[F214]]
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
            rowNum = 0,
            colNum = 0,
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
            if( state.terrainType === 'A' ){ colNum = 0; }
            if( state.terrainType === 'B' ){ colNum = 1; }
            if( state.terrainType === 'C' ){ colNum = 2; }
            return scheme[rowNum][colNum];
        },
        ZE(state){//Эквивалентная высота  [[F201]]
            if (state.Bh <= state.Bw) {
                return state.Bh;
            } else if (state.Bh < state.Bw && state.Bh <= 2*state.Bw) {
                if ((state.Bh - state.Bw) <= state.Wh) {
                    return state.Bh;
                } else {
                    return state.Bw;
                }
            } else {
                if ((state.Bh - state.Bw) <= state.Wh) {
                    return state.Bh;
                } else if (state.Wh > 0 && state.Wh <= state.Bw) {
                    return state.Bw;
                } else {
                    return state.Wh;
                }
            }
        },
        V(state){// Коэффициент пространственной корреляции пульсации давления ветра [[F215]]
            let scheme = [
                [   0.95,   0.92,   0.88,   0.83,   0.76,   0.67,   0.56  ],
                [   0.89,   0.87,   0.84,   0.8,    0.73,   0.65,   0.54  ],
                [   0.85,   0.84,   0.81,   0.77,   0.71,   0.64,   0.53  ],
                [   0.8,    0.78,   0.76,   0.73,   0.68,   0.61,   0.51  ],
                [   0.72,   0.72,   0.7,    0.67,   0.63,   0.57,   0.48  ],
                [   0.63,   0.63,   0.61,   0.59,   0.56,   0.51,   0.44  ],
                [   0.53,   0.53,   0.52,   0.5,    0.47,   0.44,   0.38  ]
            ],
            rowNum = 0,
            colNum = 0,
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
                if (state.Bw > range.min && state.Bw <= range.max){
                    rowNum = range.value;
                };
            }
            for (let range of colRanges) {
                if (state.Bl >= range.min && state.Bl <= range.max){
                    colNum = range.value;
                };
            }
            return scheme[rowNum][colNum];
        },
        KZE(state){// Коэффициент учитывающий изменение ветрового давления k(ze) [[F202]]
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
            rowNum = 0,
            colNum = 0,
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
            if( state.terrainType === 'A' ){ colNum = 0; }
            if( state.terrainType === 'B' ){ colNum = 1; }
            if( state.terrainType === 'C' ){ colNum = 2; }
            return scheme[rowNum][colNum];
        },
        CZE(state){// Аэродинамический   коэфф [[F203]]
            let e = Math.min(state.Bw, state.Bl), //[[AB59]]
                e5 = e / 5;
            if (state.windSide === 'windward_side'){ return 0.8; }
            if (state.windSide === 'leeward_side'){ return -0.5; }
            if (state.windSide === 'side_wall'){
                if (state.Wgap <= e5){ return -1; }
                if (state.Wgap > e5 && state.Wgap <= e){ return -0.8; }
                if (state.Wgap > e){ return -0.5; }
            }
        },
        K0(state){//Начальная кривизна оси импоста оконной конструкции, м-1 [[F285]]
            let IW = this.selectedProfileParams.impostWidth, //[[F283]]
                tk = this.selectedProfileParams.tk;// [[F281]]
            return this.AP * ((state.Tv - state.Tn)/IW)*(state.R0/((1/state.AB)+state.R0+(1/state.AH))) * tk;
        },
        W0(state){
            return state.windRegions[state.windRegion].w0; // Нормативное значение ветрового давления, Па [[F196]]
        },
        Wm(state){
            return this.W0*this.KZE*this.CZE; // Нормативное значение средней составляющей основной ветровой нагрузки Wm [[F197]]
        },
        Wp(state){
            return this.Wm*this.DZE*this.V; // Нормативное значение пульсационной составляющей основной ветровой нагрузки Wp [[F216]]
        }
    },
    actions: {
        onProfileTypeChange(){// при смене типа профиля, меняем Тип армирования на первый из списка доступных
            this.reinType = this.reinTypesOptions[0];
            this.fakeImpostProfileType = this.fakeImpostProfileTypesOptions[0] || null;
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
                qw = (this.Wm + this.Wp)*this.YC, //Нормативное значение пиковой ветровой нагрузки на оконную конструкцию, Па. [[F223]]
                te = this.selectedProfileParams.te, //[[F280]]
                kR = this.selectedProfileParams.kR, //Отношение количества рядов воздушных камер в наружной части попереченого сечения ПВХ профиля к количеству рядов воздушных камер во внутренней части поперечного сечения ПВХ профиля [[F276]]
                P = this.profileColors[this.profileColor].p, // [[F244]]
                EP = this.EP,
                ES = this.ES,
                CSA = this.CSA,
                MRI = this.MRI,
                AP = this.AP,
                R0 = this.R0,
                AH = this.AH,
                AB = this.AB,

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
            return {
                qw: qw,
                yellow: yellow,
                orange: orange,
                cyan: cyan,
                purple: purple,
                green: green,
                tm: tm,
                G: G,
                H2: H2,
                H1: H1,
                ft: ft,
                fw: fw,
                value: (fw+ft)*1000
            };
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
                    $t('lbls.profile'),
                    $t('lbls.sku')
                ],
                tbody: []
            };

            if( ['impost', 'pilyastr'].includes(specKey) ){
                let prefix = this.profileType === 'GLIDE' ? $t('lbls.sashes') : $t('views.impost'),
                    profileI18n = this.profileType === 'T78_ACLASS_L68' ? $t(`profileTypes.T78_ACLASS`) : $t(`profileTypes.${this.profileType}`);
                table.tbody.push([
                    `${prefix} ${profileI18n}`,
                    this.selectedProfileParams.sku
                ]);
                if( specKey === 'pilyastr' ){
                    table.tbody.push([
                        $t('pilyastr_63'),
                        this.views[specKey].sku
                    ]);
                }
            }
            if( ['fake_impost'].includes(specKey) ){
                let doorProfiles = [
                    'ACLASS_T118',
                    'ACLASS_Z118',
                    'ACLASS_T94',
                    'ACLASS_Z94',
                    'T118_70_6'
                ],
                prefix = doorProfiles.includes(this.fakeImpostProfileType) ? $t('lbls.door_sash') : $t('lbls.sash');

                table.tbody.push([
                    `${prefix} ${$t(`fakeImpostProfileTypes.${this.fakeImpostProfileType}`)}`,
                    this.fakeImpostProfileTypes[this.fakeImpostProfileType].sku
                ]);
                table.tbody.push([
                    `${$t(`views.${specKey}`)} ${this.fakeImpostSubSize}`,
                    this.views[specKey].sku[this.fakeImpostSubSize]
                ]);
            }
            if( ['connective3', 'connective38', 'connective65', 'universal'].includes(specKey) ){
                if( specKey === 'universal' ){
                    table.tbody.push([
                        $t(`views.${specKey}`),
                        this.views[specKey].sku
                    ]);
                }else{
                    table.tbody.push([
                        `${$t(`views.${specKey}`)}/${this.viewSubSize}`,
                        this.views[specKey].sku[this.viewSubSize]
                    ]);
                }
                table.tbody.push([
                    `${$t('lbls.box')} ${$t(`boxes.${this.boxByProfileType}`)}`,
                    this.boxes[this.boxByProfileType].sku
                ]);
            }
            return table;
        },
        getReinTable(specKey){
            let table = {
                thead: [
                    $t('lbls.rein_profile'),
                    $t('lbls.sku')
                ],
                tbody: []
            };
            if( ['impost', 'pilyastr'].includes(specKey) ){
                table.tbody.push([
                    $t(`reinTypes.${this.reinType}`),
                    this.reinTypes[this.reinType].sku
                ]);
                if( specKey === 'pilyastr' ){
                    table.tbody.push([
                        $t(`reinTypes.rt_50x25x2_pipe`),
                        this.reinTypes['rt_50x25x2_pipe'].sku
                    ]);
                }
            }
            if( ['fake_impost'].includes(specKey) ){
                table.tbody.push([
                    $t(`fakeImpostReinTypes.${this.fakeImpostReinType}`),
                    this.fakeImpostReinTypes[this.fakeImpostReinType].sku
                ]);
                let fi_extra_rt = this.fakeImpostSubSize === 70 ? 'rt_50x15x2' : 'rt_20x26x13';
                table.tbody.push([
                    $t(`fakeImpostReinTypes.${fi_extra_rt}`),
                    this.fakeImpostReinTypes[fi_extra_rt].sku
                ]);
            }
            if( ['connective38'].includes(specKey) ){
                table.tbody.push([
                    $t(`reinTypes.rt_80x13x2`),
                    this.reinTypes['rt_80x13x2'].sku
                ]);
            }
            if( ['connective65'].includes(specKey) ){
                table.tbody.push([
                    $t(`reinTypes.rt_50x40`),
                    this.reinTypes['rt_50x40'].sku
                ]);
            }
            if( ['universal'].includes(specKey) ){
                table.tbody.push([
                    $t(`reinTypes.rt_100x6`),
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
                    $t(`reinTypes.${rtKey}`),
                    this.reinTypes[rtKey].sku
                ]);
            }
            return table;
        },
        setParamsFromRoute(params){
            let selects = {
                windRegion: Object.keys(this.windRegions),
                terrainType: this.terrainTypes,
                windSide: this.windSides,
                profileType: Object.keys(this.profileTypes),
                profileColor: Object.keys(this.profileColors),
                fakeImpostProfileType: Object.keys(this.fakeImpostProfileTypes),
                reinType: Object.keys(this.reinTypes),
                reinType_60_70: Object.keys(this.reinTypes),
                reinType_L68: Object.keys(this.reinTypes),
                fakeImpostReinType: Object.keys(this.fakeImpostReinTypes),
                selectedViewKey: Object.keys(this.views)
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
        }
    }
});