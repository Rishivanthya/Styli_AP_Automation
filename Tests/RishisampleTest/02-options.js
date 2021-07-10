import http from 'k6/http'

export let options = {

    //declare configuration -no need pass value in run time

    vus: 10,
    duration: '10s' /* 1m2s */
}
//main function where user will be spread 
//entry point of virtual users

export default function () {

    //gets called again and again by Virtual user
    //Call get API ,POST requests etc.

http.get('https://prod-api.stylishop.com/rest/quote/auth/v6/get');

//k6 run --vus 10 --duration 5s Tests/01-scripts.js 
//10 virtual users will hit the endpoint again and again for 10 seconds
//INIT code ->Called only one per virtual user load
}
//k6 run ./Tests/02-options.js Options 

/*

### Ramp up and Ramp down VU

10 users for let say 20 secondsa 
Again increases load and lets say 20 users for next 1 minute
