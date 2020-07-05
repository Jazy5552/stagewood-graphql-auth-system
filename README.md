# stagewood-graphql-auth-system
A simple Login/Register system made with GraphQL for the StageWood Developer Position Test

## Development
You will need to install VSCode, Docker, and the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) (ms-vscode-remote.remote-containers) extension in order to run the development server.
### Get Started
**Clone the repo and open the project/workspace within VSCode (Ensure you open in a container with remote-containers)**
**Install the `backend` dependencies and start the server:**
```sh
cd stagewood-auth-system-backend
mv .env.example .env # Set any app env variables as appropriate
mv prisma/.env.example prisma/.env # Set any prisma env variables as appropriate
yarn install
yarn prisma # Migrates the database and generates the prisma client
yarn start
```
**Install the `frontend` dependencies and start the server:**
```sh
cd stagewood-auth-system-frontend
yarn install
yarn start
```
The `frontend` will be accessable at [http://localhost:3000](http://localhost:3000) and the `backend` (graphql playground) at [http://localhost:4000](http://localhost:4000)
## Dev Deployment
Make sure you have Docker Compose installed. Once inside the project root directory, run `docker-compose up`.
The `frontend` will be accessable at [http://localhost:3000](http://localhost:3000) and the `backend` (graphql playground) at [http://localhost:4000](http://localhost:4000)