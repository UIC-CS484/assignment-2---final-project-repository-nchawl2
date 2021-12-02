FROM node:14.18.1

LABEL version="1.0"
LABEL description="Docker image for FootWiz"
LABEL maintainer="nchawl2@uic.edu"

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


# CMD ["node", "docker.js"]