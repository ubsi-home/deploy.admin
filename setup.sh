#!/bin/bash

# 获取输入，$1: 提示, [$2]: 默认值
in_value=""
function input() {
    res=""
    if [ $# -gt 1 ]
    then
        echo -n "please input $1 ($2): "
        read res
        if [ -z $res ]; then res=$2; fi
    else
        while [ -z $res ]
        do
            echo -n "please input $1: "
            read res
            if [ -z $res ]; then printf "$1 can not be empty, please re-input!\n"; fi
        done
    fi
    in_value=$res
}

# 暂停等待
function pause() {
    echo -n "### "$1", press ENTER to continue ### "
    read wait_enter
}

echo
echo "##################################################################"
echo "#                                                                #"
echo "#                    UBSI Admin Setup Utility                    #"
echo "#                                                                #"
echo "##################################################################"
echo

input "Local-IP-for-Container"
ctn_ip=$in_value
input Container-Port 7112
ctn_port=$in_value

input Redis-IP $ctn_ip
redis_ip=$in_value
input Redis-Port 6379
redis_port=$in_value

cd container
printf "{\n\
  \"host\": \"%s\",\n\
  \"port\": %d,\n\
  \"backlog\": 128,\n\
  \"io_threads\": 4,\n\
  \"work_threads\": 20,\n\
  \"overload\": 256,\n\
  \"timeout_fuse\": 0,\n\
  \"forward\": 0,\n\
  \"forward_door\": []\n\
}\n" $ctn_ip $ctn_port > rewin.ubsi.container.json
printf "{\n\
  \"io_threads\": 4,\n\
  \"timeout_connect\": 5,\n\
  \"timeout_request\": 10,\n\
  \"timeout_reconnect\": 600,\n\
  \"redis_host\": \"%s\",\n\
  \"redis_port\": %d,\n\
  \"redis_conn_idle\": 2,\n\
  \"redis_conn_max\": 16\n\
}\n" $redis_ip $redis_port > rewin.ubsi.consumer.json

rm -rf rewin.ubsi.libs
rm -rf rewin.ubsi.modules
rm -rf nohup.out
rm -rf rewin.ubsi.lib.json
rm -rf rewin.ubsi.module.json
./start.sh 2>/dev/null
cd ..

echo
pause "ubsi container will be start"
ps -ef | grep "java -jar rewin.ubsi.core" | grep -v grep

##################################################################

echo
input MongoDB-IP $ctn_ip
mongo_ip=$in_value
input MongoDB-Port 27017
mongo_port=$in_value

echo
pause "initial data will be restore to MongoDB"
cd data
printf "{\n\
  \"servers\": [\n\
    {\n\
      \"host\": \"%s\",\n\
      \"port\": %d\n\
    }\n\
  ]\n\
}\n" $mongo_ip $mongo_port > rewin.ubsi.mongodb.json

./restore.sh
cd ..

##################################################################

echo
input Local-Maven-Repository-Url ""
local_maven=$in_value
input Github-Account "ubsi-user"
github_user=$in_value
input Github-Personal-Access-Token `printf "%sp%s7nYPnr%sNA4Iqt%sXFNQ0%s" gh _xB VRkzbFxn WD3U Y8xEA`
github_token=$in_value

if [ -z $local_maven ]; then
    printf "local-maven-repo=\n\
    github-account=%s\n\
    github-pat=%s\n\
    \n\
    mongo-ip=%s\n\
    mongo-port=%d\n" $github_user $github_token $mongo_ip $mongo_port > deploy.properties
else
    printf "local-maven-repo=%s\n\
    github-account=%s\n\
    github-pat=%s\n\
    \n\
    mongo-ip=%s\n\
    mongo-port=%d\n" $local_maven $github_user $github_token $mongo_ip $mongo_port > deploy.properties
fi

for file in `ls deploy-files`
do
    echo
    echo "### deploy "$file" -> "$ctn_ip"#"$ctn_port" ###"
    echo
    java -jar rewin.service.ubsi.repo-2.3.0-jar-with-dependencies.jar deploy-files/$file $ctn_ip $ctn_port -local
done
rm -rf deploy.properties

##################################################################

cd webapi
printf "{\n\
  \"io_threads\": 4,\n\
  \"timeout_connect\": 5,\n\
  \"timeout_request\": 10,\n\
  \"timeout_reconnect\": 600,\n\
  \"redis_host\": \"%s\",\n\
  \"redis_port\": %d,\n\
  \"redis_conn_idle\": 2,\n\
  \"redis_conn_max\": 16\n\
}\n" $redis_ip $redis_port > rewin.ubsi.consumer.json
printf "{\n\
  \"url\": \"http://%s:8080/rest\",\n\
  \"gateway\": false\n\
}\n" $ctn_ip > rewin.ubsi.rest.json

rm -rf nohup.out
./start.sh 2>/dev/null
cd ..

echo
pause "ubsi web-script-api will be start"
ps -ef | grep "java -jar rewin.rest.ubsi.script" | grep -v grep

##################################################################

echo
pause "build and run docker image \"ubsi-admin\" with nginx"
cd docker
./build.sh $ctn_ip
cd ..

##################################################################

echo
echo "##################################################################"
echo
echo "UBSI-Admin started, you can access 'http://$ctn_ip:8090' now."
echo "    login user/password: admin/abcde321"
echo

