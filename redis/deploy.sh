#!/bin/bash
i = 1
while sleep 5;do
	i=$((i+1))	
	echo "Getting Redis Docker $i up ---"
	echo "$PWD/node-$i"
	docker run -d -v $PWD/node-$i.conf:/etc/redis/redis.conf --name redis-$i --net host redis redis-server /etc/redis/redis.conf
	if [ $i -eq 3 ];then
		echo "done"
		exit 1
	fi
done
