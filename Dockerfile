# Step 1: Use a node base image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code (in development, this is managed via volumes in docker-compose.yml)
COPY . .

# Step 6: Expose the port
EXPOSE 3000

# Step 7: Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
