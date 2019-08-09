var boucherConversions = {
  //cooper s - within7dys is the "Boucher" check
  within7days(campaigns, conversions) {
    alert("The infamous 7 Day check!" + campaigns +" conversions: " + conversions );
    var confirmedArr = [];
    var checkDate, baseDate;
    var dt1, dt2;
    //cooper s - loop through our conversions to see if we can find a matching date

    
    campaigns.forEach(campaign => conversions.forEach(conversion =>  {
        dt1 = new Date(conversion.timestamp);
        dt2 = new Date(campaign.timestamp);
        checkDate = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
        //console.log("checkdate value: "+ checkDate + " conversion timestamp: "+  conversion.timestamp + " campaign timestamp: " + campaign.timestamp );
       

        if ( campaign.timestamp === conversion.timestamp) {
            baseDate = new Date(dt2.getDate() - 7);

            alert("BaseDate: " + baseDate )
            confirmedArr.push(campaign)
        }
     }))
     return confirmedArr.length;
    },
   
      bar () { alert('bar') },
      baz () { alert('baz') },
    }

  export default boucherConversions