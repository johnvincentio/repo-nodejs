# Redis

[Redis](https://redis.io/)

[Redis Commands](https://redis.io/commands)

[ref](https://hackernoon.com/using-redis-with-node-js-8d87a48c5dd7)

[ref](https://www.codementor.io/brainyfarm/caching-with-redis-node-js-example-h6o9ii72i)

Workspace `/Users/jv/Desktop/MyDevelopment/github/nodejs/repo-nodejs/redis`

## Installation

Install into my tools folder

```
cd /Users/jv/Desktop/OtherTools
```

```
wget http://download.redis.io/releases/redis-5.0.4.tar.gz
tar xzf redis-5.0.4.tar.gz
cd redis-5.0.4
make
```

Server is

```
/Users/jv/Desktop/OtherTools/redis-5.0.4/src/redis-server
```

## Configuration

Add to `.bash_profile`

```
#
#  add Redis
#
export REDIS_HOME=/Users/jv/Desktop/OtherTools/redis-5.0.4/src
# echo "REDIS_HOME Home: $REDIS_HOME"
start-redis() { echo "Start Redis"; cd /Users/jv/Desktop/MyDevelopment/github/repo_shell_scripts/mac/redis; ./start-database; }
echo ""
echo "start-redis will start the redis database"
echo ""
```

Create scripts in `/Users/jv/Desktop/MyDevelopment/github/repo_shell_scripts/mac/redis`

`redis.conf` which I copied from `https://raw.githubusercontent.com/antirez/redis/4.0/redis.conf`

Note this writes to `dump.rdb`

`start-database`

```
#!/bin/sh
#
# script to start redis server
#
# Start Redis
#
CURRENT_DIR="`pwd`"
REDIS_DATA=${CURRENT_DIR}/dump.rdb
REDIS_CONFIG_FILE=${CURRENT_DIR}/redis.conf
echo "Redis Data: $REDIS_DATA"
echo "Redis Config File: $REDIS_CONFIG_FILE"
#
echo Starting redis
$REDIS_HOME/redis-server $REDIS_CONFIG_FILE
#
```

`start-console`

```
#!/bin/sh
#
# script to start redis command line
#
# Start Redis CLI
#
echo Starting Redis command line
$REDIS_HOME/redis-cli
#
```

## Start Redis Server

```
start-redis
```

## Redis CLI

Basic Test

```
redis 127.0.0.1:6379> ping
PONG
redis 127.0.0.1:6379> set mykey hello
OK
redis 127.0.0.1:6379> get mykey
"hello"
```

## Node Application

```
npm install --save axios redis response-time
```

[Google API Manager](https://console.developers.google.com/)

* Select the Project
* From Credentials, select the api key
* Add to HTTP referrers `localhost:8080`


