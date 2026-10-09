# Student Test Express C

A lightweight Node.js + Express microservice created for College Cloud CI/CD Manager integration and multi-tenant testing.

## Service Specification
- **Student Owner:** Student C
- **Runtime:** Node.js (v20+) / Express
- **Container Port:** `3001`
- **Assigned Public Port:** `3023`

## API Endpoints
- `GET /` — Returns service metadata JSON:
  ```json
  {
    "service": "student-test-express-c",
    "student": "Student C",
    "status": "online"
  }
  ```
- `GET /health` — Returns health probe JSON:
  ```json
  {
    "status": "ok"
  }
  ```

## Local Development & Testing
```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Start application locally
npm start
```

## Docker Build
```bash
docker build -t student-test-express-c .
docker run -p 3001:3001 student-test-express-c
```
test -1
