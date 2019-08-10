var kalender = {
  //cooper s - within7dys is the "Boucher" check
  Kalender () {
    alert('Kalender Time!');
    var months = ["January","February","March","April","May","June","July","August","September","October","November", "December"];

    function calendarHTML(calendar_id)
      {
        alert("Kalendar - calendarHTML")
        var calendar_html = '<div><table id="calendar_table"> <tr> <th class="month_ctl" id="'+calendar_id+'_prev_month">&#10094;</th> <th class="month_tite" id="'+calendar_id+'_month_title">Current Month</th> <th class="month_ctl" id="'+calendar_id+'_next_month">&#10095;</th> </tr> <tr> <table id="calendar"> <tr class="weekday_headers" id="weekday_headers"> <th>Su</th> <th>Mo</th> <th>Tu</th> <th>We</th> <th>Th</th> <th>Fr</th> <th>Sa</th> </tr> <tr class="week" id="week0"> <th class="day" id="'+calendar_id+'_day0">0</th> <th class="day" id="'+calendar_id+'_day1">0</th> <th class="day" id="'+calendar_id+'_day2">0</th> <th class="day" id="'+calendar_id+'_day3">0</th> <th class="day" id="'+calendar_id+'_day4">0</th> <th class="day" id="'+calendar_id+'_day5">0</th> <th class="day" id="'+calendar_id+'_day6">0</th> </tr><tr class="week" id="week1"> <th class="day" id="'+calendar_id+'_day7">0</th> <th class="'+calendar_id+'_day" id="'+calendar_id+'_day8">0</th> <th class="day" id="'+calendar_id+'_day9">0</th> <th class="day" id="'+calendar_id+'_day10">0</th> <th class="day" id="'+calendar_id+'_day11">0</th> <th class="day" id="'+calendar_id+'_day12">0</th> <th class="day" id="'+calendar_id+'_day13">0</th> </tr><tr class="week" id="week2"> <th class="day" id="'+calendar_id+'_day14">0</th> <th class="day" id="'+calendar_id+'_day15">0</th> <th class="day" id="'+calendar_id+'_day16">0</th> <th class="day" id="'+calendar_id+'_day17">0</th> <th class="day" id="'+calendar_id+'_day18">0</th> <th class="day" id="'+calendar_id+'_day19">0</th> <th class="day" id="'+calendar_id+'_day20">0</th> </tr><tr class="week" id="week3"> <th class="day" id="'+calendar_id+'_day21">0</th> <th class="day" id="'+calendar_id+'_day22">0</th> <th class="day" id="'+calendar_id+'_day23">0</th> <th class="day" id="'+calendar_id+'_day24">0</th> <th class="day" id="'+calendar_id+'_day25">0</th> <th class="day" id="'+calendar_id+'_day26">0</th> <th class="day" id="'+calendar_id+'_day27">0</th> </tr><tr class="week" id="week4"> <th class="day" id="'+calendar_id+'_day28">0</th> <th class="day" id="'+calendar_id+'_day29">0</th> <th class="day" id="'+calendar_id+'_day30">0</th> <th class="day" id="'+calendar_id+'_day31">0</th> <th class="day" id="'+calendar_id+'_day32">0</th> <th class="day" id="'+calendar_id+'_day33">0</th> <th class="day" id="'+calendar_id+'_day34">0</th> </tr><tr class="week" id="week5"> <th class="day" id="'+calendar_id+'_day35">0</th> <th class="day" id="'+calendar_id+'_day36">0</th> <th class="day" id="'+calendar_id+'_day37">0</th> <th class="day" id="'+calendar_id+'_day38">0</th> <th class="day" id="'+calendar_id+'_day39">0</th> <th class="day" id="'+calendar_id+'_day40">0</th> <th class="day" id="'+calendar_id+'_day41">0</th> </tr> </table> </tr> </table></div';
        return calendar_html;
      }

      this.insertCalender = function(div, booked, startDate, callback){

        console.log("Kalender - insertCalendar: ", div );
        alert("Kalender - insertCalendar: " + div );
        var blocked_dates;
        var d = startDate;
        var current_month_value;
        var current_year_value;
        var click_callback;
    
        var calendar_id = "cal_"+makeid();
        var prev_month_id = "#"+calendar_id+"_prev_month";
        var next_month_id = "#"+calendar_id+"_next_month";
    
        click_callback = callback;
        //div.html(calendarHTML(calendar_id))
        var testdiv = document.getElementById('cal_div');
        console.log("insertCalender - testdiv: ", testdiv )
        $('#cal_div').css("color", "red");;

        blocked_dates = booked;
        current_month_value = d.getMonth();
        current_year_value = d.getFullYear();
        changeMonth(d.getMonth(), d.getFullYear());
    
    
        $(prev_month_id).click(function(){
          current_month_value--;
          d = new Date(current_year_value, current_month_value);
          changeMonth(d.getMonth(), d.getFullYear());
        });
    
        $(next_month_id).click(function(){
          current_month_value++;
          d = new Date(current_year_value, current_month_value);
          changeMonth(d.getMonth(), d.getFullYear());
        });
    
        function setupClickHandling()
        {
          for (var i = 0; i < 41; i++) {
            var day_identifier = "#"+calendar_id+"_day"+i;
            $(day_identifier).click(function(e){ onDateClicked(e); return false; });
          };
        }
      
        function onDateClicked(evt, bookedDates ){
          var target_html = evt.target.innerHTML;
          var day_picked = parseInt(target_html);
          var selected_date = new Date(current_year_value, current_month_value, day_picked);
          click_callback(selected_date);
        }
    
        function dateIsBlocked(dateToCheck)
         {
          var blocked = false;
          for (var i=0; i<blocked_dates.length; i++){
            var blockedDate = blocked_dates[i];
            var isSameDay = (dateToCheck.getDate() == blockedDate.getDate() 
              && dateToCheck.getMonth() == blockedDate.getMonth()
              && dateToCheck.getFullYear() == blockedDate.getFullYear())
            if( isSameDay ){
              blocked = true
            }
          }
          
          return blocked
         }
    
         function getNumberOfDays(year, month) {
          var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
          return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        }
    
        function changeMonth(m,year){
    
          var month_name = months[m];
          var start = new Date(year,m,1)
          var first_day = start.getDay();
          var max_days = getNumberOfDays(year, m);
    
          var current_date = 0;
          var current_slot = 0;
          var found_first = false;
    
          console.log("max days",max_days);
          for (var week_num=0; week_num<=5; week_num++){
            for (var day_index=0; day_index<7; day_index++) {
              if((week_num == 0) && (day_index == first_day)){
                found_first = true;
              }
              var day_identifier = "#"+calendar_id+"_day"+current_slot;
              var cell = $(day_identifier);
              var cell_date = new Date(current_year_value, current_month_value, current_date);
    
              cell.removeClass("day-none day-blocked day");
    
    
    
              if (dateIsBlocked(cell_date)){
                cell.addClass("day-blocked");
              }else{
                cell.addClass("day");
              }
    
              if(found_first && current_date < max_days){
                current_date++;
                cell.html(current_date);
              }else{
                cell.html("");
                cell.removeClass("day-none day-blocked day");
                cell.addClass("day-none");
                // cell.css("background-color","white");
              }
    
              
              current_slot++;
            }
          }
          $( "#"+calendar_id+"_month_title" ).html(month_name+" "+year);
        }
    
          setupClickHandling();
        }//end insertCalender


    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }//end  makeid
    
    }//end Kalendar
  }//end kalendar

  export default kalender