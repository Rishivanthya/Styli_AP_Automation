import http from 'k6/http'
import {check} from 'k6'
//import rate
import {Rate} from 'k6/metrics'
//export variable that we will use in test

export let errorRate = new Rate('errors')

//define options
//error[0001] some thersholds have failed
//

export let options = {
    thresholds :{
        errors: ['rate<0.1']// i.e 10% error
    }

}

export default function () {


    let req, res;
    req = [{
      "method": "get",
			"url": "https://www.facebook.com/tr/?id=514196579513825&ev=SubscribedButtonClick&dl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&rl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fcheckout%2Fcart&if=false&ts=1625831074835&cd[buttonFeatures]=%7B%22classList%22%3A%22fs-14%20fw-6%20ta-c%20cap%20h-48%20b-box%20d-il-block%20%20c-white%20ml-auto%20bg-dark-gray%20pt-15%20pb-15%20w100p%22%2C%22destination%22%3A%22%22%2C%22id%22%3A%22addToBag%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22ADD%20TO%20BAG%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22name%22%3A%22%22%7D&cd[buttonText]=ADD%20TO%20BAG&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22Embellished%20Oversized%20V%20Neck%20Abaya%20%22%7D&cd[parameters]=%5B%5D&sw=1680&sh=1050&ud[em]=01e369e03489f53edcb68f8264d5ea58418b5d1a78c54837ac3a290d9bd7ce15&v=2.9.43&r=stable&ec=4&o=30&fbp=fb.1.1625813003210.1037862016&it=1625831027624&coo=false&es=automatic&tm=3&rqm=GET",
			"params": {
				"cookies": {
					"fr": "0ICjcOAtU0wfcbQm6..Bg5zYK..GDn.1.0.Bg5zYK."
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
            }
        }
    }];
    res = http.batch(req);
    //onsole.log('response body length ${response.body.length} for VU= ${__VU} ITERA = ${__ITER}')//Print logs with vitrual user number 
  const check1 = check(res, {
    'is status 200': (r) => r.status == 200,
    
  })

  //to check whether check failed ,we need to add to errorrate which declared already 
  errorRate.add(!check1);// not 200,body length not matched aso add not operator


//why we apply no operator
//when one of the check gets failed inside  check() call fails,check() retuen false
//therefore we added not i,e !true
  const check2 = check(res, {
    'body size is 1176 bytes': (r) => r.body.length == 1176,
  })
  errorRate.add(!check2);
}
