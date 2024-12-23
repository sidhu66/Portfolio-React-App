# Use Node.js 18 with Alpine Linux (lightweight base image)
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Expose port 3000 for the React development server
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
