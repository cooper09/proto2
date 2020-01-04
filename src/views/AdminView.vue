<template>
  <div class="stinky">
    <h1>This is the Admin view</h1>
    <Nav />
    <Admin />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Admin from '@/components/Admin'

export default {
    components: {
      Nav,
      Admin
  },
}//end export default
</script>
