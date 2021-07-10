import http from 'k6/http'
import {Rate} from 'k6/metrics'
import {check} from 'k6'

//Declare rate
const failureRate = new Rate('failed requests')

export let options = {

    threasholds:{
        //define requirement 
          vus: 10,
          duration: '10s',
          thresholds: {
                 
            'checks': ['rate>0.95']

          }
        
    }
};

export default function(){
    const res = http.get('https://sentry.io/api/3618712/store/?sentry_key=9c54133e7fa04e4da065dba21ed051a8&sentry_version=7')
     
   check(res, {
       'is status is 500 :' : r => r.status !== 200

   })

    //Apply thresholds
   // failureRate.add(res.status == 200)//if response is  200 ,thrn fail
}