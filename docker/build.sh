#!/bin/bash

sed s#_localhost_ip_#$1# nginx.conf > web.conf
docker container rm -f ubsi-admin 1>/dev/null 2>&1
docker rmi ubsi-admin 1>/dev/null 2>&1
docker build -t ubsi-admin .
docker run --name ubsi-admin -p 8090:8090 -d ubsi-admin
rm -rf web.conf

