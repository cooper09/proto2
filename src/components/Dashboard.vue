<template>
    <div class="home">
    <h3>Dashboard </h3>
        All kinds of cool graphic stuff goes here....
    </div>

</template>
<script>

export default {
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