# Labs-Challenge

The objective of the challenge is to build a Front-End and a Back-End that interact with an external API.

I'm going to use Mercado Libre's public API. From it I will extract posts that I will then save to my own back-end using a cache. For the Fron-end I am going to develop a series of React Components to be able to display and interact with the mentioned publications.

## Starting 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._

See **Deployment** to know how to deploy the project.

### Pre-requirements 📋

_You would need to install Redis on your computer_

### Installation 🔧

**On Mac**

_1. Create a folder on your computer called 'redis'._

_2. Copy the location of your folder._

```
For example: / Users / 'Your User' / Desktop
```

_3. Open a new Terminal._

_4. Enter on your Terminal: 'cd' + the location of your folder + '/redis/._

_5. Please refer to this link: https://redis.io/download_

_6. Enter on your Terminal: 'curl -O' + the link from the first step of **Installation: From code source** without the 'wget'._

```
For example: curl -O https://download.redis.io/releases/redis-6.0.9.tar.gz
```

_7. Enter on your Terminal: the second step of **Installation: From code source**_

```
For example: tar xzf redis-6.0.9.tar.gz
```

_8. Enter on your Terminal: the third step of **Installation: From code source**_

```
For example: cd redis-6.0.9
```

_9. Enter on your Terminal: make_

_10. Enter on your Terminal: make test_

_11. Enter on your Terminal: clear_

_12. Enter on your Terminal: src/redis-server_

_Now Redis is running on port 6379_

**On Windows**

_1. Please refer to this link: https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows_

_2. Download either .msi or .zip file, this tutorial will let you download latest zip file
Redis-x64-3.2.100.zip._

_2. Extract the zip file to prepared directory._

_3. Run redis-server.exe, you can either directly run redis-server.exe by clicking or run via command prompt._

_Now Redis is running on port 6379_

## How to run the entire project ⚙️

_Back-end_

_1. Open a new terminal_

_2. Open the 'Labs Challenge' folder_

_3. Enter on your Terminal: cd api_

_4. Enter on your Terminal: npm install. By doing this you will install all the dependencies._

_5. Enter on your Terminal: npm start_

_Now you would be able to see: '---> Listerning at port 8080'_

_Front-end_

_1. Open a new terminal_

_2. Open the 'Labs Challenge' folder_

_3. Enter on your Terminal: cd client2_

_4. Enter on your Terminal: npm install. By doing this you will install all the dependencies._

_5. Enter on your Terminal: npm start_

_Now the project will run on your Localhost 3000_
