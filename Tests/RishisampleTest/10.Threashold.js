/*

Threahold define pass/fail croiteria for test

example 
system does not produce more than 1 % of errors
Response time for 95% of APIs/Request should be below 200 millisecond
Response time for 90% of request should be below 400 milliseconds

so,thershold analyse performance meteris define above 

*/

import http from 'k6/http'
import {Rate} from 'k6/metrics'

//Declare rate
const failureRate = new Rate('failed requests')

export let options = {

    threasholds:{
        //define requirement 

        'failed requests' : ['rate<0.1'],
        'http_req_duration' :['p(95)<2000' , 'p(99)<4000']
    }
};

export default function(){
    let res = http.get('https://sentry.io/api/3618712/store/?sentry_key=9c54133e7fa04e4da065dba21ed051a8&sentry_version=7')
//Apply thresholds
    failureRate.add(res.status == 200)//if response is  200 ,thrn fail
}