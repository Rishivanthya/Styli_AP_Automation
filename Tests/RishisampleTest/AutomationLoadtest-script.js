import { group, sleep } from 'k6';
import http from 'k6/http';
import {check} from 'k6'

// Version: 1.2
// Creator: WebInspector

//k6 convert API_stylishop.com.har > AutomationLoadtest-script.js   -> convert har file to k6 scripts --> Automating load testing 

export let options = {
	
	stages: [  //declar the value in array

		{ duration: '10s', target: 5 }, //5 users for 10 seconds target =no of users 
		
		{ duration: '20s', target: 3 } //again 3 users for 20 seconds
		
			]
		
};

export default function() {

	group("Global", function() {
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
		}
		,{
			"method": "post",
			"url": "https://prod-api.stylishop.com/rest/quote/auth/v5",
			"body": "{\"storeId\":7,\"source\":0,\"customerId\":2405091,\"addToQuoteProductsRequests\":[{\"sku\":\"5901492303\",\"parentSku\":\"59014923\",\"quantity\":1,\"overrideQuantity\":true}]}",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"x-client-version": "v21.06.08",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"x-header-token": "vanthyar@gmail.com",
					"content-type": "application/json",
					"accept": "application/json, text/plain, */*",
					"x-source": "msite",
					"token": "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "same-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "options",
			"url": "https://prod-api.stylishop.com/rest/quote/auth/v5",
			"params": {
				"headers": {
					"accept": "*/*",
					"access-control-request-method": "POST",
					"access-control-request-headers": "content-type,token,x-client-version,x-header-token,x-source",
					"origin": "https://stylishop.com",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "post",
			"url": "https://www.google-analytics.com/j/collect?v=1&_v=j91&a=1439637429&t=event&cu=AED&_s=14&dl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2F&ul=en&de=UTF-8&dt=Embellished%20Oversized%20V%20Neck%20Abaya&sd=30-bit&sr=1680x1050&vp=1680x914&je=0&ec=cart_update&ea=add_to_cart&ev=130&_u=SCCAAUALAAAAAC~&jid=1930119950&gjid=322897932&cid=1374824269.1625813003&uid=2405091&tid=UA-146864591-1&_gid=1994820145.1625813003&_r=1&gtm=2ou770&pa=add&pr1id=59014923&pr1nm=Embellished%20Oversized%20V%20Neck%20Abaya%20&pr1qt=1&pr1pr=129.72&pr1va=M&z=1012696805",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "text/plain",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.googleadservices.com/pagead/conversion_async.js",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"Referer": "https://stylishop.com/",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://app.link/_r?sdk=web2.58.2&_t=941780594574514907&branch_key=key_live_klJCINFCEozJjHE1RJqfdgcksriThl9b&callback=branch_callback__8",
			"params": {
				"cookies": {
					"_s": "xWu75MUf4JJb6QQb9spAKZmyE3nhT8MnN09uoiDIWS66amCsLHwDJWiYG1IQ92d3"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9",
					"if-none-match": "W/\"5a-irWqu2iIU4C5+fZwVpnmIkng/Ks\""
				}
			}
		},{
			"method": "get",
			"url": "https://api2.branch.io/v1/has-app/key_live_klJCINFCEozJjHE1RJqfdgcksriThl9b?browser_fingerprint_id=941780594574514907&instrumentation=%7B%22%2F_r-brtt%22%3A%22285%22%2C%22%2Fv1%2Fhas-app-brtt%22%3A%22288%22%2C%22%2Fv1%2Fpageview-brtt%22%3A%22553%22%2C%22%2Fv2%2Fevent%2Fstandard-brtt%22%3A%22294%22%2C%22init-began-at%22%3A%2248219%22%7D",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://creativecdn.com/tags?type=iframe&id=pr_BARObeWPkUxJX8iT0jqt_basketadd_59014923&id=pr_BARObeWPkUxJX8iT0jqt_custom_lang_en&id=pr_BARObeWPkUxJX8iT0jqt_lid_us2NAMqvPyO3fhB4YUv2&su=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&sr=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fcheckout%2Fcart&ts=1625831075233",
			"params": {
				"cookies": {
					"ts": "1625774877",
					"u": "AT0Vm5z2rUuov0nKjRp5"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://stylishop.com/ae/en/product-closet-embellished-oversized-v-neck-abaya-59014923",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.facebook.com/tr/?id=514196579513825&ev=AddToCart&dl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&rl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fcheckout%2Fcart&if=false&ts=1625831075228&cd[content_type]=product&cd[content_ids]=59014923&cd[content_name]=Embellished%20Oversized%20V%20Neck%20Abaya%20&cd[value]=129.72&cd[contents]=%5B%7B%27id%27%3A%20%2759014923%27%2C%20%27quantity%27%3A%201%7D%5D&cd[currency]=AED&cd[country]=UAE&sw=1680&sh=1050&ud[em]=01e369e03489f53edcb68f8264d5ea58418b5d1a78c54837ac3a290d9bd7ce15&v=2.9.43&r=stable&ec=5&o=30&fbp=fb.1.1625813003210.1037862016&it=1625831027624&coo=false&eid=97898477913987&rqm=GET",
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
		},{
			"method": "get",
			"url": "https://tracking.stylishop.com/tr?id=514196579513825&ev=AddToCart&et=1625831075&es=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&eid=97898477913987&fbc=&fbp=fb.1.1625813003210.1037862016&ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F91.0.4472.114%20Safari%2F537.36&ud%5Bfn%5D=&ud%5Bln%5D=&ud%5Bem%5D=01e369e03489f53edcb68f8264d5ea58418b5d1a78c54837ac3a290d9bd7ce15&ud%5Bph%5D=e27a90dcf730851a96db4564bb479af6a311baa3293bfed105b6f6ca599808f7&ud%5Bge%5D=&ud%5Bdb%5D=&cd%5Bcontent_type%5D=product&cd%5Bcontent_ids%5D=59014923&cd%5Bcontent_name%5D=Embellished%20Oversized%20V%20Neck%20Abaya%20&cd%5Bvalue%5D=129.72&cd%5Bcontents%5D=%5B%7B%27id%27%3A%20%2759014923%27%2C%20%27quantity%27%3A%201%7D%5D&cd%5Bcurrency%5D=AED",
			"params": {
				"cookies": {
					"sgp": "1",
					"sagp": "1",
					"gn": "f",
					"selTab": "women",
					"_gid": "GA1.2.1994820145.1625813003",
					"_hjid": "cba23e5a-4d97-4fe2-81cf-c1243001ce4c",
					"_scid": "e2e11359-d6ca-42cb-ad24-1eac794e0ee7",
					"_fbp": "fb.1.1625813003210.1037862016",
					"_sctr": "1|1625774400000",
					"ab.storage.deviceId.a24a5ccc-2f74-4c4e-a0c6-42961fccfc1e": "%7B%22g%22%3A%226501402c-6f0f-968b-c4f5-919d47ed01d8%22%2C%22c%22%3A1625813013574%2C%22l%22%3A1625813013574%7D",
					"PHPSESSID": "73766e814d8f6ad44e2a8fbe5bdc64ff",
					"ln": "en",
					"cn": "ae",
					"ab.storage.userId.a24a5ccc-2f74-4c4e-a0c6-42961fccfc1e": "%7B%22g%22%3A%222405091%22%2C%22c%22%3A1625813724834%2C%22l%22%3A1625813724834%7D",
					"__cfruid": "e4b0b5e6d6429da778c6298feb4664a6c34d80ce-1625815579",
					"_hjAbsoluteSessionInProgress": "0",
					"r_jwt": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
					"r_uid": "2405091",
					"r_email": "vanthyar@gmail.com",
					"rc_ts": "1625830981054",
					"_ga": "GA1.1.1374824269.1625813003",
					"_ga_Q699J18SZG": "GS1.1.1625829828.3.1.1625831041.31",
					"_gat_gtag_UA_146864591_1": "1",
					"ab.storage.sessionId.a24a5ccc-2f74-4c4e-a0c6-42961fccfc1e": "%7B%22g%22%3A%22a0810b1c-3f4f-84fd-7d5b-0bc5c578a30e%22%2C%22e%22%3A1625832875238%2C%22c%22%3A1625830942967%2C%22l%22%3A1625831075238%7D"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://tr.snapchat.com/p?pid=24d5aee1-b548-466b-a1ed-d2b44fe2beed&ev=ADD_CART&pl=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&ts=1625831075232&rf=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fcheckout%2Fcart&v=1.5&if=false&bt=__LIVE__&e_ic=undefined&e_pr=129.72&e_cur=undefined&e_ni=1&e_iids=59014923&u_c1=e2e11359-d6ca-42cb-ad24-1eac794e0ee7&intg=gtm&m_sl=642&m_rd=48216&m_pi=355&m_pl=1406&m_ic=0",
			"params": {
				"cookies": {
					"sc_at": "v2|H4sIAAAAAAAAAE3GwRGAIAwEwIoyc0cCHnZjIlRB8X7d13YNzZ1pfPBaxOWmYppYvsHV5qrDwM3RuuiAn1/xAfOU/l1AAAAA"
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
		},{
			"method": "post",
			"url": "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
			"body": "{\"quoteId\":\"1625815658019571\",\"storeId\":7,\"customerId\":2405091}",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"x-client-version": "v21.06.08",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"x-header-token": "vanthyar@gmail.com",
					"content-type": "application/json",
					"accept": "application/json, text/plain, */*",
					"x-source": "msite",
					"token": "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "same-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "options",
			"url": "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
			"params": {
				"headers": {
					"accept": "*/*",
					"access-control-request-method": "POST",
					"access-control-request-headers": "content-type,token,x-client-version,x-header-token,x-source",
					"origin": "https://stylishop.com",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/715226501/?random=1625831075278&cv=9&fst=1625831075278&num=1&guid=ON&resp=GooglemKTybQhCsO&eid=376635471%2C2505059650&u_h=1050&u_w=1680&u_ah=1050&u_aw=1680&u_cd=30&u_his=13&u_tz=240&u_java=false&u_nplug=3&u_nmime=4&gtm=2wg770&sendb=1&ig=1&data=ecomm_prodid%3D59014923%3Becomm_totalvalue%3D129.72%3Becomm_pagetype%3DProduct%20Page&frm=0&url=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fproduct-closet-embellished-oversized-v-neck-abaya-59014923&ref=https%3A%2F%2Fstylishop.com%2Fae%2Fen%2Fcheckout%2Fcart&tiba=Embellished%20Oversized%20V%20Neck%20Abaya&hn=www.googleadservices.com&async=1&rfmt=3&fmt=4",
			"params": {
				"cookies": {
					"DSID": "AAO-7r5d63Blb-9LGNmPkFY28cZx5JcG6mK9AOsj0wILImLsJmgtcCh9TKhYx3uvESWu5NJX2nC7PgvDOgCW564_UUcNuFDziTZSgi6TuLLO2l360mBZO_o",
					"id": "OPT_OUT"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "*/*",
					"x-client-data": "CJG2yQEIpbbJAQjBtskBCKmdygEI0aDKAQigoMsBCK3yywEI3fLLAQjv8ssBCLT4ywEInvnLAQj2+csB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE",
			"params": {
				"cookies": {
					"DSID": "AAO-7r5d63Blb-9LGNmPkFY28cZx5JcG6mK9AOsj0wILImLsJmgtcCh9TKhYx3uvESWu5NJX2nC7PgvDOgCW564_UUcNuFDziTZSgi6TuLLO2l360mBZO_o",
					"id": "OPT_OUT"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"x-client-data": "CJG2yQEIpbbJAQjBtskBCKmdygEI0aDKAQigoMsBCK3yywEI3fLLAQjv8ssBCLT4ywEInvnLAQj2+csB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "post",
			"url": "https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j91&tid=UA-146864591-1&cid=1374824269.1625813003&jid=1930119950&uid=2405091&gjid=322897932&_gid=1994820145.1625813003&_u=SCCAAUALAAAAAC~&z=621100682",
			"params": {
				"cookies": {
					"DSID": "AAO-7r5d63Blb-9LGNmPkFY28cZx5JcG6mK9AOsj0wILImLsJmgtcCh9TKhYx3uvESWu5NJX2nC7PgvDOgCW564_UUcNuFDziTZSgi6TuLLO2l360mBZO_o",
					"id": "OPT_OUT"
				},
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "text/plain",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"x-client-data": "CJG2yQEIpbbJAQjBtskBCKmdygEI0aDKAQigoMsBCK3yywEI3fLLAQjv8ssBCLT4ywEInvnLAQj2+csB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "post",
			"url": "https://api2.branch.io/v2/event/standard",
			"body": {
				"name": "ADD_TO_CART",
				"user_data": "{\"http_origin\":\"https://stylishop.com/ae/en/product-closet-embellished-oversized-v-neck-abaya-59014923\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36\",\"language\":\"EN\",\"screen_width\":1680,\"screen_height\":1050,\"http_referrer\":\"https://stylishop.com/ae/en/checkout/cart\",\"browser_fingerprint_id\":\"941780594574514907\",\"developer_identity\":\"2405091\",\"identity\":\"2405091\",\"sdk\":\"web\",\"sdk_version\":\"2.58.2\"}",
				"custom_data": "{\"language\":\"en\",\"country\":\"ae\",\"user_id\":\"2405091\",\"name\":\"Embellished Oversized V Neck Abaya \",\"product_id\":\"371439\",\"sku\":\"59014923\",\"super_category_id\":\"7\",\"super_category_name\":\"Women\",\"parent_category_id\":\"9\",\"parent_category_name\":\"Clothing\",\"category_id\":\"303\",\"category_name\":\"Outerwear\",\"sub_category_id\":\"6102\",\"sub_category_name\":\"Abayas\",\"price\":\"129.72\",\"size\":\"M\"}",
				"event_data": "{\"currency\":\"AED\"}",
				"content_items": "[{\"language\":\"en\",\"country\":\"ae\",\"user_id\":2405091,\"name\":\"Embellished Oversized V Neck Abaya \",\"product_id\":\"371439\",\"sku\":\"59014923\",\"super_category_id\":\"7\",\"super_category_name\":\"Women\",\"parent_category_id\":\"9\",\"parent_category_name\":\"Clothing\",\"category_id\":\"303\",\"category_name\":\"Outerwear\",\"sub_category_id\":\"6102\",\"sub_category_name\":\"Abayas\",\"price\":\"129.72\",\"currency\":\"AED\",\"size\":\"M\",\"$price\":\"129.72\",\"$sku\":\"59014923\",\"$currency\":\"AED\"}]",
				"branch_key": "key_live_klJCINFCEozJjHE1RJqfdgcksriThl9b"
			},
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "post",
			"url": "https://api2.branch.io/v1/pageview",
			"body": {
				"event": "pageview",
				"metadata": "{\"url\":\"https://stylishop.com/ae/en/product-closet-embellished-oversized-v-neck-abaya-59014923\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36\",\"language\":\"en-US\",\"screen_width\":1680,\"screen_height\":1050,\"window_device_pixel_ratio\":2,\"og_data\":{\"$og_title\":\"Embellished Oversized V Neck Abaya \",\"$og_description\":\"Buy Closet Embellished Oversized V Neck Abaya   \",\"$og_image_url\":\"https://stylishop.com/media/catalog/product/5/9/59014923_1.jpg\",\"$og_type\":\"product\"},\"hosted_deeplink_data\":{\"$ios_deeplink_path\":\"applinks\",\"$android_deeplink_path\":\"applinks\",\"$deeplink_path\":\"applinks\"},\"title\":\"Embellished Oversized V Neck Abaya \",\"description\":\"Buy Closet Embellished Oversized V Neck Abaya   \",\"canonical_url\":\"https://stylishop.com/ae/en/product-closet-embellished-oversized-v-neck-abaya-59014923\"}",
				"initial_referrer": "https://stylishop.com/ae/en/checkout/cart",
				"is_iframe": "false",
				"user_language": "en",
				"open_app": "false",
				"has_app_websdk": "false",
				"feature": "journeys",
				"callback_string": "branch_view_callback__9",
				"data": "{\"$ios_deeplink_path\":\"applinks\",\"$android_deeplink_path\":\"applinks\",\"$deeplink_path\":\"applinks\",\"$canonical_url\":\"https://stylishop.com/ae/en/product-closet-embellished-oversized-v-neck-abaya-59014923\",\"$og_title\":\"Embellished Oversized V Neck Abaya \",\"$og_description\":\"Buy Closet Embellished Oversized V Neck Abaya   \",\"$og_image_url\":\"https://stylishop.com/media/catalog/product/5/9/59014923_1.jpg\",\"$og_video\":null,\"$og_type\":\"product\"}",
				"source": "web-sdk",
				"branch_key": "key_live_klJCINFCEozJjHE1RJqfdgcksriThl9b",
				"session_id": "941934889343354565",
				"sdk": "web2.58.2",
				"browser_fingerprint_id": "941780594574514907"
			},
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);

		sleep(3.25);
		req = [{
			"method": "post",
			"url": "https://sdk.fra-01.braze.eu/api/v3/data/",
			"body": "{\"respond_with\":{\"user_id\":\"2405091\",\"config\":{\"config_time\":1584547389}},\"events\":[{\"name\":\"ce\",\"time\":1625831075.239,\"data\":{\"n\":\"add_to_cart\",\"p\":{\"language\":\"en\",\"user_id\":2405091,\"p_name\":\"Embellished Oversized V Neck Abaya \",\"product_id\":\"371439\",\"sku\":\"59014923\",\"super_category_id\":\"7\",\"super_category_name\":\"Women\",\"parent_category_id\":\"9\",\"parent_category_name\":\"Clothing\",\"category_id\":\"303\",\"category_name\":\"Outerwear\",\"sub_category_id\":\"6102\",\"sub_category_name\":\"Abayas\",\"size\":\"M\"}},\"session_id\":\"a0810b1c-3f4f-84fd-7d5b-0bc5c578a30e\",\"user_id\":\"2405091\"}],\"attributes\":[{\"user_id\":\"2405091\",\"custom\":{\"language\":\"en\"}}],\"api_key\":\"a24a5ccc-2f74-4c4e-a0c6-42961fccfc1e\",\"time\":1625831079,\"sdk_version\":\"2.5.2\",\"device_id\":\"6501402c-6f0f-968b-c4f5-919d47ed01d8\"}",
			"params": {
				"headers": {
					"sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
					"x-braze-api-key": "a24a5ccc-2f74-4c4e-a0c6-42961fccfc1e",
					"x-requested-with": "XMLHttpRequest",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
					"content-type": "application/json",
					"accept": "*/*",
					"origin": "https://stylishop.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://stylishop.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
    
	check (res.timings.duration, {
		'check response time :, (d) => d<200
	});
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));



	
}
