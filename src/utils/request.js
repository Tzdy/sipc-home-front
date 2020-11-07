import axios from 'axios';
import ResponseError from './error';
import message from '../plugins/message/index';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    console.log(data);
    if (data.code !== 20000) {
      return Promise.reject(new ResponseError({
        error: data,
      }));
    }
    return data;
  },
  (error) => {
    console.log(error);
    // debug
    // 真正生产环境中，报这个错和用户没有关系
    // 用户也不需要知道，这里的具体error
    // 例如500错误
    message.message('错误', '服务器内部错误');
    return Promise.reject(new ResponseError({
      debug: error,
    }));
  },
);

export default instance;
