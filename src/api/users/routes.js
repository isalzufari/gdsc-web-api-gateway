const routes = (handler) => [
  {
    method: 'POST',
    path: '/',
    handler: handler.addUserHandler,
  },
  {
    method: 'GET',
    path: '/{id}',
    handler: handler.getUserByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/{id}',
    handler: handler.deleteUserByIdHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: handler.getUsersHandler,
  },
];

module.exports = routes;
