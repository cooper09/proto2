<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(conversion, idx) in conversions" :key="idx">
                <v-card data-cy="recipeEntry">
                    <v-responsive>
                     <!-- cooper s images can be added later
                       <v-img :src="item.recipe.image"></v-img>  -->
                    </v-responsive>

                    <v-card-text>
                        Google Conversions {{g_confirmed}}
                        <div class="title my-5">{{conversion.timestamp}}</div>

                        <div class="subheading">Conversions {{g_confirmed}}</div>
                        <ul>
                            <li v-for="(conversion, i) in conversions" :key="i">{{conversion.product}}</li>
                        </ul>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="blue" dark @click="orderRecipe(item)">Chart</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'GoogleConversionss',
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        conversions() {
            return this.$store.state.conversions;
        },
        g_confirmed(){
            return this.$store.state.g_confirmed;
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
    }
};
</script>

<style scoped>
</style>
