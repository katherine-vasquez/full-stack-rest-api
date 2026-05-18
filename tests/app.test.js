const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/config");

// ======================================================
// AUTHORS API
// ======================================================

describe("AUTHORS API", () => {

  test("GET /authors should return 200 and array", async () => {
    const res = await request(app).get("/authors");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // =========================
  // CREATE AUTHOR
  // =========================

  test("POST /authors - should create author and return 201", async () => {
    const uniqueEmail = `test_${Date.now()}@mail.com`;
  
    const res = await request(app).post("/authors").send({
    name: "Test Author",
    email: uniqueEmail,
    bio: "Test bio"
  });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe(uniqueEmail);
  });

  // =========================
  // VALIDATION EMPTY FIELDS
  // =========================

  test("POST /authors - should return 400 if missing fields", async () => {
    const res = await request(app).post("/authors").send({
      name: ""
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Name y email son obligatorios");
  });

  // =========================
  // VALIDATION DUPLICATE EMAIL
  // =========================

  test("POST /authors - should fail if email already exists", async () => {
    const res = await request(app).post("/authors").send({
      name: "Duplicate User",
      email: "carlos@example.com",
      bio: "duplicate test"
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("El email ya existe");
  });

  // =========================
  // UPDATE AUTHOR
  // =========================

    test("PUT /authors/:id should update author", async () => {

    // crear autor
    const createRes = await request(app)
      .post("/authors")
      .send({
        name: "Autor Update",
        email: `update_${Date.now()}@mail.com`,
        bio: "bio original"
      });

    const authorId = createRes.body.id;

    // actualizar
    const res = await request(app)
      .put(`/authors/${authorId}`)
      .send({
        name: "Autor Actualizado",
        email: `updated_${Date.now()}@mail.com`,
        bio: "bio actualizada"
      });

    expect(res.statusCode).toBe(200);

    expect(res.body.name)
      .toBe("Autor Actualizado");

  });

  // =========================
  // DELETE AUTHOR
  // =========================
  test("DELETE /authors/:id should delete author", async () => {

    // crear autor
    const createRes = await request(app)
      .post("/authors")
      .send({
        name: "Autor Delete",
        email: `delete_${Date.now()}@mail.com`,
        bio: "delete test"
      });

    const authorId = createRes.body.id;

    // eliminar
    const res = await request(app)
      .delete(`/authors/${authorId}`);

    expect(res.statusCode).toBe(204);

  });


  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
  });

});

// ======================================================
// POSTS API
// ======================================================


describe("POSTS API", () => {
  
  // =========================
  // GET ALL POSTS
  // =========================

    test("GET /posts should return 200 and array", async () => {
  const res = await request(app).get("/posts");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

  // =========================
  // GET POST BY ID
  // =========================

test("GET /posts/:id should return a post", async () => {
  const res = await request(app).get("/posts/1");

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("id");
  expect(res.body.id).toBe(1);
});

  // =========================
  // GET POSTS BY AUTHOR
  // =========================

test("GET /posts/author/:id should return posts by author", async () => {
  const res = await request(app).get("/posts/author/1");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

 // =========================
  // CREATE POST
  // =========================

test("POST /posts should create a post and return 201", async () => {
  const res = await request(app).post("/posts").send({
    title: "Test Post",
    content: "Contenido del test post",
    author_id: 1,
    published: true
  });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("id");
  expect(res.body.title).toBe("Test Post");
});

  // =========================
  // VALIDATION POSTS
  // =========================

test("POST /posts should return 400 if missing fields", async () => {
  const res = await request(app).post("/posts").send({
    title: ""
  });

  expect(res.statusCode).toBe(400);
});

 // =========================
  // UPDATE POST
  // =========================
  test("PUT /posts/:id should update post", async () => {

    // crear post
    const createRes = await request(app)
      .post("/posts")
      .send({
        title: "Post Original",
        content: "contenido original",
        author_id: 1,
        published: true
      });

    const postId = createRes.body.id;

    // actualizar
    const res = await request(app)
      .put(`/posts/${postId}`)
      .send({
        title: "Post Actualizado",
        content: "contenido actualizado",
        author_id: 1,
        published: false
      });

    expect(res.statusCode).toBe(200);

    expect(res.body.title)
      .toBe("Post Actualizado");

  });

  // =========================
  // DELETE POST
  // =========================
  test("DELETE /posts/:id should delete post", async () => {

    // crear post
    const createRes = await request(app)
      .post("/posts")
      .send({
        title: "Post Delete",
        content: "contenido delete",
        author_id: 1,
        published: true
      });

    const postId = createRes.body.id;

    // eliminar
    const res = await request(app)
      .delete(`/posts/${postId}`);

    expect(res.statusCode).toBe(204);

  });

  
});

afterAll(async () => {
  await pool.end();
});

// ======================================================
// COMMENTS API
// ======================================================

describe("COMMENTS API", () => {

  // =========================
  // GET ALL COMMENTS
  // =========================
  test("GET /comments should return 200 and array", async () => {
    const res = await request(app).get("/comments");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // =========================
  // GET COMMENTS BY POST
  // =========================
  test("GET /comments/post/:postId should return comments", async () => {
    const res = await request(app).get("/comments/post/1");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // =========================
  // CREATE COMMENT
  // =========================
  test("POST /comments should create a comment and return 201", async () => {
    const res = await request(app)
      .post("/comments")
      .send({
        post_id: 1,
        author_id: 1,
        content: "Comentario de test automatizado"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.content).toBe("Comentario de test automatizado");
  });

  // =========================
  // VALIDATION TEST
  // =========================
  test("POST /comments should return 400 if missing fields", async () => {
    const res = await request(app)
      .post("/comments")
      .send({
        content: ""
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "post_id, author_id y content son obligatorios"
    );
  });

});