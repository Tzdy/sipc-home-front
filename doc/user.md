## api
### [注册](#注册) [POST] /auth/register
#### 请求
`Content-type: application/json`

参数名称 | 是否必须 | 说明 
:-:|:-:|:--
username|Y|用户名
password|Y|密码
name|Y|姓名
gender|Y|性别
student_number|Y|学号
grade|Y|年级
phone|Y|手机号
college|Y|学院
email|Y|邮箱
```
username: 同时有英文与数字的10位以上字符,小于16位
password: 同时有英文与数字的10位以上字符,小于16位
name: VARCHAR(32)中文名字
gender: 0(男)1(女)
student_number: 8-10位数字字符
grade: 格式为“XX级XX生”
phone: 手机号11位
college: VARCHAR(32)中文（没数据）
email: 
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

### [登陆](#登陆) [POST] /auth/login
#### 请求
`Content-type: application/json`

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

### [通过邮箱找回密码](#通过邮箱找回密码) [POST] /auth/findback?email=true
这个接口，调用成功后，会向用户发送，带有密码找回密钥的邮件
#### 请求
`Content-type: application/json`

参数名称 | 是否必须 | 说明 
:-:|:-:|:--
username|Y|用户名
email|Y|邮箱

```
username: 同时有英文与数字的10位以上字符,小于16位
email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```
#### 响应
`Content-type: application/json`
```
{
    code: 20000,
    message: '稍后会将重置密码的链接，发送至您的邮箱'
}
{
    code: 20001,
    message: '账号与邮箱不匹配'
}
{
    code: 20002,
    message: '找回失败，请检查账号信息'
}
```

### [重置密码](#重置密码) [POST] /auth/reset?password=true
#### 请求
`Content-type: application/json`
参数名称 | 是否必须 | 说明 
:-:|:-:|:--
key|Y|重置密码密钥
password|Y|新密码
```
password: 同时有英文与数字的10位以上字符,小于16位
```
#### 响应
`Content-type: application/json`
```
{
    code: 20000,
    message: '密码重置成功'
}
{
    code: 20001,
    message: '该密码找回邮件已超过时间限制'
}
{
    code: 20002,
    message: '密码重置失败'
}
```