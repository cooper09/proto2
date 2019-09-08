<template>
    <v-container fill-height>
       This is the actual Chart Component View
    </v-container>
</template>

<script>
export default {
    name: 'ChartView',
    data() {
        return {
            valid: true,     
     }
    }//end data
};//end export default
</script>

<style scoped>
body {
    background: #ccc;
}
.transparent {
    background: transparent;
    width: 3em;
    height: 3em;
}
</style>
