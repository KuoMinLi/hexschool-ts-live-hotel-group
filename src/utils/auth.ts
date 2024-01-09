import axios, { AxiosRequestConfig } from 'axios'

const getHeaders = () => ({
  'Content-Type': 'application/json',
})

const axiosResource = axios.create({ baseURL: process.env.API_HOST, headers: getHeaders() })

axiosResource.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return request
})

axiosResource.interceptors.response.use(
  (response) => {
    // if (response?.data?.messageid === 'TOKEN_FAIL') {
    //   tokenInvalidMessageModal(reloadPage)
    // }
    return response
  },
  (error) => {
    if (error?.response?.status === 409) {
      const id = error.response.data.split('<span><font size="6">')[1].split('<br>')[0]
      // forceMessageModal(null, {
      //   header: '系統錯誤',
      //   html: `<p>很抱歉，由於未能與系統建立正常的連線服務，請將以下序號提供予本行客服人員，將為您提供協助，敬請見諒！</p><p>查詢序號：${id}</p>`,
      //   confirm: '確認',
      //   icon: 'error',
      // })
    }
  },
)

const request = {
  get: <T>(
    url: string,
    option: AxiosRequestConfig = {}) => axiosResource.get<T>(url, option),
  post: <T>(
    url: string,
    data: any,
    option: AxiosRequestConfig = {}) => axiosResource.post<T>(url, data ?? {}, option),
  put: <T>(
    url: string,
    data: any,
    option: AxiosRequestConfig = {}) => axiosResource.put<T>(url, data ?? {}, option),
  delete: <T>(
    url: string,
    option: AxiosRequestConfig = {}) => axiosResource.delete<T>(url, option),
}

export default request