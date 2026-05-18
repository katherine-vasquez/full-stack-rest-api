const commentsService = require("../services/commentsServices");

console.log("SERVICE LOADED:", Object.keys(commentsService));

const getAllComments = async (req, res, next) => {
  try {
    const comments = await commentsService.getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllComments
};