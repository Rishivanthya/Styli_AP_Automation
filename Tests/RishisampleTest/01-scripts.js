import http from 'k6/http'
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
