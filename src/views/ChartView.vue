<template>
    <v-container fill-height>
       
        <pure-vue-chart
            :points="[3,5,2,5,4]"
            :width="400"
            :height="200"
        />
         <v-btn class="backBtn" dark color="blue" @click='back()'>Back</v-btn>
    </v-container>
</template>

<script>
import PureVueChart from 'pure-vue-chart';
//this.$router.push('/chart');
export default {
    components: {
        PureVueChart,
    },
    methods: {
    back() {
           this.$router.push('/Boucher');
        }
    }//end methods
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
.backBtn {
    float: right;
    margin: 1em;
    background: blue;
    color: white;
    padding: 0.5em;
    cursor: pointer;
}
</style>
