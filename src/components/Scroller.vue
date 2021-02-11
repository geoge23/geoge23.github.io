<template>
    <div class="scroller">
        <svg v-for="{number, selected} in options" :key="number" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <circle :class="{selected}" id="Ellipse_3" cx="5" cy="5" r="5" fill="rgba(255,255,255,0.55)"/>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        total: Number,
        selected: Number
    },
    computed: {
        options() {
            let array = []
            for (let i = 0; i < this.total; i++) {
                array.push({
                    number: i,
                    selected: i == this.selected ? true : false
                })
            }
            return array;
        }
    }
}
</script>

<style scoped>
.scroller {
    margin: 1vh;
    display: flex;
}

.selected {
    fill: #fff;
}
</style>