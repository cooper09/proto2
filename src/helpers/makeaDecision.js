var makeaDecision = {
  //cooper s - within7dys is the "Boucher" check
  doYourThing(conversions) {
 alert("Run a decision tree: " + conversions[0]);
 console.log("makeaDecision - test data passed: ", conversions[0] );
    //cooper s - loop through our conversions to see if we can find a matching date
    
    const datafile = '../data/FB_KAG_conversion_data.csv';
    var finalArr = [];

    console.log("Open data file: ", datafile);

    d3.csv('http://localhost:8888/proto2/src/data/FB_KAG_conversion_data.csv',function(data) {
      console.log(data[0]);
      alert("data: " + data[0])
    })

/*/
    d3.csv( datafile, function(d) {
      return {
        adid : d.adid,
        age : d.age,
        gener : d.gender,
        interest : d.interest
      };
    }).then(function(data) {
      console.log(data[0]);
    });

// */


/*
    d3.csv(datafile,  function(data){
      alert("Data loaded, buddy: " + data );
      console.log("Data loaded: ", data );

    /*  var config = {
        trainingSet: data, 
        categoryAttr: 'Total_Conversion',
        ignoredAttributes: ['ad_id']
    };

  // Building Decision Tree
  var decisionTree = new dt.DecisionTree(config);
  console.log("decisionTree: ", decisionTree );
    
  // Building Random Forest
  var numberOfTrees = 3;
  var randomForest = new dt.RandomForest(config, numberOfTrees);

  var decisionTreePrediction = decisionTree.predict(conversions[0]);
  console.log("decisionTreePrediction: ",  decisionTreePrediction );
      
  conversions.forEach(conversion =>  {
      console.log("forEach: ", conversion );
   
        var randomForestPrediction = randomForest.predict(conversion);
  
        console.log("randomForestPrediction: " , randomForestPrediction );
        
        if (randomForestPrediction.true === 3 ) {  
          finalArr.push(conversion)
        }
      })//end foreach
      
      finalArr=["x","y","z"];

      console.log("Load Data: ", finalArr );
      return finalArr;  

    });//end csv */

  /*  var data=[
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

    
    var config = {
      trainingSet: data, 
      categoryAttr: 'conversion'
  };
  // Building Decision Tree
  var decisionTree = new dt.DecisionTree(config);
  console.log("decisionTree: ", decisionTree );
  
// Building Random Forest
var numberOfTrees = 6;
var randomForest = new dt.RandomForest(config, numberOfTrees);
    
conversions.forEach(conversion =>  {
      var decisionTreePrediction = decisionTree.predict(conversion);
      var randomForestPrediction = randomForest.predict(conversion);

      console.log("decisionTreePrediction: ",  decisionTreePrediction );
      console.log("randomForestPrediction: " , randomForestPrediction );
      
      if (randomForestPrediction.true === 3 ) {  
        finalArr.push(conversion)
      }
    })//end foreach
    return finalArr; */
  }//end doyourthing
}//end makeadecision

export default makeaDecision