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

    // =========================
    // AUTHORS
    // =========================
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

    // =========================
    // AUTHORS BY ID
    // =========================
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
          200: {
            description: "Autor encontrado"
          },

          404: {
            description: "Autor no encontrado"
          }
        }
      },

      put: {
        summary: "Actualizar autor por ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              example: {
                name: "Juan Actualizado",
                email: "juanupdated@email.com",
                bio: "Bio actualizada"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Autor actualizado"
          },

          404: {
            description: "Autor no encontrado"
          }
        }
      },

      delete: {
        summary: "Eliminar autor por ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],

        responses: {
          200: {
            description: "Autor eliminado"
          },

          404: {
            description: "Autor no encontrado"
          }
        }
      }
    },

    // =========================
    // POSTS
    // =========================
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
    },

    // =========================
    // POSTS BY ID
    // =========================
    "/posts/{id}": {

      get: {
        summary: "Obtener post por ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],

        responses: {
          200: {
            description: "Post encontrado"
          },

          404: {
            description: "Post no encontrado"
          }
        }
      },

      put: {
        summary: "Actualizar post por ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              example: {
                title: "Post actualizado",
                content: "Contenido actualizado",
                author_id: 1,
                published: false
              }
            }
          }
        },

        responses: {
          200: {
            description: "Post actualizado"
          },

          404: {
            description: "Post no encontrado"
          }
        }
      },

      delete: {
        summary: "Eliminar post por ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],

        responses: {
          200: {
            description: "Post eliminado"
          },

          404: {
            description: "Post no encontrado"
          }
        }
      }
    },

    // =========================
    // POSTS BY AUTHOR
    // =========================
    "/posts/author/{authorId}": {

      get: {
        summary: "Obtener posts por author ID",

        parameters: [
          {
            name: "authorId",
            in: "path",
            required: true
          }
        ],

        responses: {
          200: {
            description: "Lista de posts del autor"
          },

          404: {
            description: "Autor no encontrado"
          }
        }
      }
    }
  }
};

module.exports = swaggerDocument;