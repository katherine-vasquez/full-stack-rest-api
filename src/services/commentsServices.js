const pool = require("../db/config");

console.log("commentsServices LOADED");

// =========================
// GET ALL COMMENTS
// =========================
const getAllComments = async () => {
  const result = await pool.query(`
    SELECT
      comments.id,
      comments.content,
      comments.created_at,
      authors.name AS author_name,
      posts.title AS post_title
    FROM comments
    JOIN authors
      ON comments.author_id = authors.id
    JOIN posts
      ON comments.post_id = posts.id
    ORDER BY comments.id ASC
  `);

  return result.rows;
};

// =========================
// GET COMMENTS BY POST
// =========================
const getCommentsByPost = async (postId) => {
  const result = await pool.query(
    `
    SELECT
      comments.id,
      comments.content,
      comments.created_at,
      authors.name AS author_name
    FROM comments
    JOIN authors
      ON comments.author_id = authors.id
    WHERE comments.post_id = $1
    ORDER BY comments.id ASC
    `,
    [postId]
  );

  return result.rows;
};

// =========================
// CREATE COMMENT
// =========================
const createComment = async ({
  post_id,
  author_id,
  content
}) => {
  const result = await pool.query(
    `
    INSERT INTO comments
    (
      post_id,
      author_id,
      content
    )
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [
      post_id,
      author_id,
      content
    ]
  );

  return result.rows[0];
};

module.exports = {
  getAllComments,
  getCommentsByPost,
  createComment
};

console.log("EXPORT CHECK:", {
  getAllComments,
  getCommentsByPost,
  createComment
});