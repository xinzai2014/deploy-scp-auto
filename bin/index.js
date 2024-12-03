#!/usr/bin/env node
'use strict';

const scp = require("scp");
const inquirer = require("inquirer");
const fs = require('fs')
const path = require("path");
const configFileOrDirectory = path.resolve(process.cwd(), "./deploy.config.js");
if(!fs.existsSync(configFileOrDirectory)){
  return console.error('未找到deploy.config.js文件')
}
const serverList = require(configFileOrDirectory);
inquirer
  .prompt([
    {
      name: "server",
      type: "list",
      message: "请选择你要部署的服务器：",
      choices: serverList.map((item) => item.name),
    },
  ])
  .then((res) => {
    const data = serverList.find((item) => item.name == res.server);
    var options = data;
    scp.send(options, function (err) {
      if (err) console.log(err);
      else console.log("文件传输完成");
    });
  })
  .catch((err) => {});
