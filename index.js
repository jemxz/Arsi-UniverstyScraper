var axios = require("axios").default;
/// This is an api request that returns an html file from there server with a search body of a
function getData() {
    var options = {
        method: 'POST',
        url: 'http://197.156.115.82/estudent/home/index',
        headers: {
          cookie: '_arsi_erp_session=b957d83d9c064c0df653c71c0e2e2d64',
          Accept: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Cookie: '_arsi_erp_session=b957d83d9c064c0df653c71c0e2e2d64',
          Origin: 'http://197.156.115.82',
          Referer: 'http://197.156.115.82/auth/login',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63',
          'X-CSRF-Token': 'XhIwf7u1mHT1qMKm0ZEb72iLmwP36D/7RDV5OTY7MOugmWNSCMt8+wRcFwOZEwDzBpCKruWln72dmvZEo80ZFA==',
          'X-Requested-With': 'XMLHttpRequest'
        },
        data: { full_name: 'a', commit: 'Search'}
      };
      
      axios.request(options, {responseType: 'arraybuffer'}).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    
}

getData()