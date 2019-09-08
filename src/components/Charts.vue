<template>
    <div class="chart">
        Chart goes here...
        <pure-vue-chart
            :points="[3,5,2,5,4]"
            :width="400"
            :height="200"
        />
    </div>
</template>
<script>

import PureVueChart from 'pure-vue-chart';

export default {
name: Charts,
 components: {
    PureVueChart,
    },
}
</script>
<style scope>
.chart {
    background: pink;
}
</style>