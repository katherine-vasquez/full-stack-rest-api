const postsService = require("../services/postsServices");

// =========================
// GET ALL POSTS
// =========================
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postsService.getAllPosts();

    res.status(200).json(posts);

  } catch (error) {
    next(error);
  }
};

// =========================
// GET POST BY ID
// =========================
const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postsService.getPostById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado"
      });
    }

    res.status(200).json(post);

  } catch (error) {
    next(error);
  }
};

// =========================
// GET POSTS BY AUTHOR
// =========================
const getPostsByAuthor = async (req, res, next) => {
  try {
    const { authorId } = req.params;

    const posts = await postsService.getPostsByAuthor(authorId);

    res.status(200).json(posts);

  } catch (error) {
    next(error);
  }
};

// =========================
// CREATE POST
// =========================
const createPost = async (req, res, next) => {
  try {
    const {
      title,
      content,
      author_id,
      published
    } = req.body;

if (!title || !content || !author_id) {
  return res.status(400).json({
    message: "title, content y author_id son obligatorios"
  });
}

    const newPost = await postsService.createPost({
      title,
      content,
      author_id,
      published
    });

    res.status(201).json(newPost);

  } catch (error) {
    next(error);
  }
};

// =========================
// UPDATE POST
// =========================
const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title,
      content,
      author_id,
      published
    } = req.body;

    const updatedPost = await postsService.updatePost(
      id,
      {
        title,
        content,
        author_id,
        published
      }
    );

    if (!updatedPost) {
      return res.status(404).json({
        message: "Post no encontrado"
      });
    }

    res.status(200).json(updatedPost);

  } catch (error) {
    next(error);
  }
};

// =========================
// DELETE POST
// =========================
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPost = await postsService.deletePost(id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post no encontrado"
      });
    }

    res.status(200).json({
      message: "Post eliminado correctamente",
      post: deletedPost
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
};