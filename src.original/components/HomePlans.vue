<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Select your conversion channel</v-flex>
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/hpjSkU2UYSU" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Boucher</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Boucher</h3>
                            <div>Lorem Ipsum Dolor.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="blue" @click="checkConversions('boucher')" data-cy="plansKetoBtn">
                            Boucher Conversions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/ra4vJwxnvAo" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Facebook</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Facebook</h3>
                            <div>Lorem ipsum dolor.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="blue" @click="showConversions('facebook')" data-cy="plansPaleoBtn">
                            Facebook Conversions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/shr_Xn8S8QU" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Google</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Google</h3>
                            <div>Lorem ipsum dolor.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                    <!--    <v-btn outline block color="blue" @click="showConversions('google')" data-cy="plansVeganBtn"> -->
                        <v-btn outline block color="blue" @click="checkConversions('google')" data-cy="plansVeganBtn">
                            Google conversions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
// cooper s - external "helper" files will handle modular transactions and goodies
import boucherConversions from '@/helpers/boucherConversions'
import googleConversions from '@/helpers/googleConversions'

export default {
    name: 'HomePlans',
   ccomputed: {
        conversions() {
            return this.$store.state.conversions;
        },
        campaigns(){
             return this.$store.state.campaigns;
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
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        },
        showConversions(plan) {
            this.$store.dispatch('getConversions', plan);
            //alert('Show Boucher Conversions: ' + plan);
        },
        checkConversions(plan) {
            // cooper s - when I want to update the store...
            var campaigns = this.$store.getters.ourCampaigns;
            var conversions = this.$store.getters.ourConversions;
            //alert('Homeplan - Check Boucher Conversions: ' + campaigns);
            switch(plan) {
                case 'boucher':
                     alert("Homeplans - Show boucher conversions: "  )
                    var conversions = boucherConversions.within7days(campaigns, conversions)
                    this.$store.state.b_confirmed = conversions;
                break;
                case 'facebook':
                    alert("Homeplans - Show facebook conversions")
                break;
                case 'google':
                    //alert("Homeplans - Show google conversions")
                    var startDate = "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)"
                    var conversions = googleConversions.googleData(startDate);
                    this.$store.state.g_confirmed = conversions;
                break;
            }//end switch

        }
    } //end methods
}; //end export
</script>

<style scoped>
</style>
