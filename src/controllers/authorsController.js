const authorsService = require("../services/authorsServices");

// GET /authors
const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await authorsService.getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

// GET /authors/:id
const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await authorsService.getAuthorById(id);

    if (!author) {
      return res.status(404).json({ message: "Author no encontrado" });
    }

    res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};

// POST /authors
const createAuthor = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name y email son obligatorios"
      });
    }

    const newAuthor = await authorsService.createAuthor({
      name,
      email,
      bio
    });

    return res.status(201).json(newAuthor);

  } catch (error) {
    // 🔴 manejo de email duplicado
    if (error.code === "23505") {
      return res.status(400).json({
        message: "El email ya existe"
      });
    }

    next(error);
  }
};

// PUT /authors/:id
const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    const updatedAuthor = await authorsService.updateAuthor(id, {
      name,
      email,
      bio
    });

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author no encontrado" });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedAuthor = await authorsService.deleteAuthor(id);

    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author no encontrado" });
    }

return res.status(204).send();

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor

};
