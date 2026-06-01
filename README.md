# 🚀 Full Stack REST API

Node.js • Express • PostgreSQL • Swagger • Railway

Production-ready REST API built with Node.js, Express and PostgreSQL.

This project demonstrates backend development best practices, including relational database design, RESTful architecture, CRUD operations, automated testing, OpenAPI documentation, and cloud deployment.

---

# 🚀 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Swagger / OpenAPI 3.0
- Jest
- Supertest
- Railway
- dotenv

---

# 📁 Project Structure

```text
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
```

---

# ✨ Features

## Authors

- Create author
- Get all authors
- Get author by ID
- Update author
- Delete author

## Posts

- Create post
- Get all posts
- Get post by ID
- Update post
- Delete post
- Filter posts by author

## Comments

- Create comment
- Get all comments
- Get comments by post
- Author and post relationships

---

# 🧾 Database Design

### Authors

- id
- name
- email
- bio
- created_at

### Posts

- id
- author_id
- title
- content
- published
- created_at

### Comments

- id
- post_id
- author_id
- content
- created_at

---

# 🔗 Entity Relationships

```text
Authors (1) ────< Posts (Many)

Authors (1) ────< Comments (Many)

Posts (1) ────< Comments (Many)
```

Foreign keys use referential integrity rules and cascade deletion where appropriate.

---

# 🔐 Validations

### Authors

- name is required
- email is required
- email must be unique

### Posts

- title is required
- content is required
- author_id is required

### Comments

- post_id is required
- author_id is required
- content is required

---

# 📡 HTTP Status Codes

The API returns appropriate HTTP responses:

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

---

# ⚙️ Local Installation

## 1. Clone Repository

```bash
git clone https://github.com/katherine-vasquez/proyectom2_katherinevasquez.git
cd proyectom2_katherinevasquez
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file based on `.env.example`

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=8080
```

## 4. Create Database

Run:

```sql
setup.sql
```

Then populate sample data:

```sql
seed.sql
```

## 5. Start Development Server

```bash
npm run dev
```

Server:

```text
http://localhost:8080
```

---

# 🧪 Automated Testing

Run tests:

```bash
npm test
```

Current coverage includes:

- Authors CRUD
- Posts CRUD
- Comments CRUD
- Validation handling
- Error scenarios

---

# 📘 OpenAPI Documentation

The project includes a complete OpenAPI specification file:

```text
openapi.yaml
```

Documented features:

- Endpoints
- Request bodies
- Path parameters
- Response schemas
- HTTP status codes

---

# 📖 Interactive Swagger Documentation

Available in production:

https://proyectom2katherinevasquez-production.up.railway.app/api-docs/

Swagger UI allows testing all endpoints directly from the browser.

---

# ☁️ Deployment

Production deployment hosted on Railway:

https://proyectom2katherinevasquez-production.up.railway.app

Deployment includes:

- Node.js API
- PostgreSQL database
- Environment variables
- Swagger documentation

---

# 🏗️ Architecture

The application follows a layered architecture:

```text
Routes
   ↓
Controllers
   ↓
Services
   ↓
PostgreSQL Database
```

### Responsibilities

**Routes**
- Define API endpoints

**Controllers**
- Handle requests and responses

**Services**
- Business logic and SQL queries

**Database**
- Data persistence and relationships

---

# 🤖 AI-Assisted Development

AI tools were used as development assistants for:

- Documentation improvements
- Error debugging
- Code review support
- API development guidance

All implementation, testing, validation, deployment, and project integration were completed and verified within the development workflow.

---

# ✅ Project Status

- REST API completed
- PostgreSQL integration completed
- CRUD operations completed
- Entity relationships implemented
- Comments feature implemented
- Automated tests passing
- OpenAPI documentation completed
- Swagger UI deployed
- Railway deployment completed

---

# 📦 Repository

GitHub Repository:

https://github.com/katherine-vasquez/proyectom2_katherinevasquez

---

# 👩‍💻 Author

Katherine Vasquez

Backend Development • Full Stack Development • API Design • Database Systems