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
                        <v-btn outlined block color="blue" @click="checkConversions('boucher')" data-cy="plansKetoBtn">
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
                        <v-btn outlined block color="blue" @click="checkConversions('facebook')" data-cy="plansPaleoBtn">
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
                    <!--    <v-btn outlined block color="blue" @click="showConversions('google')" data-cy="plansVeganBtn"> -->
                        <v-btn outlined block color="blue" @click="checkConversions('google')" data-cy="plansVeganBtn">
                            Google conversions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// cooper s - external "helper" files will handle modular transactions and goodies
import makeaDecision from '@/helpers/makeaDecision';

export default {
    name: 'HomePlans',
   computed: {
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
            switch(plan) {
                case 'boucher':
                    alert("Boucher Away: "+ this.$store.state.conversions);
                    this.$router.push('/boucher');
                    //cooper s - artificial conversions
                    var test = [
                        { ad_id: "112164", xyz_campaignid: "1178", fb_campaignid: "144545", age: "25", gender: "M", interest: "80", impressions: "570699", clicks: "9",spent: "138.77" }
                    ]
/* let p = new Promise((resove, reject )=> {
                    let conversions;

                        //var conversions = makeaDecision.doYourThing( test );//this.$store.state.conversions );
                        if (conversions = makeaDecision.doYourThing( test )){  
                            alert("Confirmed-decisionTreeConversions: " + conversions );
                            resolve("Success")
                        } else {
                            reject("Failed")
                        }

                        p.then(()=>{
                            alert("yumpin yimminy")
                        }).catch( (err) =>{
                            alert("We broke our promise: ", err )
                        }) 
                    })//end promise */

                   // var conversions = makeaDecision.doYourThing( test );//this.$store.state.conversions );  
                   // alert("Confirmed-decisionTreeConversions: " + conversions );
                    //console.log("Confirmed - conversion: ",  conversions );
                  

                break;
                case 'facebook':
                    this.$router.push('/facebook');
                break;
                case 'google':
                    //cooper s - currently connects straight to google, need to figure out what to do with this later
                    //alert("Homeplans - Show google conversions")
                    //var startDate = "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)"
                    //var conversions = googleConversions.googleData(startDate);
                    //this.$store.state.g_confirmed = conversions;
                    this.$router.push('/google');
                break;
            }//end switch

        }
    } //end methods
}; //end export
</script>

<style scoped>
</style>
