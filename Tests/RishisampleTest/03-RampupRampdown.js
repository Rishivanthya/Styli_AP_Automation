//03-RampupRampdown.js

import http from 'k6/http'

//03-RampupRampdown.js
export let options = {
    stages: [  //declar the value in array

{ duration: '10s', target: 5 }, //5 users for 10 seconds target =no of users 

{ duration: '20s', target: 3 } //again 3 users for 20 seconds

    ]

}

export default function ()
{
    http.get('https://prod-api.stylishop.com/rest/quote/auth/v6/get');
}


//Total duration 30 seconds ,internally rampup is happening as specified 
    
//max =5 and mini start from 1 