<template>
  <div>
    <div class="rigntnav">
      <router-link to="/">Home</router-link> |
      <router-link to="/main">Main</router-link>
    </div>
    <div class="leftnav">
    <!--  <router-link to="/users">Users/Agents</router-link><br/> -->
      <button @click='selectNav(1)'>User/Agents</button><br/>
      <button @click='selectNav(2)'>Campaigns</button><br/>
      <button @click='selectNav(3)'>Reports</button><br/>
      <button @click='selectNav(4)'>Admin</button>
      </div>
    </div>
</template>

<script>
export default {
   methods: {
       selectNav(page) {
           switch (page){
               case 1:
                this.$router.push('/users')
               break;
               case 2:
                this.$router.push('/campaigns')  
               break;
               case 3:
                this.$router.push('/reports') 
               break;
               case 4:
                this.$router.push('/admin')  
               break;

           }//end switch
       }//end selectNav
   } //end methods

}//end expor default
</script>
<style scoped>
    .rigntnav {
        background: pink;
        float: right;
    }
    .leftnav {
        background: aqua;
        float: left;
    }
</style>