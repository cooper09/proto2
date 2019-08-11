<template>

    <v-container grid-list-lg>
      <span class="right"><v-btn class="hidden-md-and-up" color="blue" dark to="/menu">Menu</v-btn></span>
        <h3>Boucher Conversions</h3>
        <div class="subheading">Conversions {{confirmed}}</div>
        <confirmed></confirmed>
        <p></p>
        <p></p>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(conversion, idx) in conversions" :key="idx">
                <v-card data-cy="recipeEntry">
                    <v-responsive>
                     <!-- cooper s images can be added later
                       <v-img :src="item.recipe.image"></v-img>  -->
                    </v-responsive>
                    <v-card-text>
                        <h3 class="subheading">Category: {{conversion.category}}</h3>
                        <p></p>
                        <div class="subheading"><b>Product:</b> {{conversion.product}}</div>
                        <div class="subheading"><b>SKU:</b> {{conversion.sku}}</div>
                        <div class="subheading"><b>Price:</b> {{conversion.price}}</div>
                        <div class="subheading"><b>Purchase Date:</b> {{conversion.timestamp}}</div>
                        <div class="subheading"><b>Purchase Site:</b> {{conversion.site}}</div>
                        <div class="subheading"><b>Purchase Email:</b> {{conversion.email}}</div>

                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-btn color="blue" dark @click="orderRecipe(item)">Chart</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Confirmed from '@/components/Confirmed';

export default {
    name: 'BoucherReport',
    components: {
        Confirmed
    },
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        conversions() {
            return this.$store.state.conversions;
        },
        confirmed(){
            //return this.$store.state.b_confirmed;
            return "7"
        },
        startdate(){
            return this.$store.state.startdate;
        },
        enddate(){
            return this.$store.state.enddate;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        orderRecipe(item) {
            if (this.isAuthenticated) {
                this.$store.dispatch('addRecipe', item);
            } else {
                this.$router.push('/sign-in');
            }
        }
    }, //end methods
    cleared() {
    }
}; //end export default
</script>

<style scoped>
.right {
  float: right;
}
</style>
