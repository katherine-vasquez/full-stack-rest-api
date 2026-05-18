# 📌 Blog API – Node.js + Express + PostgreSQL

API REST desarrollada con Node.js, Express y PostgreSQL que simula un sistema tipo JSONPlaceholder con autores, posts y comentarios.

El proyecto incluye CRUD completo, validaciones, tests automatizados, documentación OpenAPI (Swagger) y despliegue en Railway.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Jest + Supertest (testing)
- Swagger / OpenAPI 3.0
- Railway (deploy)

---

## 📁 Estructura del proyecto


src/
├── controllers/
├── services/
├── routes/
├── db/
├── app.js
└── server.js

tests/
└── app.test.js

openapi.yaml
.env.example


---

## ⚙️ Instalación del proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/katherine-vasquez/proyectom2_katherinevasquez.git
cd proyectom2_katherinevasquez
2. Instalar dependencias
npm install
3. Variables de entorno

Crear archivo .env basado en .env.example:

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=nombre_db
PORT=8080
4. Base de datos

Ejecutar scripts SQL:

setup.sql → creación de tablas
seed.sql → datos iniciales
▶️ Ejecución del proyecto
npm run dev

Servidor corriendo en:

http://localhost:8080
📘 Swagger (OpenAPI)

Documentación disponible en producción:

👉 https://proyectom2katherinevasquez-production.up.railway.app/api-docs/

🌐 Deploy en Railway

API desplegada en:

👉 https://proyectom2katherinevasquez-production.up.railway.app

🧪 Tests

Ejecutar tests automatizados:

npm test

Incluye:

CRUD authors
CRUD posts
CRUD comments
Validaciones de errores
📌 Funcionalidades
👤 Authors
Crear autor
Obtener todos
Obtener por ID
Actualizar
Eliminar
📝 Posts
CRUD completo
Relación con authors
💬 Comments
Crear comentarios
Obtener comentarios
Obtener por post
🔐 Validaciones
name obligatorio (authors)
email único
title, content, author_id obligatorios (posts)
manejo de errores HTTP
🧠 Arquitectura
Routes → endpoints
Controllers → lógica HTTP
Services → lógica SQL
DB → conexión PostgreSQL
🤖 Uso de IA

Se utilizó IA (ChatGPT) como apoyo para:

depuración de errores
estructura de tests
optimización de SQL
revisión de arquitectura
🏆 Estado del proyecto

✔ API funcional
✔ Tests pasando
✔ Swagger activo
✔ Deploy en Railway
✔ Listo para entrega