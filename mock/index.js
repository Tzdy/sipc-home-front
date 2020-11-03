import Mock from 'better-mock';
import param2Obj from '../src/utils/params';
import user from './user';

const mockArr = [
  ...user,
];

export default function xhrMock() {
  mockArr.forEach(({ url, type, response }) => {
    const rurl = `${process.env.VUE_APP_BASE_API}${url}`;
    Mock.mock(rurl, type, (config) => {
      const {
        url: resUrl, headers, body, type: resType,
      } = config;
      return response({
        url: resUrl,
        query: param2Obj(resUrl),
        body: JSON.parse(body),
        type: resType,
        headers,
      });
    });
  });
}
