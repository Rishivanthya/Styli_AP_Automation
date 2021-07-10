import { sleep, check, group } from "k6";
import http from "k6/http";

import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";

export const options = {
  stages: [
    { duration: "1m", target: 3 },
    { duration: "3m", target: 2 },
    { duration: "1m", target: 0 },
  ],
};

export default function main() {
  let response;

  const vars = {};

  group("Logined user searching for the product - https://stylishop.com/ae/en/", function () {
    response = http.get("https://stylishop.com/ae/en/", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "cross-site",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
    });
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
    sleep(0.5);

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.statusMsg equals No store credit wallet found for customer!":
        response =>
          jsonpath
            .query(response.json(), "$.statusMsg")
            .some(
              value => value === "No store credit wallet found for customer!"
            ),
      "$.statusCode equals 201": response =>
        jsonpath
          .query(response.json(), "$.statusCode")
          .some(value => value === "201"),
      "$.status equals false": response =>
        jsonpath
          .query(response.json(), "$.status")
          .some(value => value === "false"),
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

    response = http.get(
      "https://stylishop.com/strapi/in-page-banners?store.storeId=7",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-client-version": "v21.06.08",
          "x-source": "msite",
        },
      }
    );
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

    response = http.get(
      "https://remoteconfig.stylishop.com/getConfig?ts=1625927690455",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-client-version": "v21.06.08",
          "x-source": "msite",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
        },
      }
    );
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.msg equals remote configs fetched": response =>
        jsonpath
          .query(response.json(), "$.msg")
          .some(value => value === "remote configs fetched"),
      "$.version equals 96": response =>
        jsonpath
          .query(response.json(), "$.version")
          .some(value => value === "96"),
      "$.data.build_type equals production": response =>
        jsonpath
          .query(response.json(), "$.data.build_type")
          .some(value => value === "production"),
      "$.data.country_code equals 97111": response =>
        jsonpath
          .query(response.json(), "$.data.country_code")
          .some(value => value === "97111"),
    });

    response = http.options(
      "https://remoteconfig.stylishop.com/getConfig?ts=1625927690455",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-client-version,x-source",
          "access-control-request-method": "GET",
          origin: "https://stylishop.com",
          "sec-fetch-mode": "cors",
        },
      }
    );
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
});

    group("Adding the product to the cart - https://stylishop.com/ae/en/", function () {
    response = http.get(
      "https://prod-api.stylishop.com/rest/customer/auth/profile/view/2405091",
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.statusCode equals 200": response =>
        jsonpath
          .query(response.json(), "$.statusCode")
          .some(value => value === "200"),
      "$.statusMsg equals Fetched Successfully!!": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "Fetched Successfully!!"),
      "$.response.customer.customerId equals 2405091": response =>
        jsonpath
          .query(response.json(), "$.response.customer.customerId")
          .some(value => value === "2405091"),
      "$.response.customer.createdAt equals 2021-07-09 06:55:22.0": response =>
        jsonpath
          .query(response.json(), "$.response.customer.createdAt")
          .some(value => value === "2021-07-09 06:55:22.0"),
      "$.response.customer.email equals vanthyar@gmail.com": response =>
        jsonpath
          .query(response.json(), "$.response.customer.email")
          .some(value => value === "vanthyar@gmail.com"),
      "$.response.customer.firstName equals Rishivanthya": response =>
        jsonpath
          .query(response.json(), "$.response.customer.firstName")
          .some(value => value === "Rishivanthya"),
      "$.response.customer.lastName equals GT": response =>
        jsonpath
          .query(response.json(), "$.response.customer.lastName")
          .some(value => value === "GT"),
      "$.response.customer.mobileNumber equals +971 567773832": response =>
        jsonpath
          .query(response.json(), "$.response.customer.mobileNumber")
          .some(value => value === "+971 567773832"),
      "$.response.customer.gender equals 2": response =>
        jsonpath
          .query(response.json(), "$.response.customer.gender")
          .some(value => value === "2"),
      "$.response.customer.ageGroupId equals 1": response =>
        jsonpath
          .query(response.json(), "$.response.customer.ageGroupId")
          .some(value => value === "1"),
    });

    response = http.options(
      "https://prod-api.stylishop.com/rest/customer/auth/profile/view/2405091",
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.statusCode equals 200": response =>
        jsonpath
          .query(response.json(), "$.statusCode")
          .some(value => value === "200"),
      "$.statusMsg equals No store credit wallet found for customer!":
        response =>
          jsonpath
            .query(response.json(), "$.statusMsg")
            .some(
              value => value === "No store credit wallet found for customer!"
            ),
    });

    response = http.post(
      "https://prod-api.stylishop.com/rest/quote/auth/v6/get",
      '{"storeId":7,"bagView":0,"customerId":2405091}',
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
      "$.statusCode equals 200": response =>
        jsonpath
          .query(response.json(), "$.statusCode")
          .some(value => value === "200"),
      "$.statusMsg equals success": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "success"),
      "$.response.storeId equals 7": response =>
        jsonpath
          .query(response.json(), "$.response.storeId")
          .some(value => value === "7"),
      "$.response.customerId equals 2405091": response =>
        jsonpath
          .query(response.json(), "$.response.customerId")
          .some(value => value === "2405091"),
      "$.response.customerEmail equals vanthyar@gmail.com": response =>
        jsonpath
          .query(response.json(), "$.response.customerEmail")
          .some(value => value === "vanthyar@gmail.com"),
      "$.response.customerIsGuest equals 0": response =>
        jsonpath
          .query(response.json(), "$.response.customerIsGuest")
          .some(value => value === "0"),
      "$.response.itemsCount equals 5": response =>
        jsonpath
          .query(response.json(), "$.response.itemsCount")
          .some(value => value === "5"),
      "$.response.subtotal equals 1939.36": response =>
        jsonpath
          .query(response.json(), "$.response.subtotal")
          .some(value => value === "1939.36"),
      "$.response.subtotalInclTax equals 1859.52": response =>
        jsonpath
          .query(response.json(), "$.response.subtotalInclTax")
          .some(value => value === "1859.52"),
      "$.response.subtotalWithDiscount equals 1677.17": response =>
        jsonpath
          .query(response.json(), "$.response.subtotalWithDiscount")
          .some(value => value === "1677.17"),
      "$.response.estimatedTotal equals 1677.17": response =>
        jsonpath
          .query(response.json(), "$.response.estimatedTotal")
          .some(value => value === "1677.17"),
      "$.response.currency equals AED": response =>
        jsonpath
          .query(response.json(), "$.response.currency")
          .some(value => value === "AED"),
      "$.response.grandTotal equals 1761.03": response =>
        jsonpath
          .query(response.json(), "$.response.grandTotal")
          .some(value => value === "1761.03"),
    });

    vars["parentSku1"] = jsonpath.query(
      response.json(),
      "$.response.products[4].parentSku"
    )[0];

    vars["parentSku2"] = jsonpath.query(
      response.json(),
      "$.response.products[2].parentSku"
    )[0];

    vars["parentSku3"] = jsonpath.query(
      response.json(),
      "$.response.products[0].parentSku"
    )[0];

    vars["parentProductId1"] = jsonpath.query(
      response.json(),
      "$.response.products[2].parentProductId"
    )[0];

    vars["quoteId1"] = jsonpath.query(response.json(), "$.response.quoteId")[0];

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
    sleep(0.5);

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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

    response = http.post(
      "https://recommendation-prod.stylishop.store/api/v1/recently_viewed",
      '{"user_id":2405091,"limit":26}',
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

    response = http.options(
      "https://recommendation-prod.stylishop.store/api/v1/recently_viewed",
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
    sleep(0.7);

    response = http.post(
      "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
      `{"skus":["${vars["parentSku1"]}","${vars["parentSku2"]}","${vars["parentSku3"]}","59016911"],"storeId":7}`,
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
    sleep(6.9);

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
      '{"item_id":59037120}',
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
      '{"item_id":59037120}',
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
      '{"productId":424939,"storeId":7}',
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
      `{"productId":"${vars["parentProductId1"]}","storeId":7}`,
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
    sleep(0.6);

    response = http.post(
      "https://prod-api.stylishop.com/rest/catalog/v5/get/list",
      '{"skus":[7000577328,59037614,7000699213,59037801,7000700536,7000699722,7000699001,7000577720,7000697901,7000480028,7000597621,7000597703,60336714,59037313,7000480128,59017013,7000698014,7000699502,60336905,59037528,59037220,7000577228,59016911,7000577601],"storeId":7}',
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
    sleep(0.8);

    response = http.post(
      "https://mulin-api.stylishop.com/v1/sizechart/api/list",
      '{"brands":[1975],"categories":[7,9,303,6102]}',
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
    sleep(1.5);

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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
  });
}
