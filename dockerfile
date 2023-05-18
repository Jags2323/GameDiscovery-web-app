# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using yarn)
COPY package*.json ./

# Install dependencies
RUN npm install     # or yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build   # or yarn build

# Serve the app with a static file server (optional)
# If you plan to use a reverse proxy or a different server to serve the app, you can omit this line
RUN npm install -g serve

# Set the command to run the app when the container starts
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port that the app will run on (optional, adjust to your desired port)
EXPOSE 3000
