<template>
  <div class="stinky">
    <h1>This is the New Campaign view</h1>
    <Nav />
    <NewCampaign />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import NewCampaign from '@/components/NewCampaign'

export default {
    components: {
      Nav,
      NewCampaign
  },
}//end export default
</script>
