import { isValid } from '../../../utils/valid';

export default {
  username(str) {
    return isValid(str, [
      { min: 10, max: 16, errMessage: '用户名应该大于10位，小于等于16位' },
      { test: /^(?![^a-zA-Z]+$)(?!\D+$)/, errMessage: '同时有英文与数字' },
    ]);
  },
  password(str) {
    return isValid(str, [
      { min: 10, max: 16, errMessage: '密码应该大于10位，小于等于16位' },
      { test: /^(?![^a-zA-Z]+$)(?!\D+$)/, errMessage: '同时有英文与数字' },
    ]);
  },
  name(str) {
    return isValid(str, [
      { min: 1, max: 16, errMessage: '姓名应大于等于1位，小于等于16位' },
      { test: /[\u4e00-\u9fa5]/g, errMessage: '姓名仅为中文' },
    ]);
  },
  gender(str) {
    return isValid(str, [
      { min: 1, max: 1, errMessage: '性别为一位中文字符' },
      { test: /[\u4e00-\u9fa5]/g, errMessage: '姓别仅为中文' },
    ]);
  },
  student_number(str) {
    return isValid(str, [
      { min: 8, max: 10, errMessage: '8位或10位数字' },
      { test: /[0-9]/g, errMessage: '学号仅为数字' },
    ]);
  },
};
