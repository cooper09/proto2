<template>
  <div class="stinky">
    <h1>This is the Reports view</h1>
    <Nav />
    campaign ID: {{campaignId}}
    <Report :id="campaignId" />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Report from '@/components/Report'

export default {
    components: {
      Nav, 
      Report
  },
/*  campaign() {
    return this.$store.state.campaignTest.find(campaign => campaign.id == this.cid  )
  }, */
  computed: {
  campaignId() {
    return this.$store.state.campaignId
    }// end campaignId
  }//end computed
}//end export default
</script>
