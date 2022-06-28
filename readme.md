# DevGeekWeek 2022 - Node.js & React

## Overview
1. Node.js Async programing
2. Building Api
3. Testing our Api
4. Error handling
5. Common libs: cors,joi,dotEnv

#### Api:
[products](https://dummyjson.com/docs/products)
### Node.js
#### Testing your environment
1. open `CMD`
2. Run 
      ```cmd
       node -v
    ```
2. Run 
      ```cmd
       npm -v
    ```
4. Type `node` press `enter`
5. declare Javascript variable and print it
    ```js
    > const userName = 'Gal'
    > userName
    ```
#### Structure
- Create the following folders under the root folder:
1. `apps` > `api`
2. `apps` > `client` ( in the next part of the class)
3. examples
- files
1. `.gitignore`

#### Async programing
1. `Callback`
2. `Promise`
3. `Async` `await`

#### Building our API
- Install Globals 
    ```
    npm install -g typescript -g nodemon -g concurrently
    ```
- Navigate to the api folder
- Run 
  ```cmd
  npm init
  ```
- Answer the interactive questions
- Paste the following Json in the `package.json` file under `dependencies` key

    ```js

    {
        
        "concurrently": "^6.2.0",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "joi": "^17.4.0",
        "mysql": "^2.18.1",
        "nodemon": "^2.0.7",
        "ts-node": "^10.0.0",
        "typescript": "^4.3.2",
        "winston": "^3.3.3"
    },

    ```
- Paste the following Json in the `package.json` file under `devDependecies` key
    ```js
    {
        "@types/joi": "^17.2.3",
        "@types/express": "^4.17.12",
        "@types/node": "^15.12.2"
    }  
    ```

- Install the dependencies
- Run 
  ```cmd
  npm install
  ```
  Or
    ```cmd
  npm i
  ```

- Typescript Setup
    1. Add `tsconfig.json` file to the `api`
    ```js 
    {
        "compilerOptions": {
            "module": "commonjs",
            "outDir": "dist",
            "target": "ES2015",
            "esModuleInterop": true,
            "resolveJsonModule": true,
            "baseUrl": "src"
        },
        "include": [
            "./src"
        ],
        "exclude": [
            "node_modules"
        ]
    }
    ```
    - concurrently script
    ```js
    "_run-all": "concurrently -k -p \"[{name}]\" -n \"TypescriptCompiler,application\" -c \"red.bold,yellow.bold,\" \"npm run build_watch\" \"npm run dev\"",
    ```

#### Express
1. Initial HTTP Server snippet
2. Create the first entry point
```js
app.get('/healthcheck', function (req, res) {
  res.send('Api is working')
})
```

3. Entry points
 - GET `/products`
 - GET `/products/:id`
 - GET `/products/search?q=param`
 - POST `/auth/login`


4. Create Router
    ```js
    const express = require('express')
    const router = express.Router()
    router.get('/products/search', function (req, res) {
    // implementation 
    })

    ```

## React

#### install globals
`npm install -g create-react-app`
#### creating react applicaiton
`npx create-react-app <APP_NAME> --template typescript`

#### Project
1. React Cli 
2. Project structure
3. Component based
4. Containers / Pages
5. Hooks 


