<template>
    <div class="home">
    <h3>Campaign</h3>
    campaign id:     {{cid}}<br/>
    {{campaign.name}}<br/>
    {{campaign.data }}

    </div>

</template>
<script>

export default {
    props: ['cid'],
    computed:  {
      campaign() {
          return this.$store.state.campaignTest.find(campaign => campaign.id == this.cid  )
      }
    },
    methods: {

   } //end methods
}//end export 
</script>