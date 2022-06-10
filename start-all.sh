cd container
./start.sh 2> /dev/null
cd ..

cd webapi
./start.sh 2> /dev/null
cd ..

docker start ubsi-admin
