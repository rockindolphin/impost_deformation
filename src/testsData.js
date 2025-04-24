let tests = {
    common: {//статические параметры в рамках тестирования
        windRegion: 'II',
        terrainType: 'C',
        Tn: -20,
        Tref: 10,
        Tv: 21,
        Bh: 60,
        Bw: 47,
        Bl: 30,
        Wh: 50,
        windSide: 'windward_side',
        Wgap: 5,
        L: 180,
        a: 109,
        b: 100,
        c: 100,
    },
    dynamic: [//изменяемые параметры в рамках тестирования
        {
            profileType: 'T78_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {// значения на выходе
                impost: 13.46,
                pilyastr: 1.49,
                connective3: 8.76,
                universal: 1.23,
                connective38: 2.29,
                connective65: 4.73
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.81,
                pilyastr: 1.56,
                connective3: 9.13,
                universal: 1.26,
                connective38: 2.35,
                connective65: 5.06
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.08,
                pilyastr: 1.19,
                connective3: 7.35,
                universal: 1.21,
                connective38: 2.28,
                connective65: 4.31
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.37,
                pilyastr: 1.23,
                connective3: 7.66,
                universal: 1.24,
                connective38: 2.35,
                connective65: 4.61
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.37,
                pilyastr: 1.97,
                connective3: 9.57,
                universal: 1.23,
                connective38: 2.24,
                connective65: 5.02
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.72,
                pilyastr: 2.09,
                connective3: 9.93,
                universal: 1.26,
                connective38: 2.27,
                connective65: 5.39
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.94,
                pilyastr: 1.58,
                connective3: 7.97,
                universal: 1.21,
                connective38: 2.23,
                connective65: 4.58
            }
        },
        {
            profileType: 'T78_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.24,
                pilyastr: 1.67,
                connective3: 8.28,
                universal: 1.24,
                connective38: 2.28,
                connective65: 4.90
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.44,
                pilyastr: 1.39,
                connective3: 8.76,
                universal: 1.23,
                connective38: 2.29,
                connective65: 4.73
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.96,
                pilyastr: 1.45,
                connective3: 9.13,
                universal: 1.26,
                connective38: 2.35,
                connective65: 5.06
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.91,
                pilyastr: 1.10,
                connective3: 7.35,
                universal: 1.21,
                connective38: 2.28,
                connective65: 4.31
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.35,
                pilyastr: 1.14,
                connective3: 7.66,
                universal: 1.24,
                connective38: 2.35,
                connective65: 4.61
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.36,
                pilyastr: 1.86,
                connective3: 9.57,
                universal: 1.23,
                connective38: 2.24,
                connective65: 5.02
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.88,
                pilyastr: 1.97,
                connective3: 9.93,
                universal: 1.26,
                connective38: 2.27,
                connective65: 5.39
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.80,
                pilyastr: 1.48,
                connective3: 7.97,
                universal: 1.21,
                connective38: 2.23,
                connective65: 4.58
            }
        },
        {
            profileType: 'T80_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.25,
                pilyastr: 1.56,
                connective3: 8.28,
                universal: 1.24,
                connective38: 2.28,
                connective65: 4.90
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.82,
                pilyastr: 1.54,
                connective3: 9.51,
                universal: 1.37,
                connective38: 2.49,
                connective65: 5.62
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.28,
                pilyastr: 1.63,
                connective3: 9.98,
                universal: 1.41,
                connective38: 2.58,
                connective65: 6.12
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.57,
                pilyastr: 1.23,
                connective3: 8.12,
                universal: 1.35,
                connective38: 2.45,
                connective65: 5.11
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.97,
                pilyastr: 1.28,
                connective3: 8.53,
                universal: 1.40,
                connective38: 2.54,
                connective65: 5.55
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.59,
                pilyastr: 2.05,
                connective3: 10.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 6.00
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.05,
                pilyastr: 2.20,
                connective3: 10.71,
                universal: 1.41,
                connective38: 2.52,
                connective65: 6.55
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.35,
                pilyastr: 1.64,
                connective3: 8.72,
                universal: 1.35,
                connective38: 2.42,
                connective65: 5.46
            }
        },
        {
            profileType: 'T78_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.75,
                pilyastr: 1.74,
                connective3: 9.13,
                universal: 1.39,
                connective38: 2.50,
                connective65: 5.95
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.08,
                pilyastr: 1.42,
                connective3: 9.51,
                universal: 1.37,
                connective38: 2.49,
                connective65: 5.62
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.77,
                pilyastr: 1.50,
                connective3: 9.98,
                universal: 1.41,
                connective38: 2.58,
                connective65: 6.12
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.67,
                pilyastr: 1.12,
                connective3: 8.12,
                universal: 1.35,
                connective38: 2.45,
                connective65: 5.11
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.27,
                pilyastr: 1.16,
                connective3: 8.53,
                universal: 1.40,
                connective38: 2.54,
                connective65: 5.55
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 15.88,
                pilyastr: 1.92,
                connective3: 10.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 6.00
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 16.57,
                pilyastr: 2.05,
                connective3: 10.71,
                universal: 1.41,
                connective38: 2.52,
                connective65: 6.55
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'white',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.49,
                pilyastr: 1.52,
                connective3: 8.72,
                universal: 1.35,
                connective38: 2.42,
                connective65: 5.46
            }
        },
        {
            profileType: 'T80_SUPER_AERO',
            profileColor: 'colored',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.10,
                pilyastr: 1.61,
                connective3: 9.13,
                universal: 1.39,
                connective38: 2.50,
                connective65: 5.95
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.57,
                pilyastr: 2.77,
                connective3: 8.61,
                universal: 1.26,
                connective38: 2.29,
                connective65: 4.70
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.94,
                pilyastr: 3.00,
                connective3: 8.90,
                universal: 1.29,
                connective38: 2.33,
                connective65: 5.01
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'white',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.24,
                pilyastr: 2.20,
                connective3: 7.25,
                universal: 1.24,
                connective38: 2.27,
                connective65: 4.27
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'colored',
            reinType: 'rt_35x20x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.55,
                pilyastr: 2.35,
                connective3: 7.50,
                universal: 1.27,
                connective38: 2.32,
                connective65: 4.54
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'white',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.42,
                pilyastr: 3.68,
                connective3: 9.37,
                universal: 1.27,
                connective38: 2.24,
                connective65: 5.01
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'colored',
            reinType: 'rt_35x20x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.79,
                pilyastr: 4.03,
                connective3: 9.66,
                universal: 1.30,
                connective38: 2.25,
                connective65: 5.36
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'white',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.06,
                pilyastr: 2.96,
                connective3: 7.85,
                universal: 1.25,
                connective38: 2.23,
                connective65: 4.56
            }
        },
        {
            profileType: 'T78_ACLASS',
            profileColor: 'colored',
            reinType: 'rt_35x20x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.38,
                pilyastr: 3.21,
                connective3: 8.10,
                universal: 1.28,
                connective38: 2.25,
                connective65: 4.86
            }
        },
        {
            profileType: 'GLIDE',
            profileColor: 'white',
            reinType: 'rt_26x19x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 26.15,
                pilyastr: 2.19,
                connective3: NaN,
                universal: NaN,
                connective38: NaN,
                connective65: NaN
            }
        },
        {
            profileType: 'GLIDE',
            profileColor: 'colored',
            reinType: 'rt_26x19x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 26.25,
                pilyastr: 2.29,
                connective3: NaN,
                universal: NaN,
                connective38: NaN,
                connective65: NaN
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'white',
            reinType: 'rt_35x28x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.96,
                pilyastr: 2.44,
                connective3: 7.91,
                universal: 1.34,
                connective38: 2.40,
                connective65: 4.99
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'colored',
            reinType: 'rt_35x28x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.38,
                pilyastr: 2.66,
                connective3: 8.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 5.38
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'white',
            reinType: 'rt_35x28x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 10.64,
                pilyastr: 1.92,
                connective3: 7.91,
                universal: 1.34,
                connective38: 2.40,
                connective65: 4.99
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'colored',
            reinType: 'rt_35x28x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 10.98,
                pilyastr: 2.07,
                connective3: 8.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 5.38
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'white',
            reinType: 'rt_35x28x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.46,
                pilyastr: 1.70,
                connective3: 7.91,
                universal: 1.34,
                connective38: 2.40,
                connective65: 4.99
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'colored',
            reinType: 'rt_35x28x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.84,
                pilyastr: 1.84,
                connective3: 8.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 5.38
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'white',
            reinType: 'rt_35x28x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 9.60,
                pilyastr: 1.32,
                connective3: 7.91,
                universal: 1.34,
                connective38: 2.40,
                connective65: 4.99
            }
        },
        {
            profileType: 'T86_60_4',
            profileColor: 'colored',
            reinType: 'rt_35x28x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 9.93,
                pilyastr: 1.41,
                connective3: 8.24,
                universal: 1.37,
                connective38: 2.46,
                connective65: 5.38
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'white',
            reinType: 'rt_35x28x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.21,
                pilyastr: 2.33,
                connective3: 9.79,
                universal: 1.61,
                connective38: 2.91,
                connective65: 6.46
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'colored',
            reinType: 'rt_35x28x1_5',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.89,
                pilyastr: 2.54,
                connective3: 10.43,
                universal: 1.67,
                connective38: 3.05,
                connective65: 7.12
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'white',
            reinType: 'rt_35x28x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.10,
                pilyastr: 1.82,
                connective3: 9.79,
                universal: 1.61,
                connective38: 2.91,
                connective65: 6.46
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'colored',
            reinType: 'rt_35x28x2',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.70,
                pilyastr: 1.96,
                connective3: 10.43,
                universal: 1.67,
                connective38: 3.05,
                connective65: 7.12
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'white',
            reinType: 'rt_35x28x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 13.60,
                pilyastr: 2.12,
                connective3: 9.79,
                universal: 1.61,
                connective38: 2.91,
                connective65: 6.46
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'colored',
            reinType: 'rt_35x28x1_5_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 14.38,
                pilyastr: 2.28,
                connective3: 10.43,
                universal: 1.67,
                connective38: 3.05,
                connective65: 7.12
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'white',
            reinType: 'rt_35x28x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 11.63,
                pilyastr: 1.69,
                connective3: 9.79,
                universal: 1.61,
                connective38: 2.91,
                connective65: 6.46
            }
        },
        {
            profileType: 'T86_70_6',
            profileColor: 'colored',
            reinType: 'rt_35x28x2_pipe',
            reinType_60_70: 'rt_35x20x2_pipe',
            results: {
                impost: 12.31,
                pilyastr: 1.80,
                connective3: 10.43,
                universal: 1.67,
                connective38: 3.05,
                connective65: 7.12
            }
        }
    ]
}


export {
    tests
}