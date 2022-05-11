#!/bin/bash

pid=`ps -ef | grep "java -jar rewin.rest.ubsi.script" | grep -v grep | awk '{print $2}'`
if [ -n $pid ]
then
  kill -9 $pid
  sleep 2s
fi

nohup java -jar rewin.rest.ubsi.script-1.0.5.jar &
