<template>
  <div class="stinky">
    <h1>This is the Campaign views</h1>
    <h2>    {{this.$route.params.id}}</h2>
    <Nav />
    <Campaign v-bind:cid="this.$route.params.id" />
    TEST
    <button>New Campaign</button>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Campaign from '@/components/Campaign'

export default {
    components: {
      Nav,
      Campaign
  },
}//end export default
</script>
