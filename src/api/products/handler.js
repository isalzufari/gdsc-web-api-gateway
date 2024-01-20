const errorCheck = require("../../exceptions/ErrorCheck");

class ProductsHandler {
  constructor(usersService, productsService, commentsService) {
    this._usersService = usersService;
    this._productsService = productsService;
    this._commentsService = commentsService;

    this.addProductHandler = this.addProductHandler.bind(this);
    this.getProductsHandler = this.getProductsHandler.bind(this);
    this.getProductByIdHandler = this.getProductByIdHandler.bind(this);
    this.deleteProductByIdHandler = this.deleteProductByIdHandler.bind(this);
  }

  async addProductHandler(request, h) {
    // Live Code with Aisyah

  }

  async getProductsHandler(request, h) {
    // Live Code with Aisyah

  }

  async getProductByIdHandler(request, h) {
    // Live Code with Aisyah

  }

  async deleteProductByIdHandler(request, h) {
    // Live Code with Aisyah

  }
}

module.exports = ProductsHandler;
