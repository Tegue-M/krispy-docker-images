# Use the Node.js 14 image
FROM public.ecr.aws/docker/library/node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app files
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]