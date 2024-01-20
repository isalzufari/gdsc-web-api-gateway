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
    try {
      const users = this._usersService.post('/', request.payload);

      return h.response(
        users.data
      ).code(201)
    } catch (error) {
      errorCheck(error)
    }
  }

  async getUserByIdHandler(request, h) {
    try {
      const {id} = request.param;
      const users = this._usersService.get(`/${id}`, request.payload);

      return h.response(
        users.data
      ).code(201)
    } catch (error) {
      errorCheck(error)
    }

  }

  async deleteUserByIdHandler(request, h) {
    try {
      const {id} = request.param;
      const users = this._usersService.delete(`/${id}`, request.payload);

      return h.response(
        users.data
      ).code(201)
    } catch (error) {
      errorCheck(error)
    }

  }

  async getUsersHandler(request, h) {
    try {
      const users = this._usersService.get('/', request.payload);

      return h.response(
        users.data
      ).code(201)
    } catch (error) {
      errorCheck(error)
    }
  }
}

module.exports = UsersHandler;
