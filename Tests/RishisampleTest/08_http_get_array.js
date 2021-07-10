import http from 'k6/http'

export default function()
{
    let response = http.get('https://prod-api.stylishop.com/rest/customer/auth/profile/view/2405091')
    
    //lets read response array
    let body = JSON.parse(response.body)

     body.array.foreach(element => {
         
         console.log('name is ${element.accept}')
     });


    
}