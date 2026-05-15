const request = require("supertest");
const app = require("../src/app");

describe("AUTHORS API", () => {

  test("GET /authors should return 200 and array", async () => {
    const res = await request(app).get("/authors");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

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

  test("POST /authors - should return 400 if missing fields", async () => {
    const res = await request(app).post("/authors").send({
      name: ""
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Name y email son obligatorios");
  });

  test("POST /authors - should fail if email already exists", async () => {
    const res = await request(app).post("/authors").send({
      name: "Duplicate User",
      email: "carlos@example.com",
      bio: "duplicate test"
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("El email ya existe");
  });

  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
  });

});

describe("POSTS API", () => {
    test("GET /posts should return 200 and array", async () => {
  const res = await request(app).get("/posts");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("GET /posts/:id should return a post", async () => {
  const res = await request(app).get("/posts/6");

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("id");
  expect(res.body.id).toBe(6);
});

test("GET /posts/author/:id should return posts by author", async () => {
  const res = await request(app).get("/posts/author/2");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("POST /posts should create a post and return 201", async () => {
  const res = await request(app).post("/posts").send({
    title: "Test Post",
    content: "Contenido del test post",
    author_id: 2,
    published: true
  });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("id");
  expect(res.body.title).toBe("Test Post");
});

test("POST /posts should return 400 if missing fields", async () => {
  const res = await request(app).post("/posts").send({
    title: ""
  });

  expect(res.statusCode).toBe(400);
});

});