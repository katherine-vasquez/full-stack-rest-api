const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Blog API",
    version: "1.0.0",
    description: "API REST con Express y PostgreSQL"
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ],
  paths: {
    "/authors": {
      get: {
        summary: "Obtener todos los autores",
        responses: {
          200: {
            description: "Lista de autores"
          }
        }
      },
      post: {
        summary: "Crear un autor",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                name: "Juan",
                email: "juan@email.com",
                bio: "Autor de prueba"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Autor creado"
          }
        }
      }
    },

    "/authors/{id}": {
      get: {
        summary: "Obtener autor por ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],
        responses: {
          200: { description: "Autor encontrado" },
          404: { description: "No encontrado" }
        }
      }
    },

    "/posts": {
      get: {
        summary: "Obtener todos los posts",
        responses: {
          200: {
            description: "Lista de posts"
          }
        }
      },
      post: {
        summary: "Crear un post",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                title: "Mi post",
                content: "Contenido",
                author_id: 2,
                published: true
              }
            }
          }
        },
        responses: {
          201: {
            description: "Post creado"
          }
        }
      }
    }
  }
};

module.exports = swaggerDocument;