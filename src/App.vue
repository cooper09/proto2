<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
//import FileReader from "FileReader";

export default {
  name: 'App',
  components: {
    NavBar,
  //  FileReader
  },
  data: () => ({
    //
  }),
      created() {
        this.$store.dispatch('getCampaigns');
        this.$store.dispatch('getConversions');
    } //end created
};
</script>
<style>

</style>