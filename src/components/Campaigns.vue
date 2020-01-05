<template>
    <div class="home">
    <h3>Campaigns</h3>
    <div class="container">
        <div v-for="campaign in campaigns" :key="campaign.id" @click=showCampaign(campaign.id) class="cursor">
        campaign: {{campaign.name}}
        </div>
    </div>
    <br/><br/>
    <button @click="newCampaign()">New Campaign</button>
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
        this.$store.dispatch('setCampaignId', id )
       },
       newCampaign() {
        console.log("Create new campaign...");
        this.$router.push('/newcampaign');
       }
   } //end methods
}//end export 
</script>
<style scope>
    .cursor {
        cursor: pointer;
    }
</style>