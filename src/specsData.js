
const specsData = {// таблицы характеристик
    impost: { //для импоста (собрана из разных таблиц в excel файле чтобы не плодить лишние формулы)
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 349918, // Момент инерции [[K10]]
                orange: 22100, //момент инерции  [[X69]] (домножил на 10000 чтобы использовать в computeSpec())
                cyan: 6.6, //Расстояние между нейтральными осями [[N78]]
                purple: 727, //Площадь [[I11]]
                green: 148.7 //Площади поперечного сечения армирования [[P78]]
            },
            rt_35x20x2_pipe: {
                yellow: 349918,
                orange: 28200,
                cyan: 6.6,
                purple: 727,
                green: 193
            },
            rt_35x20x1_5: {
                yellow: 349918,
                orange: 20100,
                cyan: 6.46,
                purple: 727,
                green: 105.1
            },
            rt_35x20x2: {
                yellow: 349918,
                orange: 25500,
                cyan: 6.46,
                purple: 727,
                green: 137
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 360096,
                orange: 22100,
                cyan: 9.27,
                purple: 757,
                green: 148.7
            },
            rt_35x20x2_pipe: {
                yellow: 360096,
                orange: 28200,
                cyan: 9.27,
                purple: 757,
                green: 193
            },
            rt_35x20x1_5: {
                yellow: 360096,
                orange: 20100,
                cyan: 9.1,
                purple: 757,
                green: 105.1
            },
            rt_35x20x2: {
                yellow: 360096,
                orange: 25500,
                cyan: 9.1,
                purple: 757,
                green: 137
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 519229,
                orange: 22100,
                cyan: 7.9,
                purple: 807,
                green: 148.7
            },
            rt_35x20x2_pipe: {
                yellow: 519229,
                orange: 28200,
                cyan: 7.9,
                purple: 807,
                green: 193
            },
            rt_35x20x1_5: {
                yellow: 519229,
                orange: 20100,
                cyan: 7.7,
                purple: 807,
                green: 105.1
            },
            rt_35x20x2: {
                yellow: 519229,
                orange: 25500,
                cyan: 7.7,
                purple: 807,
                green: 137
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 533651,
                orange: 22100,
                cyan: 11.27,
                purple: 835,
                green: 148.7
            },
            rt_35x20x2_pipe: {
                yellow: 533651,
                orange: 28200,
                cyan: 11.27,
                purple: 835,
                green: 193
            },
            rt_35x20x1_5: {
                yellow: 533651,
                orange: 20100,
                cyan: 11.1,
                purple: 835,
                green: 105.1
            },
            rt_35x20x2: {
                yellow: 533651,
                orange: 25500,
                cyan: 11.1,
                purple: 835,
                green: 137
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 406621,
                orange: 22100,
                cyan: 6.24,
                purple: 874,
                green: 148.7
            },
            rt_35x20x2_pipe: {
                yellow: 406621,
                orange: 28200,
                cyan: 6.24,
                purple: 874,
                green: 193
            },
            rt_35x20x1_5: {
                yellow: 406621,
                orange: 20100,
                cyan: 6.07,
                purple: 874,
                green: 105.1
            },
            rt_35x20x2: {
                yellow: 406621,
                orange: 25500,
                cyan: 6.07,
                purple: 874,
                green: 137
            }
        },
        T86_60_4: {
            rt_35x28x1_5: {
                yellow: 469124,
                orange: 25200,
                cyan: 4.834,
                purple: 970,
                green: 133.8
            },
            rt_35x28x2: {
                yellow: 469124,
                orange: 32100,
                cyan: 4.5,
                purple: 970,
                green: 176.3
            },
            rt_35x28x1_5_pipe: {
                yellow: 469124,
                orange: 29600,
                cyan: 4.74,
                purple: 970,
                green: 172.7
            },
            rt_35x28x2_pipe: {
                yellow: 469124,
                orange: 37000,
                cyan: 4.74,
                purple: 970,
                green: 223.69
            }
        },
        T86_70_6: {
            rt_35x28x1_5: {
                yellow: 706133,
                orange: 25200,
                cyan: 7.745,
                purple: 1103,
                green: 133.8
            },
            rt_35x28x2: {
                yellow: 706133,
                orange: 32100,
                cyan: 7.79,
                purple: 1103,
                green: 176.3
            },
            rt_35x28x1_5_pipe: {
                yellow: 706133,
                orange: 29600,
                cyan: 9.589,
                purple: 1103,
                green: 172.7
            },
            rt_35x28x2_pipe: {
                yellow: 706133,
                orange: 37000,
                cyan: 9.59,
                purple: 1103,
                green: 223.69
            }
        },
        GLIDE: {
            rt_26x19x1_5: {
                yellow: 63666,
                orange: 9400,
                cyan: 1.529,
                purple: 487,
                green: 87.3
            }
        }
    },
    pilyastr: {// Пилястровый профиль [[AU29_BC68]]
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1485455, //Главные моменты инерции (Сечения профиля, м4) [[AU29]]
                orange: 451461, //Главные моменты инерции (Сечения усилительного вкладыша, м4) [[AU30]]
                cyan: 10.44, // Главные моменты инерции (δ) [[AU31]]
                purple: 1164, //площади сеч (ПВХ профиль, м2) [[AU32]]
                green: 420 // площади сеч (Усилительный вкладыш, м2) [[AU33]]
            },
            rt_35x20x2_pipe: {
                yellow: 1485455,
                orange: 517504,
                cyan: 6.745,
                purple: 1164,
                green: 464
            },
            rt_35x20x1_5: {
                yellow: 1485455,
                orange: 373983,
                cyan: 14.98,
                purple: 1164,
                green: 376
            },
            rt_35x20x2: {
                yellow: 1485455,
                orange: 434939,
                cyan: 11.56,
                purple: 1164,
                green: 409
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1521116,
                orange: 490519,
                cyan: 10.05,
                purple: 1195,
                green: 420
            },
            rt_35x20x2_pipe: {
                yellow: 1521116,
                orange: 563376,
                cyan: 6.237,
                purple: 1195,
                green: 464
            },
            rt_35x20x1_5: {
                yellow: 1521116,
                orange: 404699,
                cyan: 14.838,
                purple: 1195,
                green: 376
            },
            rt_35x20x2: {
                yellow: 1521116,
                orange: 471948,
                cyan: 11.23,
                purple: 1195,
                green: 409
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1861336,
                orange: 527922,
                cyan: 12.86,
                purple: 1245,
                green: 420
            },
            rt_35x20x2_pipe: {
                yellow: 1861336,
                orange: 607304,
                cyan: 8.77,
                purple: 1245,
                green: 464
            },
            rt_35x20x1_5: {
                yellow: 1861336,
                orange: 434117,
                cyan: 17.869,
                purple: 1245,
                green: 376
            },
            rt_35x20x2: {
                yellow: 1861336,
                orange: 507393,
                cyan: 14.09,
                purple: 1245,
                green: 409
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1905373,
                orange: 577729,
                cyan: 12.298,
                purple: 1272,
                green: 420
            },
            rt_35x20x2_pipe: {
                yellow: 1905373,
                orange: 665800,
                cyan: 7.97,
                purple: 1272,
                green: 464
            },
            rt_35x20x1_5: {
                yellow: 1905373,
                orange: 473296,
                cyan: 17.587,
                purple: 1272,
                green: 376
            },
            rt_35x20x2: {
                yellow: 1905373,
                orange: 554599,
                cyan: 13.59,
                purple: 1272,
                green: 409
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 3179848,
                orange: 442297,
                cyan: 12.847,
                purple: 2624,
                green: 420
            },
            rt_35x20x2_pipe: {
                yellow: 3179848,
                orange: 506742,
                cyan: 9.238,
                purple: 2624,
                green: 464
            },
            rt_35x20x1_5: {
                yellow: 3179848,
                orange: 366778,
                cyan: 17.36,
                purple: 2624,
                green: 376
            },
            rt_35x20x2: {
                yellow: 3179848,
                orange: 426257,
                cyan: 13.99,
                purple: 2624,
                green: 409
            }
        },
        T86_60_4: {
            rt_35x28x1_5: {
                yellow: 1787685,
                orange: 421772,
                cyan: 17.44,
                purple: 1437,
                green: 405.5
            },
            rt_35x28x2: {
                yellow: 1787685,
                orange: 489871,
                cyan: 13.66,
                purple: 1437,
                green: 448
            },
            rt_35x28x1_5_pipe: {
                yellow: 1787685,
                orange: 576006,
                cyan: 14.69,
                purple: 1437,
                green: 444
            },
            rt_35x28x2_pipe: {
                yellow: 1787685,
                orange: 658387,
                cyan: 10.519,
                purple: 1437,
                green: 495
            }
        },
        T86_70_6: {
            rt_35x28x1_5: {
                yellow: 2159130,
                orange: 498077,
                cyan: 18.67,
                purple: 1540,
                green: 405.5
            },
            rt_35x28x2: {
                yellow: 2159130,
                orange: 580948,
                cyan: 14.458,
                purple: 1540,
                green: 448
            },
            rt_35x28x1_5_pipe: {
                yellow: 2159130,
                orange: 485726,
                cyan: 13.859,
                purple: 1540,
                green: 444
            },
            rt_35x28x2_pipe: {
                yellow: 2159130,
                orange: 553484,
                cyan: 10.1,
                purple: 1540,
                green: 495
            }
        },
        GLIDE: {
            rt_26x19x1_5: {
                yellow: 805444,
                orange: 223062,
                cyan: 9.738,
                purple: 924,
                green: 359
            }
        }
    },
    connective3: {// Профиль соединительный 3 [[BK29_BP63]]
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 711265,
                orange: 45790,
                cyan: 4.4,
                purple: 1517,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 711265,
                orange: 57168,
                cyan: 4.4,
                purple: 1517,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 711265,
                orange: 40165,
                cyan: 4.23,
                purple: 1517,
                green: 210
            },
            rt_35x20x2: {
                yellow: 711265,
                orange: 50941,
                cyan: 4.23,
                purple: 1517,
                green: 275
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 711265,
                orange: 45790,
                cyan: 4.4,
                purple: 1517,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 711265,
                orange: 57168,
                cyan: 4.4,
                purple: 1517,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 711265,
                orange: 40165,
                cyan: 4.23,
                purple: 1517,
                green: 210
            },
            rt_35x20x2: {
                yellow: 711265,
                orange: 50941,
                cyan: 4.23,
                purple: 1517,
                green: 275
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1120743,
                orange: 45790,
                cyan: 5.255,
                purple: 1710,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 1120743,
                orange: 57168,
                cyan: 5.257,
                purple: 1710,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 1120743,
                orange: 40165,
                cyan: 5.086,
                purple: 1710,
                green: 210
            },
            rt_35x20x2: {
                yellow: 1120743,
                orange: 50941,
                cyan: 5.086,
                purple: 1710,
                green: 275
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1120743,
                orange: 45790,
                cyan: 5.255,
                purple: 1710,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 1120743,
                orange: 57168,
                cyan: 5.257,
                purple: 1710,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 1120743,
                orange: 40165,
                cyan: 5.086,
                purple: 1710,
                green: 210
            },
            rt_35x20x2: {
                yellow: 1120743,
                orange: 50941,
                cyan: 5.086,
                purple: 1710,
                green: 275
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 831264,
                orange: 45790,
                cyan: 3.379,
                purple: 1781,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 831264,
                orange: 57168,
                cyan: 3.38,
                purple: 1781,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 831264,
                orange: 40165,
                cyan: 3.21,
                purple: 1781,
                green: 210
            },
            rt_35x20x2: {
                yellow: 831264,
                orange: 50941,
                cyan: 3.21,
                purple: 1781,
                green: 275
            }
        },
        T86_60_4: {
            rt_35x20x1_5_pipe: {
                yellow: 911177,
                orange: 45790,
                cyan: 2.816,
                purple: 1911,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 911177,
                orange: 57168,
                cyan: 2.818,
                purple: 1911,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 911177,
                orange: 40165,
                cyan: 2.647,
                purple: 1911,
                green: 210
            },
            rt_35x20x2: {
                yellow: 911177,
                orange: 50941,
                cyan: 2.647,
                purple: 1911,
                green: 275
            }
        },
        T86_70_6: {
            rt_35x20x1_5_pipe: {
                yellow: 1456643,
                orange: 45790,
                cyan: 5.293,
                purple: 2262,
                green: 297
            },
            rt_35x20x2_pipe: {
                yellow: 1456643,
                orange: 57168,
                cyan: 5.293,
                purple: 2262,
                green: 386
            },
            rt_35x20x1_5: {
                yellow: 1456643,
                orange: 40165,
                cyan: 5.123,
                purple: 2262,
                green: 210
            },
            rt_35x20x2: {
                yellow: 1456643,
                orange: 50941,
                cyan: 5.123,
                purple: 2262,
                green: 275
            }
        }
    },
    universal: {// Профиль соединительный универсальный [[BZ29_CE63]]
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1654707,
                orange: 546061,
                cyan: 2.775,
                purple: 1824,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 1654707,
                orange: 557490,
                cyan: 2.846,
                purple: 1824,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 1654707,
                orange: 540321,
                cyan: 2.647,
                purple: 1824,
                green: 810
            },
            rt_35x20x2: {
                yellow: 1654707,
                orange: 551130,
                cyan: 2.7,
                purple: 1824,
                green: 875
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1654707,
                orange: 546061,
                cyan: 2.775,
                purple: 1824,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 1654707,
                orange: 557490,
                cyan: 2.846,
                purple: 1824,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 1654707,
                orange: 540321,
                cyan: 2.647,
                purple: 1824,
                green: 810
            },
            rt_35x20x2: {
                yellow: 1654707,
                orange: 551130,
                cyan: 2.7,
                purple: 1824,
                green: 875
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 2196328,
                orange: 546813,
                cyan: 3.336,
                purple: 1975,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 2196328,
                orange: 558379,
                cyan: 3.47,
                purple: 1975,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 2196328,
                orange: 540851,
                cyan: 3.129,
                purple: 1975,
                green: 810
            },
            rt_35x20x2: {
                yellow: 2196328,
                orange: 551773,
                cyan: 3.24,
                purple: 1975,
                green: 875
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 2196328,
                orange: 546813,
                cyan: 3.336,
                purple: 1975,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 2196328,
                orange: 558379,
                cyan: 3.47,
                purple: 1975,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 2196328,
                orange: 540851,
                cyan: 3.129,
                purple: 1975,
                green: 810
            },
            rt_35x20x2: {
                yellow: 2196328,
                orange: 551773,
                cyan: 3.24,
                purple: 1975,
                green: 875
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 1774816,
                orange: 545795,
                cyan: 2.53,
                purple: 2089,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 1774816,
                orange: 557175,
                cyan: 2.54,
                purple: 2089,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 1774816,
                orange: 540165,
                cyan: 2.477,
                purple: 2089,
                green: 810
            },
            rt_35x20x2: {
                yellow: 1774816,
                orange: 550941,
                cyan: 2.477,
                purple: 2089,
                green: 875
            }
        },
        T86_60_4: {
            rt_35x20x1_5_pipe: {
                yellow: 1852935,
                orange: 545817,
                cyan: 1.984,
                purple: 2218,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 1852935,
                orange: 557200,
                cyan: 2,
                purple: 2218,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 1852935,
                orange: 540171,
                cyan: 1.914,
                purple: 2218,
                green: 810
            },
            rt_35x20x2: {
                yellow: 1852935,
                orange: 550949,
                cyan: 1.925,
                purple: 2218,
                green: 875
            }
        },
        T86_70_6: {
            rt_35x20x1_5_pipe: {
                yellow: 2532351,
                orange: 547245,
                cyan: 3.164,
                purple: 2527,
                green: 897
            },
            rt_35x20x2_pipe: {
                yellow: 2532351,
                orange: 558890,
                cyan: 3.328,
                purple: 2527,
                green: 986
            },
            rt_35x20x1_5: {
                yellow: 2532351,
                orange: 541167,
                cyan: 2.926,
                purple: 2527,
                green: 810
            },
            rt_35x20x2: {
                yellow: 2532351,
                orange: 552155,
                cyan: 3.065,
                purple: 2527,
                green: 875
            }
        }
    },
    connective38: {// Профиль соединительный 38 [[AU95_AZ129]]
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1482592,
                orange: 261112,
                cyan: 2.24,
                purple: 2027,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1482592,
                orange: 274531,
                cyan: 2.94,
                purple: 2027,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1482592,
                orange: 252320,
                cyan: 1.22,
                purple: 2027,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1482592,
                orange: 265152,
                cyan: 1.94,
                purple: 2027,
                green: 540
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1482592,
                orange: 261112,
                cyan: 2.24,
                purple: 2027,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1482592,
                orange: 274531,
                cyan: 2.94,
                purple: 2027,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1482592,
                orange: 252320,
                cyan: 1.22,
                purple: 2027,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1482592,
                orange: 265152,
                cyan: 1.94,
                purple: 2027,
                green: 540
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1729129,
                orange: 251297,
                cyan: 2.894,
                purple: 2140,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1729129,
                orange: 263520,
                cyan: 3.346,
                purple: 2140,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1729129,
                orange: 244267,
                cyan: 2.212,
                purple: 2140,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1729129,
                orange: 255877,
                cyan: 2.671,
                purple: 2140,
                green: 540
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1729129,
                orange: 251297,
                cyan: 2.894,
                purple: 2140,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1729129,
                orange: 263520,
                cyan: 3.346,
                purple: 2140,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1729129,
                orange: 244267,
                cyan: 2.212,
                purple: 2140,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1729129,
                orange: 255877,
                cyan: 2.671,
                purple: 2140,
                green: 540
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 1604887,
                orange: 258189,
                cyan: 1.35,
                purple: 2291,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1604887,
                orange: 271251,
                cyan: 1.99,
                purple: 2291,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1604887,
                orange: 249915,
                cyan: 0.42,
                purple: 2291,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1604887,
                orange: 262382,
                cyan: 1.07,
                purple: 2291,
                green: 540
            }
        },
        T86_60_4: {
            rt_35x20x1_5_pipe: {
                yellow: 1693242,
                orange: 258189,
                cyan: 0.607,
                purple: 2421,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 1693242,
                orange: 271882,
                cyan: 1.364,
                purple: 2421,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 1693242,
                orange: 250377,
                cyan: 0.236,
                purple: 2421,
                green: 475
            },
            rt_35x20x2: {
                yellow: 1693242,
                orange: 262914,
                cyan: 0.429,
                purple: 2421,
                green: 540
            }
        },
        T86_70_6: {
            rt_35x20x1_5_pipe: {
                yellow: 2065323,
                orange: 251297,
                cyan: 2.73,
                purple: 2692,
                green: 563
            },
            rt_35x20x2_pipe: {
                yellow: 2065323,
                orange: 263520,
                cyan: 3.182,
                purple: 2692,
                green: 651
            },
            rt_35x20x1_5: {
                yellow: 2065323,
                orange: 244267,
                cyan: 2.048,
                purple: 2692,
                green: 475
            },
            rt_35x20x2: {
                yellow: 2065323,
                orange: 255877,
                cyan: 2.507,
                purple: 2692,
                green: 540
            }
        }
    },
    connective65: {// Профиль соединительный 65 [[BK95_BP129]]
        T78_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1070649,
                orange: 134706,
                cyan: 6.594,
                purple: 2076,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1070649,
                orange: 146778,
                cyan: 6.224,
                purple: 2076,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1070649,
                orange: 128423,
                cyan: 7.01,
                purple: 2076,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1070649,
                orange: 139942,
                cyan: 6.627,
                purple: 2076,
                green: 606
            }
        },
        T80_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1070649,
                orange: 134706,
                cyan: 6.594,
                purple: 2076,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1070649,
                orange: 146778,
                cyan: 6.224,
                purple: 2076,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1070649,
                orange: 128423,
                cyan: 7.01,
                purple: 2076,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1070649,
                orange: 139942,
                cyan: 6.627,
                purple: 2076,
                green: 606
            }
        },
        T78_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1509491,
                orange: 139631,
                cyan: 9.289,
                purple: 2259,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1509491,
                orange: 152380,
                cyan: 8.77,
                purple: 2259,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1509491,
                orange: 132564,
                cyan: 9.901,
                purple: 2259,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1509491,
                orange: 144782,
                cyan: 9.367,
                purple: 2259,
                green: 606
            }
        },
        T80_SUPER_AERO: {
            rt_35x20x1_5_pipe: {
                yellow: 1509491,
                orange: 139631,
                cyan: 9.289,
                purple: 2259,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1509491,
                orange: 152380,
                cyan: 8.77,
                purple: 2259,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1509491,
                orange: 132564,
                cyan: 9.901,
                purple: 2259,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1509491,
                orange: 144782,
                cyan: 9.367,
                purple: 2259,
                green: 606
            }
        },
        T78_ACLASS: {
            rt_35x20x1_5_pipe: {
                yellow: 1190747,
                orange: 136644,
                cyan: 6.195,
                purple: 2341,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1190747,
                orange: 148983,
                cyan: 5.761,
                purple: 2341,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1190747,
                orange: 130058,
                cyan: 6.697,
                purple: 2341,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1190747,
                orange: 141852,
                cyan: 6.248,
                purple: 2341,
                green: 606
            }
        },
        T86_60_4: {
            rt_35x20x1_5_pipe: {
                yellow: 1269019,
                orange: 136232,
                cyan: 5.736,
                purple: 2470,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1269019,
                orange: 148513,
                cyan: 5.315,
                purple: 2470,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1269019,
                orange: 129710,
                cyan: 6.22,
                purple: 2470,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1269019,
                orange: 141446,
                cyan: 5.785,
                purple: 2470,
                green: 606
            }
        },
        T86_70_6: {
            rt_35x20x1_5_pipe: {
                yellow: 1845430,
                orange: 139653,
                cyan: 9.355,
                purple: 2810,
                green: 629
            },
            rt_35x20x2_pipe: {
                yellow: 1845430,
                orange: 152405,
                cyan: 8.835,
                purple: 2810,
                green: 717
            },
            rt_35x20x1_5: {
                yellow: 1845430,
                orange: 132583,
                cyan: 9.967,
                purple: 2810,
                green: 541
            },
            rt_35x20x2: {
                yellow: 1845430,
                orange: 144804,
                cyan: 9.433,
                purple: 2810,
                green: 606
            }
        }
    }
}

export {
    specsData
}