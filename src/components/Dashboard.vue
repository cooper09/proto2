<template>
    <div class="home">
    <h3>Dashboard </h3>
        All kinds of cool graphic stuff goes here: {{campaignid}}
        <Chart />
        <Data />
        Map Me
        <Map />
    </div>

</template>
<script>
import Chart from '@/components/Chart';
import Data from '@/components/Data';
import Map from '@/components/Map';

export default {
    components: {
        Chart,
        Data,
        Map
    },
    props: ['id'],
    computed:  {
      campaign() {
          return this.$store.state.campaignTest.find(campaign => campaign.id == this.id  )
      },
    campaignid() {
            return this.$store.state.campainId
        }
    },
    methods: {

   } //end methods
}//end export 
</script>
<style scope >
    .btn {
        background: #ccc;
        padding: 0.5em;
        margin-right: 1em;
        cursor: pointer;
    }
</style>