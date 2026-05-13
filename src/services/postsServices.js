const pool = require("../db/config");

// =========================
// GET ALL POSTS
// =========================
const getAllPosts = async () => {
  const result = await pool.query(`
    SELECT
      posts.id,
      posts.title,
      posts.content,
      posts.published,
      posts.created_at,
      authors.name AS author_name
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    ORDER BY posts.id ASC
  `);

  return result.rows;
};

// =========================
// GET POST BY ID
// =========================
const getPostById = async (id) => {
  const result = await pool.query(
    `
    SELECT
      posts.id,
      posts.title,
      posts.content,
      posts.published,
      posts.created_at,
      authors.name AS author_name
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    WHERE posts.id = $1
    `,
    [id]
  );

  return result.rows[0];
};

// =========================
// GET POSTS BY AUTHOR
// =========================
const getPostsByAuthor = async (authorId) => {
  const result = await pool.query(
    `
    SELECT
      posts.id,
      posts.title,
      posts.content,
      posts.published,
      posts.created_at
    FROM posts
    WHERE author_id = $1
    ORDER BY id ASC
    `,
    [authorId]
  );

  return result.rows;
};

// =========================
// CREATE POST
// =========================
const createPost = async ({
  title,
  content,
  author_id,
  published
}) => {
  const result = await pool.query(
    `
    INSERT INTO posts
    (
      title,
      content,
      author_id,
      published
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [
      title,
      content,
      author_id,
      published
    ]
  );

  return result.rows[0];
};

// =========================
// UPDATE POST
// =========================
const updatePost = async (
  id,
  {
    title,
    content,
    author_id,
    published
  }
) => {
  const result = await pool.query(
    `
    UPDATE posts
    SET
      title = $1,
      content = $2,
      author_id = $3,
      published = $4
    WHERE id = $5
    RETURNING *
    `,
    [
      title,
      content,
      author_id,
      published,
      id
    ]
  );

  return result.rows[0];
};

// =========================
// DELETE POST
// =========================
const deletePost = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM posts
    WHERE id = $1
    RETURNING id, title
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
};