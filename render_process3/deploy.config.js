module.exports = {
  projectName: "v-node", // 项目名称
  passphrase: "",
  readyTimeout: 20000, // 超时时间(毫秒)
  cluster: [], // 集群部署配置，要同时部署多台配置此属性如: ['dev', 'test', 'prod']
  prod: {
    // 环境对象
    name: "生产环境", // 环境名称
    script: "npm run build", // 打包命令
    host: "106.53.116.123", // 服务器地址
    port: 22, // 服务器端口号
    username: "root", // 服务器登录用户名
    password: "yunTest123?", // 服务器登录密码
    distPath: ".output", // 本地打包生成目录
    webDir: "/home/double/v-node", // 服务器部署路径（不可为空或'/'）
    // bakDir: "/usr/local/nginx/backup", // 备份路径 (打包前备份之前部署目录 最终备份路径为 /usr/local/nginx/backup/html.zip)
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: true, // 是否删除本地文件（默认true）
  },
};
