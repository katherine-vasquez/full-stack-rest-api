const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require("../controllers/authorsController");

console.log("createAuthor:", createAuthor);

// GET /authors
router.get("/", getAllAuthors);

// GET /authors/:id
router.get("/:id", getAuthorById);

// POST /authors
router.post("/", createAuthor);

// PUT /authors/:id
router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);


module.exports = router;