export default {
    data() {
        return {
            breakpoints: {
                xs: '0px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            }
        }
    },
    computed: {
        media(){
            let bpoints = {};
            Object.keys(this.breakpoints).map(key => {
                bpoints[key] = parseInt(this.breakpoints[key]);
            });
            return {
                xs: `(min-width: 0px) and (max-width: ${bpoints.sm}px)`,
                sm: `(min-width: ${bpoints.sm+1}px) and (max-width: ${bpoints.md}px)`,
                md: `(min-width: ${bpoints.md+1}px) and (max-width: ${bpoints.lg}px)`,
                lg: `(min-width: ${bpoints.lg+1}px) and (max-width: ${bpoints.xl}px)`,
                xl: `(min-width: ${bpoints.xl+1}px) and (max-width: ${bpoints['2xl']}px)`,
                '2xl': `(min-width: ${bpoints['2xl']+1}px)`
            }
        }
    }
}