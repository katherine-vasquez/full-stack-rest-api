const validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name y email son obligatorios"
    });
  }

  next();
};

const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body;

  if (!title || !content || !author_id) {
    return res.status(400).json({
      message: "title, content y author_id son obligatorios"
    });
  }

  next();
};

const validateComment = (req, res, next) => {
  const { post_id, author_id, content } = req.body;

  if (!post_id || !author_id || !content) {
    return res.status(400).json({
      message: "post_id, author_id y content son obligatorios"
    });
  }

  next();
};

module.exports = {
  validateAuthor,
  validatePost,
  validateComment
};