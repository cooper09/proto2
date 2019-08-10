var helpers = {
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
    //cooper s - "Google" check will pull the events for a specific date to compare with both Bucher and Facebook
    googleData(date) { 
      alert('googleData: ' + date );

      var eventArr = [];

      // Replace with your client ID from the developer console.
      var CLIENT_ID = '757547327376-4cgi4fni1r1ombulif2q3roqdbdknqs4.apps.googleusercontent.com';
    
      // Set authorized scope.
      var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
    
      function authorize(event) {
        // Handles the authorization flow.
        // `immediate` should be false when invoked from the button click.
        alert("GoogleData - Authorize")
        var useImmdiate = event ? false : true;
        var authData = {
          client_id: CLIENT_ID,
          scope: SCOPES,
          immediate: useImmdiate
        };
    
        gapi.auth.authorize(authData, function(response) {
          console.log("gapi.auth.authorize: ", response );
          var authButton = document.getElementById('auth-button');
          if (response.error) {
            authButton.hidden = false;
          }
          else {
            authButton.hidden = true;
            queryAccounts();
          }
        });
        return '26' 
      } //end authorise

      function queryAccounts() {
        // Load the Google Analytics client library.
        console.log("queryAccounts...");
        gapi.client.load('analytics', 'v3').then(function() {
      
          // Get a list of all Google Analytics accounts for this user
          gapi.client.analytics.management.accounts.list().then(handleAccounts);
        });
      }//end queryAccounts

      function handleAccounts(response) {
        // Handles the response from the accounts list method.
        if (response.result.items && response.result.items.length) {
          // Get the first Google Analytics account.
          var firstAccountId = response.result.items[0].id;
      
          console.log('handleAccounts - firstAcciountId: ', firstAccountId );
          // Query for properties.
          queryProperties(firstAccountId);
        } else {
          console.log('No accounts found for this user.');
        }
      }//end handleAccounts


function queryProperties(accountId) {
  // Get a list of all the properties for the account.
  gapi.client.analytics.management.webproperties.list(
      {'accountId': accountId})
    .then(handleProperties)
    .then(null, function(err) {
      // Log any errors.
      console.log("Error getting web properties: " , err);
  });
}//end queryProperties

function handleProperties(response) {
      // Handles the response from the webproperties list method.
      if (response.result.items && response.result.items.length) {

        // Get the first Google Analytics account
        var firstAccountId = response.result.items[0].accountId;

        // Get the first property ID
        var firstPropertyId = response.result.items[0].id;

        // Query for Views (Profiles).
        queryProfiles(firstAccountId, firstPropertyId);
      } else {
        console.log('No properties found for this user.');
      }
    }//end handleProperties


function queryProfiles(accountId, propertyId) {
      // Get a list of all Views (Profiles) for the first property
      // of the first Account.
      gapi.client.analytics.management.profiles.list({
          'accountId': accountId,
          'webPropertyId': propertyId
      })
      .then(handleProfiles)
      .then(null, function(err) {
          // Log any errors.
          console.log(err);
      });
    }//ene queryProfiles

    
function handleProfiles(response) {
    // Handles the response from the profiles list method.
    if (response.result.items && response.result.items.length) {
      // Get the first View (Profile) ID.
      var firstProfileId = response.result.items[0].id;

      // Query the Core Reporting API.
      queryCoreReportingApi(firstProfileId);
    } else {
      console.log('No views (profiles) found for this user.');
    }
  }//end handleProfiles

  function queryCoreReportingApi(profileId) {
      // Query the Core Reporting API for the number sessions for
      // the past seven days.
      gapi.client.analytics.data.ga.get({
        'ids': 'ga:' + profileId,
        //'start-date': '7daysAgo',
        'start-date': 'yesterday',
        'end-date': 'today',
        'metrics': 'ga:totalEvents',
        'dimensions': 'ga:eventLabel'
    
      })
      .then(function(response) {
        console.log('queryCoreReportingApp: ', response.result.rows );
        eventArr = response.result.rows;
    
        var formattedJson = JSON.stringify(response.result, null, 2);
        document.getElementById('query-output').value = formattedJson;
      })
      .then(null, function(err) {
          // Log any errors.
          console.log(err);
      });
    }//end queryCoreReportingApi

    authorize("test");

    },//end googleData
      bar () { alert('bar') },
      baz () { alert('baz') },
    }

  export default helpers