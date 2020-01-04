<template>
  <div class="stinky">
    <h1>This is the Users view</h1>
    <Nav />
    <Users />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Users from '@/components/Users'

export default {
    components: {
      Nav,
      Users
  },
}//end export default
</script>
