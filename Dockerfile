FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app
COPY --chown=node:node . .

# Set node ENV
ENV NODE_ENV production

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install 
RUN npm ci --only=production

# Bundle app source
COPY . .


EXPOSE 8080
USER node
CMD [ "node", "server.js" ]