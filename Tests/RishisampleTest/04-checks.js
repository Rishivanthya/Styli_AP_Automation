import http from 'k6/http'
import {check} from 'k6'

 export default function()
 {
     //this funcion returns response ,so 
     let response = http.get('https://prod-api.stylishop.com/rest/customer/auth/v4.1/wishlist/ids/customerId/2405091/store/7')
    check(response, {
        'is response status is 200 :' : (r) => r.status === 200,
    })
     
}