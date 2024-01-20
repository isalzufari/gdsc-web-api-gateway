const errorCheck = require("../../exceptions/ErrorCheck");

class CommentsHandler {
  constructor(commentsService) {
    this._commentsService = commentsService;

    this.addCommentHandler = this.addCommentHandler.bind(this);
    this.getCommentsByIdHandler = this.getCommentsByIdHandler.bind(this);
    this.deleteCommentByIdHandler = this.deleteCommentByIdHandler.bind(this);
  }

  async addCommentHandler(request, h) {
    // Live Code with Nurhuda

  }

  async getCommentsByIdHandler(request, h) {
    // Live Code with Nurhuda

  }

  async deleteCommentByIdHandler(request, h) {
    // Live Code with Nurhuda

  }
}

module.exports = CommentsHandler;
