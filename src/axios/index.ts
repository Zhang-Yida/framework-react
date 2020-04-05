// import React from 'react'
import Axios from 'axios'

// const { Component } = React

const axiosInstance = Axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5e895b9acc33d44c35faedf3/api',
  timeout: 60000,
  // url?: string;
  // method?: Method;
  // baseURL?: string;
  // transformRequest?: AxiosTransformer | AxiosTransformer[];
  // transformResponse?: AxiosTransformer | AxiosTransformer[];
  // headers?: any;
  // params?: any;
  // paramsSerializer?: (params: any) => string;
  // data?: any;
  // timeout?: number;
  // timeoutErrorMessage?: string;
  // withCredentials?: boolean;
  // adapter?: AxiosAdapter;
  // auth?: AxiosBasicCredentials;
  // responseType?: ResponseType;
  // xsrfCookieName?: string;
  // xsrfHeaderName?: string;
  // onUploadProgress?: (progressEvent: any) => void;
  // onDownloadProgress?: (progressEvent: any) => void;
  // maxContentLength?: number;
  // validateStatus?: (status: number) => boolean;
  // maxRedirects?: number;
  // socketPath?: string | null;
  // httpAgent?: any;
  // httpsAgent?: any;
  // proxy?: AxiosProxyConfig | false;
  // cancelToken?: CancelToken;
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (resp) => {
    return resp
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
