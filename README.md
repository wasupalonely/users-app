<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Dev

1. Clone the project
2. Copy the ```env.template``` and rename it to ```.env```.
3. Run 
   ```
   yarn install
   ```

4. Run the database image (Docker Desktop required)
   ```
   docker-compose up -d
   ```

5. Run the Nest server
   ```
    yarn start:dev
   ```

6. Login at [localhost:3000/graphql](localhost:3000/graphql)