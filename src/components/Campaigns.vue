<template>
    <div class="home">
    <h3>Campaigns</h3>
    <div class="container">
        <div v-for="campaign in campaigns" :key="campaign.id" @click=showCampaign(campaign.id)>
        campaign: {{campaign.name}}
        </div>
    </div>
    <br/><br/>

  <br/><br/>

  </div>
</template>
<script>

export default {
    data() {
        //campaigns: this.$store.state.campaigns
        return {
            campaigns: this.$store.state.campaignTest
        }
    },
    methods: {
       showCampaign(id){
           console.log("select your campaign: ", id );
           this.$router.push('/campaign/'+id );
       },
   } //end methods
}//end export 
</script>