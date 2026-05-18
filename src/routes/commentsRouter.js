const express = require("express");

const router = express.Router();

const {
  getAllComments,
  getCommentsByPost,
  createComment
} = require("../controllers/commentsController");

console.log({
  getAllComments,
  getCommentsByPost,
  createComment
});


// GET ALL COMMENTS
router.get("/", getAllComments);

// GET COMMENTS BY POST
router.get("/post/:postId", getCommentsByPost);

// CREATE COMMENT
router.post("/", createComment);

module.exports = router;