const commentsService = require("../services/commentsServices");

// GET ALL COMMENTS
const getAllComments = async (req, res, next) => {
  try {
    const comments = await commentsService.getAllComments();

    return res.status(200).json(comments);

  } catch (error) {
    next(error);
  }
};

// GET COMMENTS BY POST
const getCommentsByPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const comments = await commentsService.getCommentsByPost(postId);

    return res.status(200).json(comments);

  } catch (error) {
    next(error);
  }
};

// CREATE COMMENT
const createComment = async (req, res, next) => {
  try {
    const { post_id, author_id, content } = req.body;

    if (!post_id || !author_id || !content) {
      return res.status(400).json({
        message: "post_id, author_id y content son obligatorios"
      });
    }

    const newComment = await commentsService.createComment({
      post_id,
      author_id,
      content
    });

    return res.status(201).json(newComment);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllComments,
  getCommentsByPost,
  createComment
};