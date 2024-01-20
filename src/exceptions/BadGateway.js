const ServerError = require('./ServerError');

class ServerBadGateway extends ServerError {
  constructor(message) {
    super(message, 502);
    this.name = 'Bad Gateway';
  }
}

module.exports = ServerBadGateway;
