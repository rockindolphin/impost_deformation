<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="svgComp.viewBox"
        fill="none"
        class="figure figure--window"
        >
        <rect v-bind="svgComp.window" />
        <line v-bind="svgComp.impost_v" />
        <line v-bind="svgComp.impost_h" />
        <line v-bind="svgComp.a_line" />
        <line v-bind="svgComp.b_line" />
        <line v-bind="svgComp.c_line" />
        <line v-bind="svgComp.d_line" />
        <line v-bind="svgComp.l_line" />
        <rect v-bind="svgComp.a_sep_l" />
        <rect v-bind="svgComp.a_sep_r" />
        <rect v-bind="svgComp.b_sep_r" />
        <rect v-bind="svgComp.c_sep_b" />
        <rect v-bind="svgComp.c_sep_t" />
        <rect v-bind="svgComp.d_sep_t" />
        <rect v-bind="svgComp.l_sep_b" />
        <rect v-bind="svgComp.l_sep_t" />
        <text v-bind="svgComp.a_text" class="text" >a</text>
        <text v-bind="svgComp.b_text" class="text" >b</text>
        <text v-bind="svgComp.c_text" class="text" v-if="c !== 0">c</text>
        <text v-bind="svgComp.d_text" class="text" >d</text>
        <text v-bind="svgComp.l_text" class="text" >L</text>
    </svg>
</template>

<script>

    export default {
        name: 'elWindow',
        props: {
            a: {
                type: Number,
                default: 0
            },
            b: {
                type: Number,
                default: 0
            },
            c: {
                type: Number,
                default: 0
            },
            d: {
                type: Number,
                default: 0
            },
            L: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {

            }
        },
        computed: {
            svgComp(){// картинка с окном
                let windowWidth = this.a + this.b,
                    windowHeight = this.L,
                    side = 300,
                    lineGap = 15,
                    textGap = 4,
                    sepSize = 12,
                    windowCommon = {
                        'stroke-width': 4,
                        stroke: '#E40032'
                    },
                    lineCommon = {
                        'stroke-width': 2,
                        stroke: '#000'
                    },
                    sepCommon = {
                        width: sepSize/2,
                        height: sepSize/2,
                        fill: '#000'
                    },
                    textCommon = {
                        'text-anchor': 'middle',
                        fill: '#000'
                    },
                    freeSpace = {
                        x: side - (this.a + this.b),
                        y: side - this.L
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
                        x1: window.x + this.a,
                        y1: window.y,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight
                    },
                    impost_h = {
                        ...windowCommon,
                        x1: window.x,
                        y1: window.y + windowHeight - this.c,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight - this.c
                    },
                    a_line = {
                        ...lineCommon,
                        x1: window.x,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + this.a,
                        y2: window.y + windowHeight + lineGap
                    },
                    b_line = {
                        ...lineCommon,
                        x1: window.x + this.a,
                        y1: window.y + windowHeight + lineGap,
                        x2: window.x + windowWidth,
                        y2: window.y + windowHeight + lineGap
                    },
                    c_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y + windowHeight - this.c,
                        x2: window.x - lineGap,
                        y2: window.y + windowHeight
                    },
                    d_line = {
                        ...lineCommon,
                        x1: window.x - lineGap,
                        y1: window.y,
                        x2: window.x - lineGap,
                        y2: window.y + this.d
                    },
                    l_line = {
                        ...lineCommon,
                        x1: window.x + windowWidth + lineGap,
                        y1: window.y,
                        x2: window.x + windowWidth + lineGap,
                        y2: window.y + windowHeight
                    },
                    a_sep_l = {
                        ...sepCommon,
                        x: a_line.x1 - sepSize/4,
                        y: a_line.y1 - sepSize/4,
                        transform: `rotate(45 ${a_line.x1} ${a_line.y1})`
                    },
                    a_sep_r = {
                        ...sepCommon,
                        x: a_line.x2 - sepSize/4,
                        y: a_line.y1 - sepSize/4,
                        transform: `rotate(45 ${a_line.x2} ${a_line.y1})`
                    },
                    b_sep_r = {
                        ...sepCommon,
                        x: b_line.x2 - sepSize/4,
                        y: b_line.y1 - sepSize/4,
                        transform: `rotate(45 ${b_line.x2} ${b_line.y1})`
                    },
                    c_sep_b = {
                        ...sepCommon,
                        x: c_line.x1 - sepSize/4,
                        y: c_line.y2 - sepSize/4,
                        transform: `rotate(45 ${c_line.x1} ${c_line.y2})`
                    },
                    c_sep_t = {
                        ...sepCommon,
                        x: c_line.x1 - sepSize/4,
                        y: c_line.y1 - sepSize/4,
                        transform: `rotate(45 ${c_line.x1} ${c_line.y1})`
                    },
                    d_sep_t = {
                        ...sepCommon,
                        x: d_line.x1 - sepSize/4,
                        y: d_line.y1 - sepSize/4,
                        transform: `rotate(45 ${d_line.x1} ${d_line.y1})`
                    },
                    l_sep_b = {
                        ...sepCommon,
                        x: l_line.x1 - sepSize/4,
                        y: l_line.y2 - sepSize/4,
                        transform: `rotate(45 ${l_line.x1} ${l_line.y2})`
                    },
                    l_sep_t = {
                        ...sepCommon,
                        x: l_line.x1 - sepSize/4,
                        y: l_line.y1 - sepSize/4,
                        transform: `rotate(45 ${l_line.x1} ${l_line.y1})`
                    },
                    a_text = {
                        ...textCommon,
                        x: a_line.x1 + (a_line.x2 - a_line.x1)/2,
                        y: a_line.y1 + textGap*4
                    },
                    b_text = {
                        ...textCommon,
                        x: b_line.x1 + (b_line.x2 - b_line.x1)/2,
                        y: b_line.y1 + textGap*4
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
            }
        }
    }

</script>