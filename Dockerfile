# Start with Node.js 18 (lightweight Alpine Linux version)
FROM node:18-alpine

# Set the working directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy all application files
COPY . .

# Tell Docker our app uses port 3000
EXPOSE 3000

# Check if app is healthy every 30 seconds
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => { process.exit(r.statusCode === 200 ? 0 : 1); })"

# Command to run when container starts
CMD ["npm", "start"]