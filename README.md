# About this Project
This is a simple `Next.js` web application that takes user's data processes it and stores it in `MongoDB`, which setup using `docker`. The sole purpose of this project is to understand the working of `docker` while developing a **Full-Stack Web Application**, thus the main focus here is to setting things up in *docker environment*.

# How it is done in first place
- Create a desired `Next.js` web app, do some front-end & back-end shit
- Now we need to create our DB, thus pull official docker images of: `mongo` & `mongo-express`
- The next step would be to create a network where our DB's resources would be hosted locally, for a time
    - ```bash
        docker network create <name of network>
    
      ```
- Now we have our network, all is left to run containers:
    - `mongo` container:
        ```bash
            docker run -d \
            -p 27017:27017 \
            -e MONGO_INITDB_ROOT_USERNAME=['username of DB'] \
            -e MONGO_INITDB_ROOT_PASSWORD=['password of DB'] \
            --name ['name of DB'] \
            --net ['name of network'] \
            mongo
        ```
    - `mongo-express` container:
    ```bash
        docker run -d \
        -p 8081:8081 \
        -e ME_CONFIG_MONGODB_ADMINUSERNAME=['username of DB'] \
        -e ME_CONFIG_MONGODB_ADMINPASSWORD=['password of DB'] \
        -e ME_CONFIG_MONGODB_SERVER=['name of cotainer of DB'] \
        --name ['name of container'] \
        --net ['name of network'] \
        mongo-express
    ```
