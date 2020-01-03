<template>
    <span>
      <h2> This is the Home Page</h2>
      <v-btn @click="nextPage(1)">Button 1</v-btn>
      <v-btn @click="nextPage(2)">Button 2</v-btn>
      <v-btn @click="nextPage(3)">Button 3</v-btn>
      <v-btn @click="nextPage(4)">Button 4</v-btn>
    </span>
</template>

<script>


export default {
  name: 'home',
  components: {
  },
  methods: {
    nextPage(item) {
          console.log("Goto page: ", item ); 
          //this.$router.push('/page2')
          switch(item){ 
            case 1: 
              //this.$router.push('/home')
            break;
            case 2: 
              this.$router.push('/page2')
            break;
            case 3: 
              this.$router.push('/page3')
            break;
            case 4: 
              this.$router.push('/page4')
            break;
          }//end switch
        }//end nextPage
  }//end methods
};
</script>
