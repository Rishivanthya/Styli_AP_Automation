import { sleep, check, group } from "k6";
import http from "k6/http";

import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";
    

export default function main() {
  let response;

  const vars = {};

  group(
    "Add the product to cart and update the qty - https://stylishop.com/ae/en/",
    function () {
      response = http.post(
        "https://prod-api.stylishop.com/rest/order/auth/v2/storecredit",
        '{ "customerId": 2405091, "storeId": 7 }\n',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      check(response, {
        "status equals 200": response => response.status.toString() === "200",
        "$.storeId exists": response =>
          jsonpath.query(response.json(), "$.storeId").length > 0,
        "$.customerId exists": response =>
          jsonpath.query(response.json(), "$.customerId").length > 0,
      });

      response = http.get(
        "https://prod-api.stylishop.com/rest/customer/auth/v4.1/wishlist/ids/customerId/2405091/store/7",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/catalog/v2/listing/vm",
        '{"query":"","filters":{},"numericFilters":[],"pageOffset":0,"pageSize":20,"storeId":7,"categoryLevel":3,"contextRuleId":"dresses-w"}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/order/auth/v2/storecredit",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/customer/auth/v4.1/wishlist/ids/customerId/2405091/store/7",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "GET",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/catalog/v2/listing/vm",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(3.3);

      response = http.get("https://stylishop.com/ae/en/undefined", {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "image",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "same-origin",
        },
      });

      response = http.post(
        "https://prod-api.stylishop.com/rest/order/auth/v2/storecredit",
        '{"customerId":2405091,"storeId":7}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://recommendation-prod.stylishop.store/api/v2/you_may_also_like",
        '{"item_id":80436328}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://recommendation-prod.stylishop.store/api/v1/also_bought_mix_category_items",
        '{"item_id":80436328}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      vars["index01"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[0]"
      )[0];

      vars["index11"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[1]"
      )[0];

      vars["index21"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[2]"
      )[0];

      vars["index31"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[3]"
      )[0];

      vars["index41"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[4]"
      )[0];

      vars["index51"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[5]"
      )[0];

      vars["index61"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[6]"
      )[0];

      vars["index71"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[7]"
      )[0];

      vars["index81"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[8]"
      )[0];

      vars["index91"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[9]"
      )[0];

      vars["index101"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[10]"
      )[0];

      vars["index111"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[11]"
      )[0];

      vars["index121"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[12]"
      )[0];

      vars["index131"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[13]"
      )[0];

      vars["index141"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[14]"
      )[0];

      vars["index151"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[15]"
      )[0];

      vars["index161"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[16]"
      )[0];

      vars["index171"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[17]"
      )[0];

      vars["index181"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[18]"
      )[0];

      vars["index191"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[19]"
      )[0];

      vars["index201"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[20]"
      )[0];

      vars["index211"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[21]"
      )[0];

      vars["index221"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[22]"
      )[0];

      vars["index231"] = jsonpath.query(
        response.json(),
        "$.recommended_item_list[23]"
      )[0];

      response = http.get(
        "https://prod-api.stylishop.com/rest/customer/auth/v4.1/wishlist/ids/customerId/2405091/store/7",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/catalog/v5/get",
        '{"productId":235485,"storeId":7}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      vars["id1"] = jsonpath.query(response.json(), "$.response.id")[0];

      vars["sku1"] = jsonpath.query(response.json(), "$.response.sku")[0];

      vars["sku2"] = jsonpath.query(
        response.json(),
        "$.response.configProducts[1].sku"
      )[0];

      response = http.get(
        "https://prod-api.stylishop.com/rest/customer/auth/address/view/2405091",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://recommendation-prod.stylishop.store/api/v2/you_may_also_like",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://recommendation-prod.stylishop.store/api/v1/also_bought_mix_category_items",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/catalog/v5/get",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/customer/auth/address/view/2405091",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "GET",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.get(
        "https://adrsmpr.stylishop.com/api/address/search/city/267",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://adrsmpr.stylishop.com/api/address/search/city/267",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "GET",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/catalog/metadata",
        `{"productId":"${vars["id1"]}","storeId":7}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/catalog/metadata",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(0.5);

      response = http.post(
        "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
        '{"skus":[7001139328,7001084828,80399428,7001016828,80271928,80437728,80312628,80257528,20077528,80220128,7000203928,69009128,80261028,7000643328,69065028,20000228,80288728,69062128,80436728,7000750628,80236321,7000776828,7000302828,7000436628],"storeId":7}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
        `{"skus":["${vars["index01"]}","${vars["index11"]}","${vars["index21"]}","${vars["index31"]}","${vars["index41"]}","${vars["index51"]}","${vars["index61"]}","${vars["index71"]}","${vars["index81"]}","${vars["index91"]}","${vars["index101"]}","${vars["index111"]}","${vars["index121"]}","${vars["index131"]}","${vars["index141"]}","${vars["index151"]}","${vars["index161"]}","${vars["index171"]}","${vars["index181"]}","${vars["index191"]}","${vars["index201"]}","${vars["index211"]}","${vars["index221"]}","${vars["index231"]}"],"storeId":7}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(1.2);

      response = http.post(
        "https://mulin-api.stylishop.com/v1/sizechart/api/list",
        '{"brands":[1975],"categories":[2,7,9,16,328]}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json; charset=UTF-8",
            "x-client-version": "v21.06.08",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://mulin-api.stylishop.com/v1/sizechart/api/list",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,x-client-version,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(2.2);

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v5",
        `{"storeId":7,"source":0,"customerId":2405091,"addToQuoteProductsRequests":[{"sku":"${vars["sku2"]}","parentSku":"${vars["sku1"]}","quantity":1,"overrideQuantity":true}]}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
          },
        }
      );

      vars["quoteId1"] = jsonpath.query(response.json(), "$.quoteId")[0];

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v5",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
        '{"quoteId":"1625815658019571","storeId":7,"customerId":2405091}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(3.6);

      response = http.post(
        "https://prod-api.stylishop.com/rest/order/auth/v2/storecredit",
        '{"customerId":2405091,"storeId":7}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/customer/auth/v5/wishlist/view",
        '{"customerId":2405091,"storeId":7}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.get(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/metadata?quoteId=1625815658019571",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "x-client-version": "v21.06.08",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-header-token": "vanthyar@gmail.com",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/order/auth/v2/storecredit",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/customer/auth/v5/wishlist/view",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/metadata?quoteId=1625815658019571",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "GET",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.get(
        "https://prod-api.stylishop.com/rest/customer/auth/address/view/2405091",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v6/get",
        '{"storeId":7,"bagView":1,"customerId":2405091}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/customer/auth/address/view/2405091",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "GET",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v6/get",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(0.5);

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
        `{"quoteId":"${vars["quoteId1"]}","storeId":7,"customerId":2405091}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );
      sleep(8.6);

      response = http.put(
        "https://prod-api.stylishop.com/rest/quote/auth/v5",
        `{"sku":"5903712002","quantity":3,"quoteId":"${vars["quoteId1"]}","storeId":7,"customerId":2405091}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v5",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "PUT",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v6/get",
        '{"storeId":7,"bagView":1,"customerId":2405091}',
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v6/get",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
      sleep(0.5);

      response = http.post(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
        `{"quoteId":"${vars["quoteId1"]}","storeId":7,"customerId":2405091}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            token:
              "KEY eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50aHlhckBnbWFpbC5jb20iLCJjb2RlIjoiMTYyNTgyNjM0NzE3OCIsInJvbGUiOiJ1c2VyIiwiY3VzdG9tZXJJZCI6MjQwNTA5MX0.6wMwxGoPylfkby402vQMB-a1QS4r1viMgtRBsWLBVe-I0E132BmC_wBygl_tzFTzw6YfQBXQY2iwUvFShiR2ow",
            "x-client-version": "v21.06.08",
            "x-header-token": "vanthyar@gmail.com",
            "x-source": "msite",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
          },
        }
      );

      response = http.options(
        "https://prod-api.stylishop.com/rest/quote/auth/v5/view/count",
        null,
        {
          headers: {
            accept: "*/*",
            "access-control-request-headers":
              "content-type,token,x-client-version,x-header-token,x-source",
            "access-control-request-method": "POST",
            origin: "https://stylishop.com",
            "sec-fetch-mode": "cors",
          },
        }
      );
    }
  );
}
