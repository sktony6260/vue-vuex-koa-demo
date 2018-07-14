import axios from "axios";
import { Toast } from "mint-ui";
const env = process.env;
const isDev = env != "production";
axios.interceptors.request.use(
  config => {
    // console.log(config);
    return config;
  },
  error => {
    // console.log(error);
    return error;
  }
);
axios.interceptors.response.use(res => {
  if (res.status != 200) {
    Toast("shit!");
    return;
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  }
});

axios.defaults.baseURL = isDev ? "http://127.0.0.1:8080" : "";

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};
export const request = (
  api,
  params,
  methods = METHODS.GET,
  jsonType = true
) => {
  const requestOptions = {
    url: api,
    method: methods,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": jsonType
        ? "application/json"
        : "application/x-ww    w-form-urlencoded"
    },
    withCredentials: true
  };
  if (methods == "GET") {
    requestOptions.params = params;
    requestOptions.paramsSerializer = function(params) {
      return Qs.stringify(params);
    };
  } else {
    requestOptions.data = params;
    requestOptions.data = jsonType
      ? JSON.stringify(params)
      : qs.stringify(params);
  }
  return axios(requestOptions);
};
