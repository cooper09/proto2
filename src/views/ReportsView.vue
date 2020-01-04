<template>
  <div class="stinky">
    <h1>This is the Reports view</h1>
    <Nav />
    <Report id="test" />
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
}//end export default
</script>
