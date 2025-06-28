<template>
    <div class="box" :style="buildingStyles">
        <div class="box__wrapper">
            <div class="box__face box__face--front">
                <div class="box__window" v-if="form.windSide === 'windward_side'"></div>
            </div>
            <div class="box__face box__face--back">
                <div class="box__window" v-if="form.windSide === 'leeward_side'"></div>
            </div>
            <div class="box__face box__face--right"></div>
            <div class="box__face box__face--left">
                <div class="box__window" v-if="form.windSide === 'side_wall'"></div>
            </div>
            <div class="box__face box__face--top"></div>
            <div class="box__face box__face--bottom"></div>
        </div>
    </div>
</template>

<script>

    import { useFormStore } from '@/stores/formStore';

    export default {
        name: 'elBuilding',
        setup() {
            const form = useFormStore();
            return {
                form
            }
        },
        props: {

        },
        data() {
            return {

            }
        },
        computed: {
            buildingStyles(){// стили для отрисовки здания
                let rotateY = 40,
                    windowWidthMeters = (this.form.a + this.form.b)/100,
                    windowHeightMeters = this.form.L/100,
                    windowScale = 1,
                    gap = windowWidthMeters*windowScale*5/4,
                    trz = -(240/74)*(this.form.Bl - 1);
                if( this.form.windSide === 'leeward_side'){ rotateY = 220; }
                if( this.form.windSide === 'side_wall'){
                    rotateY = 60;
                    gap = (this.form.Bl*5) - (windowWidthMeters*windowScale*5) - this.form.Wgap*5;
                }
                return `
                    --box-width: ${(this.form.Bw*5).toFixed(0)}px;
                    --box-height: ${(this.form.Bh*5).toFixed(0)}px;
                    --box-depth: ${(this.form.Bl*5).toFixed(0)}px;
                    --rotate-y: ${rotateY}deg;
                    --window-ih: ${(this.form.Wh*5).toFixed(0)}px;
                    --window-width: ${(windowWidthMeters*windowScale*5).toFixed(0)}px;
                    --window-height: ${(windowHeightMeters*windowScale*5).toFixed(0)}px;
                    --window-gap: ${(gap).toFixed(0)}px;
                    --wrapper-tr-z: ${(trz).toFixed(0)}px;
                `;
            }
        }
    }

</script>