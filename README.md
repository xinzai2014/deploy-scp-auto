# deploy-scp-auto
为了实现服务器部署的便捷性使用的插件，通过ftp向内网服务器传输文件，当项目服务器没有使用CI/CD模式，需要通过ftp向服务器部署或传输文件时，使用该插件将非常方便
# 安装
`npm install deploy-scp-auto`
# 使用
### 一、在项目根目录创建配置文件`deploy.config.js`,文件模版如下
```
module.exports = [
  {
    name: "192.168.33.5",                   //部署名称（自定义，选择配置时便于区分服务器）
    file: "/Users/mac/project/test/dist",   //准备部署的本地代码地址
    host: "180.213.33.5",                   //服务器ip
    port: "22",                             // 服务器ftp端口
    user: "root",                           // 服务器登录用户名
    path: "/data/project/web/",             // 服务器上部署地址
  }
];
```
*如有多个服务器需要部署，可写多条部署配置
### 二、在package.json中设置执行脚本
```
"scripts": {
    "deploy": "deploy-scp-auto"
}
```
### 三、部署
- 执行`npm run deploy`
- 输入密码

# License
[MIT](https://opensource.org/license/MIT)

