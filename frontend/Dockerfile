# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Expose port 3000 for the React development server
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]
