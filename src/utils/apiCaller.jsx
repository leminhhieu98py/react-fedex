import * as apiConfig from "../constants/apiConfig"

const axios = require('axios').default;

export default function callApi(url, method = "GET", data = null){
    return axios({
        url: apiConfig.API_URL + url,
        method: method,
        data: data,
      })
        .catch((err) => {
          console.log(err);
        });
}