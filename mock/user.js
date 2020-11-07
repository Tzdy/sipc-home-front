const tokenKey = process.env.VUE_APP_TOKEN_KEY;
const user = [{
  [tokenKey]: 'a20185337ydy-token',
  username: '20185337ydy',
  password: '20185337ydy',
  data: {
    username: '20185337ydy',
    password: '20185337ydy',
    name: '云洞岩',
    gender: 1,
    student_number: '20185337',
    grade: '18级本科生',
    card_id: '20394',
    phone: '13999445456',
    college: '计算机科学与工程学院',
    email: '571219188@qq.com',
  },
},

];

export default [{
  url: '/login',
  type: 'post',
  response: (config) => {
    const {
      username,
      password,
    } = config.body;
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
    const {
      headers,
    } = config;
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
{
  url: '/auth/findBack',
  type: 'post',
  response: (config) => {
    const { username, email } = config.body;
    let userItem;
    for (let i = 0; i < user.length; i += 1) {
      if (user[i].username === username) {
        if (user[i].data.email === email) {
          userItem = user[i];
        } else {
          return {
            code: 20001,
            message: '账号密码不匹配',
          };
        }
      }
    }
    if (userItem) {
      return {
        code: 20000,
        message: '稍后会将重置密码的链接，发送至您的邮箱',
      };
    }
    return {
      code: 20002,
      message: '找回失败，请检查账号信息',
    };
  },
},
{
  url: '/auth/reset',
  type: 'post',
  response: () => ({
    code: 20000,
    message: '密码重置成功',
  }),
},
];
