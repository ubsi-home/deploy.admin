cd container
nohup ./start.sh 2> /dev/null &
cd ..

cd webapi
nohup ./start.sh 2> /dev/null &
cd ..

docker start ubsi-admin
