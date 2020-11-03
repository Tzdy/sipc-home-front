## api
### [注册](#注册) [POST] /register
#### 请求
`Content-type: application/x-www-form-urlencoded`

参数名称 | 是否必须 | 说明 
:-:|:-:|:--
username|Y|用户名
password|Y|密码
name|Y|姓名
gender|Y|性别
student_number|Y|学号
grade|Y|年级
card_id|Y|一卡通账号
phone|Y|手机号
college|Y|学院
```
username: 同时有英文与数字的10位以上字符,小于16位
password: 同时有英文与数字的10位以上字符,小于16位
name: VARCHAR(32)中文名字
gender: 
```
#### 响应
`Content-type: application/json`
```
{
    code: 20001,
    message: '账号重复'
}

{
    code: 20002,
    message: '注册失败'
}

{
    code: 20000,
    message: '注册成功'
}
```

### [登陆](#登陆) [POST] /login
#### 请求
`Content-type: application/x-www-form-urlencoded`

参数名称 | 是否必须 | 说明 
:-:|:-:|:--
username|Y|用户名
password|Y|密码
```
username: 同时有英文与数字的10位以上字符,小于16位
password: 同时有英文与数字的10位以上字符,小于16位
```
#### 响应
`Content-type: application/json`
```
{
    code: 20000,
    data: {
        token: <String>,
    },
    message: '登陆成功'
}

{
    code: 20001,
    message: '账号不存在'
}

{
    code: 20002,
    message: '密码错误'
}
```
