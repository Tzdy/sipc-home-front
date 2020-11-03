const tokenKey = process.env.VUE_APP_TOKEN_KEY;
const user = [
  {
    [tokenKey]: 'admin-token',
    username: 'admin',
    password: 'admin',
    data: {
      name: '管理员',
      avatar: 'https://www.tsdy.club/git/anqi00000001/static/raw/master/WeStudy/images/index/grade.png',
      roles: ['admin'],
    },
  },
  {
    [tokenKey]: 'editor-token',
    username: 'editor',
    password: 'editor',
    data: {
      name: '编辑',
      avatar: 'https://www.tsdy.club/git/anqi00000001/static/raw/master/WeStudy/images/index/notebook.png',
      roles: ['editor'],
    },
  },
];

export default [
  {
    url: '/login',
    type: 'post',
    response: (config) => {
      const { username, password } = config.query;
      const res = {
        code: undefined,
        message: '',
        data: {
          [tokenKey]: '',
        },
      };
      let success = false;
      user.forEach((item) => {
        if (item.username === username) {
          if (item.password === password) {
            res.code = 20000;
            res.message = '登陆成功';
            res.data[tokenKey] = item[tokenKey];
            success = true;
          }
        }
      });
      if (!success) {
        res.code = 20001;
        res.message = '登陆失败';
      }
      return res;
    },
  },
  {
    url: '/register',
    type: 'post',
    response: (config) => {
      console.log(config);
    },
  },
  {
    url: '/getInfo',
    type: 'get',
    response: (config) => {
      const { headers } = config;
      const res = {
        code: undefined,
        message: '',
        data: {},
      };
      if (headers) {
        if (headers[tokenKey]) {
          user.forEach((item) => {
            if (item[tokenKey] === headers[tokenKey]) {
              res.code = 20000;
              res.message = '获取个人信息成功';
              res.data = item.data;
            }
          });
        }
      }
      return res;
    },
  },
];
