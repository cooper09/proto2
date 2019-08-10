<template>
    <div>
        <div id="cal_div">insert start here</div>
        <div id="cal_div2">insert end here</div>
    </div>
</template>

<script>
import kalender from '@/helpers/kalender'
export default {
    name: 'Kalendar',
    computed: {},
    methods: {},
    created() {

        var kal =  new kalender.Kalender();
        var cal_div = $("#cal_div");
        console.log("our cal_div", cal_div );
        var cal_div2 = $("#cal_div2");
        var today = new Date();
        var startday2 = new Date(2015,7, 2);

        var blocked1 = [new Date(2015, 6, 10), new Date(2015, 6, 13) ];
        var blocked2 = [new Date(2015, 7, 12), new Date(2015, 7, 13), new Date(2015, 7, 15) ];

         kal.insertCalender(cal_div, blocked1, today, function(datePicked){
            console.log("picked: "+datePicked);
            });

    /*    kal.insertCalender(cal_div2, blocked2, startday2, function(datePicked){
            console.log("2picked: "+datePicked);
            }); */

    } //end created
}; //end export default
</script>

<style scoped>
#cal_div {
    background: aqua;
}
        table {
        font-family:HelveticaNeue-Light;
        font-size: 13px;
        width: 230px;
        border-collapse:collapse;
        background-color: white;
        line-height: 20px;
        }
        th { 
        padding: 0px;
        spacing: 0px;
        }
        tr {
        color:white;
        }
        tr.week {
        color:black;
        cursor: pointer;
        }

        .weekday_headers
        {
        line-height: 20px;
        background-color: black;
        }

        .month_tite
        {
        background-color: black;
        }

        .day
        {
        line-height: 30px;
        background-color: lightgray;
        color: black;
        }
        .day:hover {
        border-top-color: #323333;
        background: #323333;
        color: white;
        }

        .day-blocked
        {
        background-color: red;
        color: white;
        }

        .day-blocked:hover {
        background-color: red;
        color: white;
        }

        .day-done
        {
        background-color: white;
        }

        .day-done:hover
        {
        background-color: white;
        }



        .month_ctl {
        border-top: 1px solid #000000;
        background: #000000;
        padding: 5.5px 11px;
        color: white;
        font-size: 13px;
        text-decoration: none;
        vertical-align: middle;
        }
        .month_ctl:hover {
        border-top-color: black;
        color: red;
        }
        .month_ctl:active {
        border-top-color: black;
    }

</style>
