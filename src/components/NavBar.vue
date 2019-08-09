<template>
    <nav>
      <v-toolbar flat dark class="blue">
        <v-toolbar-title>B+C Conversions</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="black" @click="drawer=!drawer">
            <span>Menu</span>
            <v-icon right></v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="indigo">
          <p>Let's Roll</p>
      </v-navigation-drawer>    
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    }//data
}//end export 
</script>
<style>

</style>