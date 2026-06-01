const express = require("express");

const router = express.Router();

const {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/postsController");


// GET /posts
router.get("/", getAllPosts);

// GET /posts/author/:authorId
router.get("/author/:authorId", getPostsByAuthor);

// GET /posts/:id
router.get("/:id", getPostById);

// POST /posts
router.post("/", createPost);

// PUT /posts/:id
router.put("/:id", updatePost);

// DELETE /posts/:id
router.delete("/:id", deletePost);

module.exports = router;