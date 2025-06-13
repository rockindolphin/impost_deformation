<template>
    <div class="box" :style="buildingStyles">
        <div class="box__wrapper">
            <div class="box__face box__face--front">
                <div class="box__window" v-if="windSide === 'windward_side'"></div>
            </div>
            <div class="box__face box__face--back">
                <div class="box__window" v-if="windSide === 'leeward_side'"></div>
            </div>
            <div class="box__face box__face--right"></div>
            <div class="box__face box__face--left">
                <div class="box__window" v-if="windSide === 'side_wall'"></div>
            </div>
            <div class="box__face box__face--top"></div>
            <div class="box__face box__face--bottom"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'elBuilding',
        props: {
            windSide: {
                type: String,
                default: 'windward_side'
            },
            a: {
                type: Number,
                default: 0
            },
            b: {
                type: Number,
                default: 0
            },
            L: {
                type: Number,
                default: 0
            },
            Wgap: {
                type: Number,
                default: 0
            },
            Bl: {
                type: Number,
                default: 0
            },
            Bw: {
                type: Number,
                default: 0
            },
            Bh: {
                type: Number,
                default: 0
            },
            Wh: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {

            }
        },
        computed: {
            buildingStyles(){// стили для отрисовки здания
                let rotateY = 40,
                    windowWidthMeters = (this.a + this.b)/100,
                    windowHeightMeters = this.L/100,
                    windowScale = 3,
                    gap = windowWidthMeters*windowScale*5/4;
                if( this.windSide === 'leeward_side'){ rotateY = 220; }
                if( this.windSide === 'side_wall'){
                    rotateY = 60;
                    gap = (this.Bl*5) - (windowWidthMeters*windowScale*5) - this.Wgap*5;
                }
                return `
                    --box-width: ${(this.Bw*5).toFixed(0)}px;
                    --box-height: ${(this.Bh*5).toFixed(0)}px;
                    --box-depth: ${(this.Bl*5).toFixed(0)}px;
                    --rotate-y: ${rotateY}deg;
                    --window-ih: ${(this.Wh*5).toFixed(0)}px;
                    --window-width: ${(windowWidthMeters*windowScale*5).toFixed(0)}px;
                    --window-height: ${(windowHeightMeters*windowScale*5).toFixed(0)}px;
                    --window-gap: ${(gap).toFixed(0)}px;
                `;
            }
        }
    }

</script>