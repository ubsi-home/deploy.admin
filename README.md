# deploy.admin
UBSI-Admin治理工具的安装包


安装前的准备：
- Linux环境
- Java环境（Java 8u291以上版本）
- docker环境
- redis server已经启动（单实例，可以不在本机运行）
- mongodb server已经启动（单实例，可以不在本机运行）


下载安装包：

  `git clone https://github.com/ubsi-home/deploy.admin`



执行安装命令：

  ```
  cd deploy.admin
  ./setup.sh
  ```


访问UBSI-Admin:

  `http://localhost:8090`


### 版本更新说明
1.1.0 - 2022/07/25
- "服务发现"增加了"单例服务"分组统计标签
- "服务仓库"可以查询"单例"服务
  
