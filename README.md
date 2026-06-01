🚀 Full Stack REST API

Node.js • Express • PostgreSQL • Swagger

Production-ready REST API built with Node.js, Express and PostgreSQL.

This project demonstrates backend development best practices, including relational database design, RESTful architecture, CRUD operations, automated testing, and OpenAPI documentation.

🚀 Technologies Used
Node.js
Express.js
PostgreSQL
pg (node-postgres)
Swagger / OpenAPI 3.0
Jest
Supertest
dotenv
📁 Project Structure
src/
├── controllers/
├── services/
├── routes/
├── db/
├── middlewares/
├── utils/
├── config/
├── app.js
└── server.js

tests/
└── app.test.js

setup.sql
seed.sql
openapi.yaml
.env.example
✨ Features
Authors
Create author
Get all authors
Get author by ID
Update author
Delete author
Posts
Create post
Get all posts
Get post by ID
Update post
Delete post
Filter posts by author
Comments
Create comment
Get all comments
Get comments by post
Author and post relationships
🧾 Database Design
Authors
id
name
email
bio
created_at
Posts
id
author_id
title
content
published
created_at
Comments
id
post_id
author_id
content
created_at
🔗 Entity Relationships
Authors (1) ────< Posts (Many)
Authors (1) ────< Comments (Many)
Posts (1) ────< Comments (Many)

Foreign keys enforce relational integrity between entities.

🔐 Validations
Authors
name is required
email is required
email must be unique
Posts
title is required
content is required
author_id is required
Comments
post_id is required
author_id is required
content is required
📡 HTTP Status Codes

The API returns appropriate HTTP responses:

200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
500 Internal Server Error
⚙️ Local Installation
1. Clone Repository
git clone https://github.com/katherine-vasquez/full-stack-rest-api.git
cd full-stack-rest-api
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file based on .env.example

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=8080
4. Create Database

Run:

setup.sql

Then populate sample data:

seed.sql
5. Start Development Server
npm run dev

Server:

http://localhost:8080
🧪 Automated Testing

Run tests:

npm test

Current coverage includes:

Authors CRUD
Posts CRUD
Comments CRUD
Validation handling
Error scenarios
📘 OpenAPI Documentation

The project includes a complete OpenAPI specification file:

openapi.yaml

Documented features:

Endpoints
Request bodies
Path parameters
Response schemas
HTTP status codes
📖 Interactive Swagger Documentation

Available via Swagger UI:

👉 https://proyectom2katherinevasquez-production.up.railway.app/api-docs/

☁️ Deployment (Live Demo)

Live API:

👉 https://proyectom2katherinevasquez-production.up.railway.app

Includes:

Node.js API
PostgreSQL database
Swagger documentation
🏗️ Architecture

The application follows a layered architecture:

Routes
   ↓
Controllers
   ↓
Services
   ↓
PostgreSQL Database

Responsibilities:

Routes
Define API endpoints

Controllers
Handle requests and responses

Services
Business logic and SQL queries

Database
Data persistence and relationships

🤖 AI-Assisted Development

AI tools were used as development support for:

Documentation improvements
Debugging assistance
Code structure suggestions
API design support

All implementation, testing, and deployment were completed and verified manually during development.

✅ Project Status
REST API completed
PostgreSQL integration completed
CRUD operations completed
Entity relationships implemented
Comments feature implemented
Automated tests passing
OpenAPI documentation completed
Swagger UI deployed
📦 Repository

GitHub:
https://github.com/katherine-vasquez/full-stack-rest-api

👩‍💻 Author

Katherine Vasquez
Software Developer in Training • Full Stack Developer in Training • Backend Development • API Design • PostgreSQL