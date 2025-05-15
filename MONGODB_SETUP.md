# MongoDB Setup for SoVerySocial

This document provides instructions for setting up MongoDB for local development of the SoVerySocial application.

## Local Development Setup

### Option 1: MongoDB Community Edition

1. **Install MongoDB Community Edition**:
   - For macOS: `brew install mongodb-community`
   - For Windows: Download and install from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - For Linux: Follow the instructions for your specific distribution on the [MongoDB documentation](https://docs.mongodb.com/manual/administration/install-on-linux/)

2. **Start MongoDB service**:
   - For macOS: `brew services start mongodb-community`
   - For Windows: MongoDB should run as a service
   - For Linux: Usually `sudo systemctl start mongod`

3. **Create the database**:
   ```bash
   mongosh
   use soVerySocial
   exit
   ```

### Option 2: MongoDB Atlas (Cloud Option)

If you prefer using a cloud MongoDB instance:

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Set up a new cluster (the free tier is sufficient for development)
3. Create a database user with read/write privileges
4. Whitelist your IP address
5. Get your connection string from the "Connect" button
6. Replace the connection string in `.env.local` with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/soVerySocial?retryWrites=true&w=majority
   ```

### Option 3: Docker

If you prefer using Docker:

1. Install [Docker](https://docs.docker.com/get-docker/)
2. Run MongoDB in a container:
   ```bash
   docker run --name mongodb -d -p 27017:27017 mongo:latest
   ```

## Setup .env.local

Create a `.env.local` file in the root of your project with the following content:

```
MONGODB_URI=mongodb://localhost:27017/soVerySocial
```

For MongoDB Atlas, use the connection string provided by Atlas.

## Verification

To verify that MongoDB is properly connected:

1. Start the application: `npm run dev`
2. Navigate to `http://localhost:3000`
3. The application should display mock posts from the database
4. Check the console for any connection errors

## Troubleshooting

- **Connection refused**: Ensure MongoDB service is running
- **Authentication failed**: Check username and password in connection string
- **Cannot find module 'mongodb'**: Run `npm install mongodb mongoose`
- **Network error**: Check firewall settings or VPN that might block connections 