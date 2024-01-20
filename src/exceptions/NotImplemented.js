const ServerError = require('./ServerError');

class ServerNotImplemented extends ServerError {
  constructor(message) {
    super(message, 501);
    this.name = 'Not Implemented';
  }
}

module.exports = ServerNotImplemented;
