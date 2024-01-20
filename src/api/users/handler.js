const errorCheck = require("../../exceptions/ErrorCheck");

class UsersHandler {
  constructor(usersService) {
    this._usersService = usersService;

    this.addUserHandler = this.addUserHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
    this.deleteUserByIdHandler = this.deleteUserByIdHandler.bind(this);
    this.getUsersHandler = this.getUsersHandler.bind(this);
  }

  // Register
  async addUserHandler(request, h) {
    // Live Code with  Nurhuda

  }

  async getUserByIdHandler(request, h) {
    // Live Code with Nurhuda

  }

  async deleteUserByIdHandler(request, h) {
    // Live Code with Nurhuda

  }

  async getUsersHandler(request, h) {
    // Live Code with Nurhuda
  }
}

module.exports = UsersHandler;
