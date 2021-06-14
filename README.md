# Legacy Docs - to be removed

## A. Setup

### Prerequisites
 - Install the latest NodeJS from this site
   ```
   https://nodejs.org/en/
   ```
- Then following 1 of these 2 methods: 
##### a) Manual
   - Setup MySQL  
        + Install XAMPP
        + Start XAMPP server
        + Open browser at url: `http://localhost/phpmyadmin/server_databases.php` to access phpmyadmin
        + Create database with the name as you want
        
   
   - Clone this repo and navigate into project folder
##### b) Docker
Install docker from instruction in https://docs.docker.com
## B. Installing

- Install all related packages. Navigate to `[root]/backend` folder run this command: 
```
npm install
```
or
```
yarn install
```

- Run the following command to copy `.env` from sample `.env` file depends on which environment you are running on
```
 copy env.sample.local .env
```
or
```
 copy env.sample.dev .env
```

- Configure settings in the new .env, point them to local environment if you run this server on local machine.
 
 For example, the following config is used to run server at port `5500`, connected to MySQL DB hosted on `localhost`, database: `auction_live`
```
# Express Config
PORT=5500

#General Database Config
DEFAULT_DATABASE_CONNECTION_NAME=auction_live
DEFAULT_DATABASE_TYPE=mysql
DEFAULT_DATABASE_HOST=localhost
DEFAULT_DATABASE_PORT=3306
DEFAULT_DATABASE_USERNAME=admin
DEFAULT_DATABASE_PASSWORD=@dmin123
DEFAULT_DATABASE_NAME=auction_live
```

- Run migration file
```
typeorm migration:run 
```

## C. Running app
#### 1. APIs
##### a) Manual
At the root of project, run this command:
* For development
```
  ts-node src/server.ts
```
Or
```
  npm start
```
* For production
```
    tsc --resolveJsonModule
```

Files are built into `build` folder. Run the following command
```
    node build/server.js
```

##### b) Docker
Run
```
    tsc --resolveJsonModule
```
Then
```
    docker-compose up
```


Server is hosted at port which is defined under `PORT` field in .env file
```
  http://localhost:PORT
```

The phpmyadmin is available at `http://localhost:8183`

#### 2. Swagger docs
API docs is served at:
```
  http://localhost:<PORT>/api-docs
```

#### 3. Socket
If you are using socket in this app. You can start an example socket client, try to connect to server and see what events are emitted
```
  http://localhost:<PORT>/socketClient
```

Event listeners are defined in `public/socketClient.html`. You can edit on demand.
