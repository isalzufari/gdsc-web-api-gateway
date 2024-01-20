const routes = (handler) => [
  {
    method: 'POST',
    path: '/{productId}/user/{userId}',
    handler: handler.addCommentHandler,
  },
  {
    method: 'GET',
    path: '/{productId}',
    handler: handler.getCommentsByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/{commentId}',
    handler: handler.deleteCommentByIdHandler,
  },
];

module.exports = routes;
