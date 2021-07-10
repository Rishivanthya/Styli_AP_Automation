import * as sampleServices from '../utility/SampleServices.js'
import * as SampleTestData from '../testdata/SampleTestData.js'
import * as env from '../env.js'  //we need env variables i'e is env.js
//import * as env from '../env.sh'
import AddingProduct_Cart from './AddingProduct_Cart.js'
import UpdateCart from './UpdateCart.js'

import { sleep, check, group } from "k6";
import http from "k6/http";

import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";
 
export const options = {
    stages: [  //declar the value in array
      { duration: "20s", target: 3 }, //3 users for 10 minute target =no of users 
      { duration: "50s", target: 2 },
      { duration: "20s", target: 0 },
    ],
  };

  export default function() {

    AddingProduct_Cart()
    UpdateCart()
  }