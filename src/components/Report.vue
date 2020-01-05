<template>
    <div class="home">
    <h3>Report </h3>
 <!--       campaign id:     {{id}}<br/>
        {{campaign.name}}<br/>
        {{campaign.data }} -->
        <br/><br/>
            Start Date: <input type="date" name="start">
            <input type="submit" class="btn">
            End Date: <input type="date" name="end">
            <input type="submit" class="btn">
            <br/><br/>
            Location: <input type="checkbox" id="location">
            History: <input type="checkbox" id="history">
            <br/><br/>

            <Dashboard />
    </div>

</template>
<script>
    import Dashboard from '@/components/Dashboard';

export default {
    components: {
        Dashboard
    },
    props: ['id'],
    computed:  {
      campaign() {
          return this.$store.state.campaignTest.find(campaign => campaign.id == this.id  )
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