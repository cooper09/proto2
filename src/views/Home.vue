<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
        {{campaigns}}
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

import setCategories from '@/helpers/setCategories'

export default {
  name: 'home',
  data () {
    return {
      data: "dyanamic" //setCategories.categories(this.campaigns) //this.$store.getters.getCategories
    }
  },
  components: {
        HomeHero,
        HomeDetails,
        HomePlans
  },
    computed: {
        campaigns() {
            return fetch (this.$store.state.campaigns )
            .then(console.log("these are times: ", setCategories.categories(this.$store.state.campaigns)  ))
            
        },
  }
};
</script>
