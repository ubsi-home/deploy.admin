#!/bin/bash

pid=`ps -ef | grep "java -Djava.net.preferIPv4Stack=true -jar rewin.ubsi.core" | grep -v grep | awk '{print $2}'`
if [ -n $pid ]
then
  kill $pid
  sleep 2s
fi

nohup java -Djava.net.preferIPv4Stack=true -jar rewin.ubsi.core-2.3.1-jar-with-dependencies.jar &

