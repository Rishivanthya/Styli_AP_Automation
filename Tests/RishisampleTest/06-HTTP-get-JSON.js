// JSON.parse() to convert text into a JavaScript object:

import { check } from 'k6';
import http from 'k6/http';

export default function () {    
		var	url = 'https://sentry.io/api/3618712/store/?sentry_key=9c54133e7fa04e4da065dba21ed051a8&sentry_version=7'
		//	body = "{\"message\":[{}],\"exception\":{\"values\":[{\"value\":\"TypeError: window.appboy.setUser is not a function\",\"type\":\"Error\",\"mechanism\":{\"synthetic\":true,\"handled\":true,\"type\":\"generic\"}}]},\"level\":\"error\",\"event_id\":\"f9622a6a0acb47dc8894e3b5f6d52a87\",\"platform\":\"javascript\",\"sdk\":{\"name\":\"sentry.javascript.browser\",\"packages\":[{\"name\":\"npm:@sentry/browser\",\"version\":\"5.30.0\"}],\"version\":\"5.30.0\",\"integrations\":[\"InboundFilters\",\"FunctionToString\",\"TryCatch\",\"Breadcrumbs\",\"GlobalHandlers\",\"LinkedErrors\",\"UserAgent\"]},\"timestamp\":1625835444.14,\"environment\":\"production\",\"release\":\"v21.06.08\",\"user\":{\"email\":\"vanthyar@gmail.com\"},\"request\":{\"url\":\"https://stylishop.com/ae/en/\",\"headers\":{\"User-Agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36\"}},\"tags\":{}}",
		var	params = {
				headers: {
					'content-type' : 'text/plain;charset=UTF-8',
				
        }
            }
      
   const res = http.get(url, params);

   check(res, {
    'is status 200': (r) => r.status === 201,
    
  });
   console.log('response body length ${response.body.length} for VU= ${__VU} ITERA = ${__ITER}')//Print logs with vitrual user number 
  let body = JSON.parse(res.body)

  // JSON.parse() to convert text into a JavaScript object:

  console.log('response body is ${JSON.stringify(body)}')
  console.log('Messagfe is ${body.message}')
  console.log('message is ${body.message}')
   
  // check(res, {
    //'is message is success': (r) => JSON.parser(r.body).Message === "Data fetched successfully",
    //'body size is 1176 bytes': (r) => r.body.length == 1176,
  }




