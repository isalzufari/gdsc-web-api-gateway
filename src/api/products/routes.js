const routes = (handler) => [
  {
    method: 'POST',
    path: '/',
    handler: handler.addProductHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: handler.getProductsHandler,
  },
  {
    method: 'GET',
    path: '/{id}',
    handler: handler.getProductByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/{id}',
    handler: handler.deleteProductByIdHandler,
  },
];

module.exports = routes;
