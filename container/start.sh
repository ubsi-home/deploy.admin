#!/bin/bash

pid=`ps -ef | grep "java -jar rewin.ubsi.core" | grep -v grep | awk '{print $2}'`
if [ -n $pid ]
then
  kill -9 $pid
  sleep 2s
fi

nohup java -jar rewin.ubsi.core-2.3.0-jar-with-dependencies.jar &

