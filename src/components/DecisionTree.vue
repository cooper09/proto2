<template>
    <span>
        Find Conversions
        <v-btn @click="decisionTreeConversions">Calculate Conversions</v-btn>
     </span>
</template>

<script>
import DecisionTree from "decision-tree";
import makeaDecision from '@/helpers/makeaDecision'

export default {
    name: 'DecisionTree',
    components: {
        DecisionTree
    },
    data() {
        return {
            decisionData: [
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Fri Aug 2 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Wed Aug 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Tue Jul 30 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "true"},
                { category: "Invitehealth", source: "http://m.facebook.com/", product: "Vitamin C (Ascorbic Acid) 500mg", campaign: "boucher,invite_traffic", facebook_pixel:"1276657915751386", ga_goal: "Invitehealth Facebook Ad - Event Pixel", landing_page: "https://www.invitehealth.com/beets-hx/superfoods/?utm_source=Facebook", hash: "17483525", click_timestamp: "Tue Jul 23 2019 12:27:29 GMT-0400 (Eastern Daylight Time)", conversion_timestamp: "Sum Jul 07 2019 14:54:43 GMT-0400 (Eastern Daylight Time)", conversion: "false"},
            ]
        }
    },//data
    computed: {
    //    conversions() {
    //        return this.$store.state.conversions;
    //    },
    },
    methods: {
        decisionTreeConversions() {
            var conversions = makeaDecision.doYourThing(this.decisionData, this.conversions );  
            alert("Confirmed-decisionTreeConversions: " + conversions );
            console.log("Confirmed - conversion: ",  conversions )
        },


    }, //end methods
    created() {
        //this.$store.dispatch('getBoucherConverions');
        //this.$store.dispatch('getConversions');
    } //end created
}; //end export default
</script>

<style scoped>
</style>
