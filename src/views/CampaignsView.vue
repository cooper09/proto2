<template>
  <div class="stinky">
    <h1>This is the Campaigns page</h1>
    <Nav />
    <Campaigns />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Campaigns from '@/components/Campaigns'

export default {
    components: {
      Nav,
      Campaigns
  },
}//end export default
</script>
