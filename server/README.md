# Setting up postgres Database on for development.
If you do not have docker installed on your system do it now:
Docker: [https://www.docker.com/]
Docker Docs: [https://docs.docker.com/]

1. add the following line to your .env file "/server/.env"  
```DATABASE_URL=postgres://eotuser:eotdevpassword@localhost:5432/eotdb```
2. Navigate to ```/server``` directory
3. Run ```docker-compose -f docker-compose-dev.yml up``` to download, build, and start the postgres docker container. ( add "-d" flag to run detached from the terminal)
4. Navigate to ```/server```
5. Run ```npx prisma migrate dev``` to create tables and apply any migrations.

### View DB logs

```bash
docker-compose logs -f eotdb
```

### Note:
This docker image will automatically create a folder ```/server/postgres-data``` that allows data to persist on your local machine after the docker image closes.  this directory shoud be added to .gitignore and any future .dockerignore files.

