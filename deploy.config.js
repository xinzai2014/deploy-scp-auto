module.exports = [
  {
    name: "192.168.33.5",                   //部署名称（自定义，选择配置时便于区分服务器）
    file: "/Users/mac/project/test/dist",   //准备部署的本地代码地址
    host: "180.213.33.5",                   //服务器ip
    port: "22",                             // 服务器ftp端口
    user: "root",                           // 服务器登录用户名
    password: "admin123",                   // 服务器登录密码(非必填，可在执行过程中填写)
    path: "/data/project/web/",             // 服务器上部署地址
  }
];