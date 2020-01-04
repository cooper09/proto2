<template>
    <div class="home">
    <h3>Report</h3>
    campaign id:     {{id}}<br/>
    {{campaign.name}}<br/>
    {{campaign.data }}

    </div>

</template>
<script>

export default {
    props: ['id'],
    computed:  {
      campaign() {
          return "test"
          //this.$store.state.campaignTest.find(campaign => campaign.id == this.id  )
      }
    },
    methods: {

   } //end methods
}//end export 
</script>