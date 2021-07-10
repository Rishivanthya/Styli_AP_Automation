import { sleep, check, group } from "k6";
import http from "k6/http";

import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";

export const options = {
  stages: [
    { duration: "20s", target: 1 },
   // { duration: "3m", target: 10 },
    //{ duration: "1m", target: 0 },
  ],
};

export default function main() {
  let response;

  const vars = {};

  group("Update the qty to the cart - https://stylishop.com/ae/en/checkout/cart", function () {
    response = http.get("https://stylishop.com/ae/en/checkout/cart", {
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
      "https://remoteconfig.stylishop.com/getConfig?ts=1625942601874",
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
      "$.data.payment_method equals 1": response =>
        jsonpath
          .query(response.json(), "$.data.payment_method")
          .some(value => value === "1"),
      "$.data.shipping_charge equals 10": response =>
        jsonpath
          .query(response.json(), "$.data.shipping_charge")
          .some(value => value === "10"),
      "$.data.min_bag_value_for_free_shipping equals 100": response =>
        jsonpath
          .query(response.json(), "$.data.min_bag_value_for_free_shipping")
          .some(value => value === "100"),
    });

    response = http.options(
      "https://remoteconfig.stylishop.com/getConfig?ts=1625942601874",
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
      "$.statusMsg equals Fetched Successfully!!": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "Fetched Successfully!!"),
    
        
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.statusMsg equals Success": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "Success"),
      "$.quoteId equals 1625815658019571": response =>
        jsonpath
          .query(response.json(), "$.quoteId")
          .some(value => value === "1625815658019571"),
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
      "$.statusMsg contains No Address Found": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(values => values.includes("No Address Found")),
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
      "$.statusMsg equals success": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "success"),
      "$.response.storeId equals 7": response =>
        jsonpath
          .query(response.json(), "$.response.storeId")
          .some(value => value === "7"),
      "$.response.quoteId equals 1625815658019571": response =>
        jsonpath
          .query(response.json(), "$.response.quoteId")
          .some(value => value === "1625815658019571"),
      "$.response.customerId equals 2405091": response =>
        jsonpath
          .query(response.json(), "$.response.customerId")
          .some(value => value === "2405091"),
      "$.response.customerEmail equals vanthyar@gmail.com": response =>
        jsonpath
          .query(response.json(), "$.response.customerEmail")
          .some(value => value === "vanthyar@gmail.com"),
      "$.response.itemsCount equals 5": response =>
        jsonpath
          .query(response.json(), "$.response.itemsCount")
          .some(value => value === "5"),
      "$.response.itemsQty equals 11": response =>
        jsonpath
          .query(response.json(), "$.response.itemsQty")
          .some(value => value === "11"),
      "$.response.subtotal equals 1939.36": response =>
        jsonpath
          .query(response.json(), "$.response.subtotal")
          .some(value => value === "1939.36"),
      "$.response.subtotalInclTax equals 1939.36": response =>
        jsonpath
          .query(response.json(), "$.response.subtotalInclTax")
          .some(value => value === "1939.36"),
      "$.response.subtotalExclTax equals 1859.52": response =>
        jsonpath
          .query(response.json(), "$.response.subtotalExclTax")
          .some(value => value === "1859.52"),
      "$.response.subtotalWithDiscount equals 1677.17": response =>
        jsonpath
          .query(response.json(), "$.response.subtotalWithDiscount")
          .some(value => value === "1677.17"),
      "$.response.importFeesAmount equals 83.85": response =>
        jsonpath
          .query(response.json(), "$.response.importFeesAmount")
          .some(value => value === "83.85"),
      "$.response.total equals 2261.36": response =>
        jsonpath
          .query(response.json(), "$.response.total")
          .some(value => value === "2261.36"),
      "$.response.discount equals 322": response =>
        jsonpath
          .query(response.json(), "$.response.discount")
          .some(value => value === "322"),
      "$.response.currency equals AED": response =>
        jsonpath
          .query(response.json(), "$.response.currency")
          .some(value => value === "AED"),
      "$.response.grandTotal equals 1761.03": response =>
        jsonpath
          .query(response.json(), "$.response.grandTotal")
          .some(value => value === "1761.03"),
      "$.response.taxAmount equals 79.84": response =>
        jsonpath
          .query(response.json(), "$.response.taxAmount")
          .some(value => value === "79.84"),
    });

    vars["quoteId1"] = jsonpath.query(response.json(), "$.response.quoteId")[0];

    vars["sku1"] = jsonpath.query(
      response.json(),
      "$.response.products[0].sku"
    )[0];

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
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
      "$.statusMsg equals Success": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "Success"),
      "status equals 200": response => response.status.toString() === "200",
      "$.response.itemsCount equals 5": response =>
        jsonpath
          .query(response.json(), "$.response.itemsCount")
          .some(value => value === "5"),
      "$.response.itemsQty equals 11": response =>
        jsonpath
          .query(response.json(), "$.response.itemsQty")
          .some(value => value === "11"),
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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
    sleep(4.9);

    response = http.put(
      "https://prod-api.stylishop.com/rest/quote/auth/v5",
      `{"sku":"${vars["sku1"]}","quantity":3,"quoteId":"${vars["quoteId1"]}","storeId":7,"customerId":2405091}`,
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
      "$.statusMsg equals product not found": response =>
        jsonpath
          .query(response.json(), "$.statusMsg")
          .some(value => value === "product not found"),
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });

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
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
  });
}
